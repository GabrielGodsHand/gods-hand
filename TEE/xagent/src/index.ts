import { elizaLogger, stringToUuid, type Character } from "@elizaos/core";
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import { loadEnv } from "./config/env.js";
import { character } from "./character.ts";
import { getTokenForProvider, loadCharacters, parseArguments } from "./config/index.ts";
import https from 'https';
import readline from 'readline';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

// Custom fetch implementation using built-in https module
function customFetch(url: string, options: any = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const reqOptions = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: options.headers || {}
    };

    const req = https.request(reqOptions, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          ok: res.statusCode >= 200 && res.statusCode < 300,
          status: res.statusCode,
          statusText: res.statusMessage,
          json: () => Promise.resolve(JSON.parse(data)),
          text: () => Promise.resolve(data)
        });
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    if (options.body) {
      req.write(options.body);
    }
    
    req.end();
  });
}

// Supabase client setup
const SUPABASE_URL = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const SUPABASE_KEY = 'xxxxxxxxxxxxxxxxxxxxxx';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Function to insert disaster event into the database
async function insertDisasterEvent(data: {
  location: string;
  title: string;
  description: string;
  amount: number;
  source: string;
  tweetId?: string;
}): Promise<void> {
  try {
    console.log('📊 Inserting disaster event into database...');
    
    const { data: insertedData, error } = await supabase
      .from('events')
      .insert([{
        id: uuidv4(),
        disaster_location: data.location,
        created_at: new Date().toISOString(),
        title: data.title,
        description: data.description,
        estimated_amount_required: data.amount,
        source: data.source,
        tweet_id: data.tweetId || null,
        updated_at: new Date().toISOString()
      }]);

    if (error) {
      console.error('❌ Database insert error:', error);
    } else {
      console.log('✅ Database insert successful:', insertedData);
    }
  } catch (error) {
    console.error('❌ Failed to insert disaster event:', error);
  }
}

// Function to post tweet to Twitter API
async function postTweet(content: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      const payload = JSON.stringify({ content });
      
      console.log("📡 Preparing Twitter API request...");
      console.log("🔗 API Endpoint: https://twitterapi-e53e.onrender.com/tweet");
      console.log("📦 Payload size:", Buffer.byteLength(payload), "bytes");
      
      const options = {
        hostname: 'twitterapi-e53e.onrender.com',
        path: '/tweet',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        },
        timeout: 30000 // 30 second timeout
      };
      
      console.log("🚀 Sending request to Twitter API...");
      const startTime = Date.now();
      
      const req = https.request(options, (res) => {
        console.log(`📥 Received response: HTTP ${res.statusCode} ${res.statusMessage}`);
        console.log(`📋 Response headers:`, JSON.stringify(res.headers, null, 2));
        
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          const responseTime = Date.now() - startTime;
          console.log(`⏱️ Response time: ${responseTime}ms`);
          console.log(`📄 Raw response data: ${data}`);
          
          if (res.statusCode >= 200 && res.statusCode < 300) {
            try {
              const result = JSON.parse(data);
              console.log('✅ Tweet posted successfully!');
              resolve(result);
            } catch (parseError) {
              console.error('❌ Error parsing Twitter API response:', parseError);
              console.error('📄 Raw response that failed to parse:', data);
              reject(new Error('Failed to parse Twitter API response'));
            }
          } else {
            console.error(`❌ Twitter API error: HTTP ${res.statusCode} ${res.statusMessage}`);
            console.error('📄 Error response body:', data);
            reject(new Error(`Twitter API error: ${res.statusCode} ${res.statusMessage}`));
          }
        });
      });
      
      req.on('error', (error) => {
        console.error('❌ Network error sending request to Twitter API:', error);
        console.error('📋 Error details:', error.message);
        reject(error);
      });
      
      req.on('timeout', () => {
        console.error('⏱️ Twitter API request timed out after 30 seconds');
        req.destroy();
        reject(new Error('Twitter API request timed out'));
      });
      
      console.log("📤 Sending payload to Twitter API...");
      req.write(payload);
      req.end();
      console.log("📤 Request sent, waiting for response...");
    } catch (error) {
      console.error('❌ Error in postTweet function:', error);
      console.error('📋 Error stack:', error.stack);
      reject(error);
    }
  });
}

// Load environment variables
loadEnv();

const config = {
  awsCredentials: {
    accessKeyId: 'xxxxxxxxxxxxxxx',
    secretAccessKey: 'xxxxxxxxxxxxxxxxx',
    region: 'us-east-1'
  },
  modelSettings: {
    modelId: 'amazon.nova-lite-v1:0',
    inferenceConfig: {
      maxTokens: 1000,
      temperature: 0.7,
      topP: 0.9
    }
  },
  googleSearch: {
    developerKey: 'xxxxxxxxxxxxxxxxxxxxx',
    searchEngineId: 'xxxxxxxxxxxxxxxxxxxxxx'
  },
  weatherXM: {
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxx'
  },
  geoapify: {
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxxx'
  }
};

// Google Search functionality
class GoogleSearch {
  constructor() {}

  async search(query: string): Promise<any[]> {
    try {
      const encodedQuery = encodeURIComponent(query);
      const url = `https://www.googleapis.com/customsearch/v1?key=${config.googleSearch.developerKey}&cx=${config.googleSearch.searchEngineId}&q=${encodedQuery}`;
      
      return new Promise((resolve, reject) => {
        https.get(url, (res) => {
          let data = '';
          
          res.on('data', (chunk) => {
            data += chunk;
          });
          
          res.on('end', () => {
            try {
              const response = JSON.parse(data);
              resolve(response.items || []);
            } catch (parseError) {
              elizaLogger.error("Error parsing search response:", parseError);
              resolve([]);
            }
          });
        }).on('error', (error) => {
          elizaLogger.error("Google search error:", error);
          resolve([]);
        });
      });
    } catch (error) {
      elizaLogger.error("Google search error:", error);
      return [];
    }
  }
}

// Disaster Assessment System
class DisasterAssessmentSystem {
  private bedrockClient: BedrockRuntimeClient;

  constructor() {
    this.bedrockClient = new BedrockRuntimeClient({
      region: config.awsCredentials.region,
      credentials: {
        accessKeyId: config.awsCredentials.accessKeyId,
        secretAccessKey: config.awsCredentials.secretAccessKey
      }
    });
  }

  async extractLocationFromNews(newsText: string): Promise<string> {
    const prompt = `Extract the primary city and country from this news text. Return ONLY the location in the format "City, Country" with no additional text or explanation. If multiple locations are mentioned, return the most relevant one.

News: ${newsText}

Location:`;

    const input = {
      modelId: config.modelSettings.modelId,
      contentType: 'application/json',
      accept: 'application/json',
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: [
              {
                text: prompt
              }
            ]
          }
        ],
        inferenceConfig: config.modelSettings.inferenceConfig
      })
    };

    try {
      const command = new InvokeModelCommand(input);
      const response = await this.bedrockClient.send(command);
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));
      return responseBody.output.message.content[0].text.trim();
    } catch (error) {
      throw new Error(`AWS Bedrock error: ${error.message}`);
    }
  }

     async geocode(area: string): Promise<any> {
     const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(area)}&apiKey=${config.geoapify.apiKey}`;
 
     const res = await customFetch(url);
     const data = await res.json();

    if (!data.features?.length) {
      throw new Error("No location data found");
    }

    const feature = data.features[0];
    const bbox = feature.bbox;

    if (!bbox || bbox.length !== 4) {
      throw new Error("Bounding box not available");
    }

    const [minLon, minLat, maxLon, maxLat] = bbox;

    return {
      min_latitude: minLat,
      max_latitude: maxLat,
      min_longitude: minLon,
      max_longitude: maxLon
    };
  }

     async getWeatherStations(bbox: any): Promise<any[]> {
     const url = `https://pro.weatherxm.com/api/v1/stations/bounds?min_lat=${bbox.min_latitude}&max_lat=${bbox.max_latitude}&min_lon=${bbox.min_longitude}&max_lon=${bbox.max_longitude}`;
     
     const res = await customFetch(url, {
       headers: {
         'X-API-KEY': config.weatherXM.apiKey
       }
     });

    if (!res.ok) {
      throw new Error(`WeatherXM API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    
    if (!data.stations) {
      throw new Error("No stations data found in response");
    }

    return data.stations.filter((station: any) => station.lastDayQod > 0);
  }

     async getStationLatestData(stationId: string): Promise<any> {
     const url = `https://pro.weatherxm.com/api/v1/stations/${stationId}/latest`;
     
     const res = await customFetch(url, {
       headers: {
         'X-API-KEY': config.weatherXM.apiKey
       }
     });

    if (!res.ok) {
      throw new Error(`Failed to fetch data for station ${stationId}: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  }

  async getMultipleStationsLatestData(stations: any[]): Promise<any> {
    const selectedStations = stations
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    
    const stationDataPromises = selectedStations.map((station: any) => 
      this.getStationLatestData(station.id)
    );
    
    const results = await Promise.allSettled(stationDataPromises);
    
    const successfulResults = [];
    const failedResults = [];
    
    results.forEach((result: any, index: number) => {
      if (result.status === 'fulfilled') {
        successfulResults.push({
          stationId: selectedStations[index].id,
          stationName: selectedStations[index].name,
          data: result.value
        });
      } else {
        failedResults.push({
          stationId: selectedStations[index].id,
          error: result.reason.message
        });
      }
    });
    
    return {
      successful: successfulResults,
      failed: failedResults
    };
  }

  async evaluateDisasterAndCalculateRelief(newsText: string, weatherData: any[]): Promise<any> {
    const weatherSummary = weatherData.map((station: any) => {
      return {
        name: station.stationName,
        id: station.stationId,
        data: station.data
      };
    });

    const prompt = `You are a disaster assessment expert. Analyze the following:

1. NEWS REPORT: "${newsText}"
2. WEATHER DATA FROM ${weatherData.length} STATIONS: ${JSON.stringify(weatherSummary, null, 2)}

Perform a DETAILED assessment including:
- Current weather conditions across all stations
- Severity of the weather event
- Potential impact on infrastructure and population
- Estimated number of affected people
- Required resources (shelter, food, medical, etc.)

Provide your analysis in this EXACT FORMAT:

{
  "relief_fund": 250000,
  "reasoning": "Detailed analysis of weather conditions and disaster impact..."
}

ONLY RETURN THE JSON OBJECT, NO ADDITIONAL TEXT.`;

    const input = {
      modelId: config.modelSettings.modelId,
      contentType: 'application/json',
      accept: 'application/json',
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: [
              {
                text: prompt
              }
            ]
          }
        ],
        inferenceConfig: {
          maxTokens: 1000,
          temperature: 0.5,
          topP: 0.9
        }
      })
    };

    try {
      const command = new InvokeModelCommand(input);
      const response = await this.bedrockClient.send(command);
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));
      
      const resultText = responseBody.output.message.content[0].text.trim();
      const jsonStart = resultText.indexOf('{');
      const jsonEnd = resultText.lastIndexOf('}') + 1;
      const jsonString = resultText.slice(jsonStart, jsonEnd);
      
      return JSON.parse(jsonString);
    } catch (error) {
      throw new Error(`Disaster evaluation error: ${error.message}`);
    }
  }

  async displayWeatherData(stationData: any): Promise<void> {
    console.log(`\nStation: ${stationData.stationName} (${stationData.stationId})`);
    console.log('------------------------------------------------');
    console.log('Observation:');
    console.log(`- Timestamp: ${stationData.data.observation.timestamp}`);
    console.log(`- Temperature: ${stationData.data.observation.temperature}°C`);
    console.log(`- Feels Like: ${stationData.data.observation.feels_like}°C`);
    console.log(`- Dew Point: ${stationData.data.observation.dew_point}°C`);
    console.log(`- Precipitation Rate: ${stationData.data.observation.precipitation_rate} mm/h`);
    console.log(`- Accumulated Precipitation: ${stationData.data.observation.precipitation_accumulated} mm`);
    console.log(`- Humidity: ${stationData.data.observation.humidity}%`);
    console.log(`- Wind Speed: ${stationData.data.observation.wind_speed} km/h`);
    console.log(`- Wind Gust: ${stationData.data.observation.wind_gust} km/h`);
    console.log(`- Wind Direction: ${stationData.data.observation.wind_direction}°`);
    console.log(`- UV Index: ${stationData.data.observation.uv_index}`);
    console.log(`- Pressure: ${stationData.data.observation.pressure} hPa`);
    console.log(`- Solar Irradiance: ${stationData.data.observation.solar_irradiance} W/m²`);
    console.log(`- Weather Icon: ${stationData.data.observation.icon}`);

    console.log('\nHealth Data:');
    console.log(`- Data Quality Score: ${stationData.data.health.data_quality.score}`);
    console.log(`- Location Quality Score: ${stationData.data.health.location_quality.score}`);
    console.log(`- Location Quality Reason: ${stationData.data.health.location_quality.reason}`);

    console.log('\nLocation:');
    console.log(`- Latitude: ${stationData.data.location.lat}`);
    console.log(`- Longitude: ${stationData.data.location.lon}`);
    console.log(`- Elevation: ${stationData.data.location.elevation} meters`);
  }

  async assessDisaster(newsText: string): Promise<any> {
    try {
      console.log('\n🌍 Extracting location from news...');
      const location = await this.extractLocationFromNews(newsText);
      console.log(`📍 Extracted location: ${location}`);
      
      console.log('\n🗺️ Getting coordinates...');
      const coordinates = await this.geocode(location);
      console.log(`📌 Bounding Box:`, coordinates);
      
      console.log('\n⛅ Fetching weather stations...');
      const activeStations = await this.getWeatherStations(coordinates);
      console.log(`📡 Found ${activeStations.length} active weather stations`);
      
      if (activeStations.length > 0) {
        console.log('\n📡 Fetching latest weather data for up to 5 stations...');
        const { successful, failed } = await this.getMultipleStationsLatestData(activeStations);
        
        console.log(`\n✅ Successfully fetched data for ${successful.length} stations:`);
        for (const station of successful) {
          await this.displayWeatherData(station);
        }
        
        if (failed.length > 0) {
          console.log(`\n❌ Failed to fetch data for ${failed.length} stations:`);
          failed.forEach((failure: any) => {
            console.log(`- Station ID: ${failure.stationId}, Error: ${failure.error}`);
          });
        }
        
        if (successful.length > 0) {
          console.log('\n🔍 Evaluating disaster and calculating relief fund...');
          const assessment = await this.evaluateDisasterAndCalculateRelief(
            newsText, 
            successful.map((s: any) => s.data)
          );
          
          console.log('\n📊 FINAL DISASTER ASSESSMENT:');
          console.log('=============================');
          console.log(`💰 ESTIMATED RELIEF FUND NEEDED: $${assessment.relief_fund}`);
          console.log('\n📝 DETAILED REASONING:');
          console.log(assessment.reasoning);
          
          return assessment;
        }
      } else {
        console.log('No active weather stations found in this area.');
      }
    } catch (error) {
      console.error('Error in disaster assessment:', error.message);
      throw error;
    }
  }
}

// Automated disaster tweet bot
class DisasterTweetBot {
  public character: Character;
  private bedrockClient: BedrockRuntimeClient;
  private googleSearch: GoogleSearch;
  private disasterAssessment: DisasterAssessmentSystem;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(character: Character) {
    this.character = character;
    this.googleSearch = new GoogleSearch();
    this.disasterAssessment = new DisasterAssessmentSystem();
    
    this.bedrockClient = new BedrockRuntimeClient({
      region: config.awsCredentials.region,
      credentials: {
        accessKeyId: config.awsCredentials.accessKeyId,
        secretAccessKey: config.awsCredentials.secretAccessKey
      }
    });
    
    if (this.character.settings && (this.character.settings as any).modelId) {
      config.modelSettings.modelId = (this.character.settings as any).modelId;
    }
  }

  async verifyBedrockConnectivity(): Promise<boolean> {
    try {
      console.log(`🔍 Testing Bedrock access with ${config.modelSettings.modelId}...`);
      
      const testPayload = {
        messages: [{
          role: "user",
          content: [{ text: "Hello" }]
        }],
        inferenceConfig: {
          maxTokens: 10,
          temperature: 0.1
        }
      };

      const command = new InvokeModelCommand({
        modelId: config.modelSettings.modelId,
        body: JSON.stringify(testPayload),
        contentType: 'application/json',
        accept: 'application/json'
      });

      await this.bedrockClient.send(command);
      console.log('✅ Bedrock access successful!');
      return true;
    } catch (error) {
      elizaLogger.error("Bedrock connectivity test failed:", error);
      console.log('❌ Bedrock access failed:', error.message);
      return false;
    }
  }

  private getCurrentMonthYear(): { month: string, year: string } {
    const now = new Date();
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return {
      month: months[now.getMonth()],
      year: now.getFullYear().toString()
    };
  }

  private createDisasterSearchQuery(): string {
    const { month, year } = this.getCurrentMonthYear();
    return `recent floods in Bangalore in May ${year}`;
  }

  async generateTweet(searchResults: any[], month: string, year: string): Promise<string> {
    try {
      let searchResultsText = "Search Results:\n";
      for (const result of searchResults.slice(0, 10)) {
        searchResultsText += `Title: ${result.title}\n`;
        searchResultsText += `Content: ${result.snippet}\n`;
        searchResultsText += `URL: ${result.link}\n\n`;
      }

      const bioText = Array.isArray(this.character.bio) 
        ? this.character.bio.join(' ') 
        : this.character.bio || '';
      
      const styleText = this.character.style?.chat 
        ? (Array.isArray(this.character.style.chat) 
          ? this.character.style.chat.join(' ') 
          : this.character.style.chat)
        : '';
      
      const adjectivesText = Array.isArray(this.character.adjectives) 
        ? this.character.adjectives.join(', ') 
        : '';

      console.log(`🤖 Character loaded: ${this.character.name}`);
      console.log(`📝 Bio: ${bioText.substring(0, 100)}...`);
      console.log(`🎭 Style: ${styleText.substring(0, 100)}...`);
      console.log(`✨ Adjectives: ${adjectivesText}`);

      const tweetPrompt = `You are ${this.character.name}. Here's your personality:

${this.character.system}

Character Bio: ${bioText}

Character Style: ${styleText}

Character Traits: ${adjectivesText}

Based on the search results below, create a structured tweet about the MOST recent natural disaster that happened in ${month} ${year}. Write it in your unique voice and style as ${this.character.name}.

${searchResultsText}

Requirements:
1. Pick the MOST recent disaster from ${year}
2. Structure the response EXACTLY as follows:
   Title: [Brief catchy title about the disaster - in ${this.character.name}'s voice]
   Description: [2-3 sentences describing the disaster and its impact - using ${this.character.name}'s personality and style]
   Read More: [URL from the search results]

3. Focus on disasters that happened specifically in ${month} ${year}
4. Make the title engaging but factual, reflecting ${this.character.name}'s personality
5. Write the description in ${this.character.name}'s unique voice and style
6. Use the most relevant URL from the search results
7. Be empathetic and informative while maintaining your character`;

      const payload = {
        messages: [{
          role: "user",
          content: [{ text: tweetPrompt }]
        }],
        inferenceConfig: {
          maxTokens: 400,
          temperature: 0.5
        }
      };

      const command = new InvokeModelCommand({
        modelId: config.modelSettings.modelId,
        body: JSON.stringify(payload),
        contentType: 'application/json',
        accept: 'application/json'
      });

      const response = await this.bedrockClient.send(command);
      const responseBody = new TextDecoder().decode(response.body);
      const parsedResponse = JSON.parse(responseBody);

      return parsedResponse.output?.message?.content?.[0]?.text?.trim() || "NIL";
    } catch (error) {
      elizaLogger.error("Error generating tweet:", error);
      return "NIL";
    }
  }

  private isNewDisaster(tweet: string): boolean {
    if (tweet === "NIL") return false;
    const titleMatch = tweet.match(/Title:\s*(.+)/i);
    if (!titleMatch) return false;
    console.log(`✅ Processing disaster: "${titleMatch[1].trim()}"`);
    return true;
  }

  async processDisasterSearch(): Promise<void> {
    try {
      const { month, year } = this.getCurrentMonthYear();
      const searchQuery = this.createDisasterSearchQuery();
      
      console.log(`\n🔍 Searching for disasters: ${searchQuery}`);
      
      const searchResults = await this.googleSearch.search(searchQuery);
      
      if (searchResults.length === 0) {
        console.log("NIL");
        return;
      }
      
      const tweet = await this.generateTweet(searchResults, month, year);
      
      if (tweet === "NIL" || !this.isNewDisaster(tweet)) {
        console.log("NIL");
        return;
      }
      
      console.log("\n" + "=".repeat(50));
      console.log("📢 NEW DISASTER TWEET:");
      console.log("=".repeat(50));
      console.log(tweet);
      console.log("=".repeat(50) + "\n");

      // Extract the description part for assessment
      const descriptionMatch = tweet.match(/Description:\s*([\s\S]+?)(?=Read More:|$)/i);
      const description = descriptionMatch ? descriptionMatch[1].trim() : tweet;

      // Perform disaster assessment
      const assessment = await this.disasterAssessment.assessDisaster(description);
      
      // Create a more concise tweet for posting
      // Extract title and description from the original tweet
      const titleMatch = tweet.match(/Title:\s*(.+?)(?=\n|$)/i);
      const descMatch = tweet.match(/Description:\s*([\s\S]+?)(?=Read More:|$)/i);
      const urlMatch = tweet.match(/Read More:\s*\[(.*?)\]/i);
      
      // Create a concise title (max 5 words)
      const fullTitle = titleMatch ? titleMatch[1].trim() : "Disaster Alert";
      const conciseTitle = fullTitle.split(' ').slice(0, 5).join(' ');
      
      // Get the URL if available
      const url = urlMatch ? urlMatch[1].trim() : "";
      
      // Create a concise description with remaining character count
      const fullDesc = descMatch ? descMatch[1].trim() : "";
      
      // Calculate available characters for description
      // Format: Title + newlines + "Relief Fund: $" + amount + newline + url
      const fixedChars = conciseTitle.length + 4 + 13 + assessment.relief_fund.toString().length + 1 + url.length;
      const availableForDesc = 250 - fixedChars;
      
      // Truncate description to fit within character limit
      let conciseDesc = "";
      if (availableForDesc > 0) {
        // First try with words
        let words = fullDesc.split(' ');
        let currentDesc = "";
        for (let word of words) {
          if ((currentDesc + word).length <= availableForDesc - 1) { // -1 for space
            currentDesc += (currentDesc ? " " : "") + word;
          } else {
            break;
          }
        }
        conciseDesc = currentDesc;
        
        // If still too long, truncate characters
        if (conciseDesc.length > availableForDesc) {
          conciseDesc = conciseDesc.substring(0, availableForDesc - 3) + "...";
        }
      }
      
      // Format the final tweet
      const finalTweet = `${conciseTitle}\n\n${conciseDesc}\n\nRelief Fund: $${assessment.relief_fund}\n${url}`;
      
      // Double-check length and truncate if needed
      const finalTweetToUse = finalTweet.length > 250 
        ? finalTweet.substring(0, 247) + "..." 
        : finalTweet;
        
      if (finalTweet.length > 250) {
        console.log(`⚠️ Tweet exceeds 250 characters (${finalTweet.length}). Truncating...`);
        console.log(`✂️ Truncated from ${finalTweet.length} to ${finalTweetToUse.length} characters`);
      }
      
      // Combine results
      const result = {
        tweet: tweet,
        assessment: assessment,
        conciseTweet: finalTweetToUse
      };

      console.log("\n" + "⭐".repeat(20));
      console.log("FINAL RESULTS:");
      console.log("⭐".repeat(20));
      console.log("ORIGINAL TWEET CONTENT:");
      console.log(tweet);
      console.log("\nRELIEF FUND ASSESSMENT:");
      console.log(`Amount: $${assessment.relief_fund}`);
      console.log(`Reasoning: ${assessment.reasoning}`);
      console.log("\nCONCISE TWEET FOR POSTING:");
      console.log("-".repeat(50));
      console.log(finalTweetToUse);
      console.log(`Character count: ${finalTweetToUse.length}/250`);
      console.log("-".repeat(50));
      console.log("⭐".repeat(20) + "\n");
      
      // Post complete tweet to Twitter after all processing is done
      console.log("🐦 Posting final tweet with assessment to Twitter...");
      console.log("📤 Tweet payload length:", finalTweetToUse.length, "characters");
      try {
        const twitterResponse = await postTweet(finalTweetToUse);
        console.log("✅ Complete tweet posted to Twitter");
        console.log("📊 Twitter API Response:");
        console.log(JSON.stringify(twitterResponse, null, 2));
        
        if (twitterResponse && twitterResponse.success) {
          console.log("🎉 SUCCESS! Tweet posted with ID:", twitterResponse.tweet?.data?.id);
          console.log("🔗 View the tweet at: https://twitter.com/user/status/" + twitterResponse.tweet?.data?.id);
          
          // Extract location from assessment
          const location = await this.disasterAssessment.extractLocationFromNews(description);
          
          // Store disaster event in database
          await insertDisasterEvent({
            location: location,
            title: fullTitle,
            description: fullDesc,
            amount: assessment.relief_fund,
            source: url,
            tweetId: twitterResponse.tweet?.data?.id
          });
          
          console.log("💾 Disaster event data stored in database");
        } else {
          console.log("⚠️ Twitter API returned success:false");
        }
      } catch (error) {
        console.error("❌ Failed to post tweet:", error.message);
        console.error("📋 Error details:", error);
      }

    } catch (error) {
      elizaLogger.error("Error processing disaster search:", error);
      console.log("NIL");
    }
  }

  startAutomatedProcess(): void {
    console.log("🤖 Starting automated disaster assessment system...");
    console.log("⏰ Running every 60 seconds");
    console.log("🛑 Press Ctrl+C to stop\n");
    
    this.processDisasterSearch();
    
    this.intervalId = setInterval(() => {
      console.log("\n⏱️ 60-second interval reached - searching for new disasters...");
      this.processDisasterSearch();
    }, 60000);
  }

  stopAutomatedProcess(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log("🛑 Automated process stopped");
    }
  }
}

// Main function
async function startDisasterAssessmentSystem() {
  try {
    const args = parseArguments();
    let charactersArg = args.characters || args.character;
    let characters = [character];

    if (charactersArg) {
      characters = await loadCharacters(charactersArg);
    }

    const selectedCharacter = characters[0];
    selectedCharacter.id ??= stringToUuid(selectedCharacter.name);
    selectedCharacter.username ??= selectedCharacter.name;

    console.log(`\n🚀 Initializing Disaster Assessment System...`);
    
    if (selectedCharacter.settings && (selectedCharacter.settings as any).modelId) {
      config.modelSettings.modelId = (selectedCharacter.settings as any).modelId;
    }
    
    console.log(`Using AWS Bedrock model: ${config.modelSettings.modelId} in region: ${config.awsCredentials.region}`);

    const disasterBot = new DisasterTweetBot(selectedCharacter);

    console.log("Testing connection to AWS Bedrock...");
    const isConnected = await disasterBot.verifyBedrockConnectivity();
    if (!isConnected) {
      throw new Error("Failed to connect to AWS Bedrock. Please check your AWS credentials and network connection.");
    }
    console.log("✅ AWS Bedrock connection successful!");

    disasterBot.startAutomatedProcess();

    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down gracefully...');
      disasterBot.stopAutomatedProcess();
      process.exit(0);
    });

    process.on('SIGTERM', () => {
      console.log('\n🛑 Shutting down gracefully...');
      disasterBot.stopAutomatedProcess();
      process.exit(0);
    });

  } catch (error) {
    elizaLogger.error("Error starting system:", error);
    console.error("Failed to start system:", (error as Error).message);
    process.exit(1);
  }
}

// Start the application
startDisasterAssessmentSystem().catch((error) => {
  elizaLogger.error("Unhandled error:", error);
  
  if (error.message.includes('getaddrinfo') || error.message.includes('ENOTFOUND')) {
    console.error("\n❌ Network connectivity issue: Could not connect to AWS Bedrock.");
    console.error("   Please check your internet connection and AWS region configuration.");
  } else if (error.message.includes('credentials') || error.message.includes('AccessDenied')) {
    console.error("\n❌ AWS authentication error: Invalid or missing credentials.");
    console.error("   Please check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables.");
  } else {
    console.error("\n❌ Application error:", error.message);
  }
  
  process.exit(1);
});