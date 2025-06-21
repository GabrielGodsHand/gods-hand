import { elizaLogger, stringToUuid, type Character } from "@elizaos/core";
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import { loadEnv } from "./config/env.js";
import { character } from "./character.ts";
import { getTokenForProvider, loadCharacters, parseArguments } from "./config/index.ts";
import https from 'https';
import readline from 'readline';
import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const SUPABASE_URL = 'xxxxxxxxxxxxxxx';
const SUPABASE_KEY = 'xxxxxxxxxxxxxxx';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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

// Load environment variables
loadEnv();

const config = {
  awsCredentials: {
    accessKeyId: 'xxxxxxxxxxxxxx',
    secretAccessKey: 'xxxxxxxxxxxxxxxx',
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
    developerKey: 'xxxxxxxxxxxxxxxxxxxx',
    searchEngineId: 'xxxxxxxxxxxxxxxxxxx'
  },
  server: {
    port: process.env.PORT || 3000
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

// Database operations
async function updateClaim(claimId: string, claimedAmount: number, reason: string, claimState: string): Promise<boolean> {
  const validStates = ['voting', 'approved', 'rejected', 'claimed'];
  if (!validStates.includes(claimState)) {
    console.error(`❌ Invalid claim_state: "${claimState}". Must be one of: ${validStates.join(', ')}`);
    return false;
  }

  try {
    const { data, error } = await supabase
      .from('claims')
      .update({
        claimed_amount: claimedAmount,
        reason: reason,
        claim_state: claimState
      })
      .eq('id', claimId);

    if (error) {
      console.error('❌ Update failed:', error);
      return false;
    } else {
      console.log('✅ Update successful:', data);
      return true;
    }
  } catch (error) {
    console.error('❌ Database error:', error);
    return false;
  }
}

async function fetchClaimDetails(claimId: string): Promise<{ amount: number } | null> {
  try {
    const { data, error } = await supabase
      .from('claims')
      .select('claimed_amount')
      .eq('id', claimId)
      .single();

    if (error) {
      console.error('❌ Fetch failed:', error);
      return null;
    }

    if (!data) {
      console.error(`❌ No claim found with ID: ${claimId}`);
      return null;
    }

    return {
      amount: data.claimed_amount
    };
  } catch (error) {
    console.error('❌ Database error:', error);
    return null;
  }
}

// Fact Checker System
class FactChecker {
  private bedrockClient: BedrockRuntimeClient;
  private googleSearch: GoogleSearch;

  constructor() {
    this.bedrockClient = new BedrockRuntimeClient({
      region: config.awsCredentials.region,
      credentials: {
        accessKeyId: config.awsCredentials.accessKeyId,
        secretAccessKey: config.awsCredentials.secretAccessKey
      }
    });
    this.googleSearch = new GoogleSearch();
  }

  async verifyStatement(statement: string): Promise<{ isTrue: boolean; sources: any[]; summary?: string }> {
    try {
      console.log(`🔍 Searching for evidence about: "${statement}"`);
      
      // First perform a web search
      const searchResults = await this.googleSearch.search(statement);
      
      if (searchResults.length === 0) {
        console.log("❌ No search results found");
        return { isTrue: false, sources: [] };
      }
      
      console.log(`Found ${searchResults.length} relevant search results`);
      
      // Prepare search results for analysis
      const searchResultsText = searchResults.slice(0, 5).map((result, index) => {
        return `Result ${index + 1}:
Title: ${result.title}
Snippet: ${result.snippet}
URL: ${result.link}\n`;
      }).join('\n');

      // Use Bedrock to analyze the results
      const prompt = `Analyze the following search results to determine if the statement is true or false.

STATEMENT TO VERIFY: "${statement}"

SEARCH RESULTS:
${searchResultsText}

INSTRUCTIONS:
1. Carefully read each search result
2. Determine if the statement is supported by credible sources (TRUE) or contradicted/not found (FALSE)
3. Provide a brief explanation (1-2 sentences)
4. Return your response in this EXACT JSON format:
{
  "isTrue": true|false,
  "explanation": "Brief explanation of your conclusion",
  "mostRelevantSource": {
    "title": "Title of most relevant result",
    "url": "URL of most relevant result"
  }
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
          inferenceConfig: config.modelSettings.inferenceConfig
        })
      };

      const command = new InvokeModelCommand(input);
      const response = await this.bedrockClient.send(command);
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));
      const resultText = responseBody.output.message.content[0].text.trim();
      
      // Extract JSON from the response
      const jsonStart = resultText.indexOf('{');
      const jsonEnd = resultText.lastIndexOf('}') + 1;
      const jsonString = resultText.slice(jsonStart, jsonEnd);
      const analysis = JSON.parse(jsonString);
      
      // Prepare the sources
      const sources = searchResults.map(result => ({
        title: result.title,
        url: result.link,
        snippet: result.snippet
      }));

      return {
        isTrue: analysis.isTrue,
        sources: sources,
        summary: analysis.explanation
      };
    } catch (error) {
      console.error("Error verifying statement:", error);
      return { isTrue: false, sources: [] };
    }
  }

  async analyzeNGOPetition(petition: string): Promise<{ isTrue: boolean; amount: number; sources: any[]; summary?: string; reasoning?: string }> {
    try {
      console.log(`🔍 Analyzing NGO petition: "${petition}"`);
      
      // First perform a web search
      const searchResults = await this.googleSearch.search(petition);
      
      if (searchResults.length === 0) {
        console.log("❌ No search results found");
        return { isTrue: false, amount: 0, sources: [] };
      }
      
      console.log(`Found ${searchResults.length} relevant search results`);
      
      // Prepare search results for analysis
      const searchResultsText = searchResults.slice(0, 5).map((result, index) => {
        return `Result ${index + 1}:
Title: ${result.title}
Snippet: ${result.snippet}
URL: ${result.link}\n`;
      }).join('\n');

      // Use Bedrock to analyze the results
      const prompt = `Analyze the following NGO petition and search results to determine:
1. If the NGO actually helped people as claimed (TRUE or FALSE)
2. A reasonable funding amount in USD that should be allocated to the NGO based on their work

NGO PETITION: "${petition}"

SEARCH RESULTS:
${searchResultsText}

INSTRUCTIONS:
1. Carefully read the NGO petition and search results
2. Determine if the NGO's claims are supported by credible sources (TRUE) or contradicted/not found (FALSE)
3. Estimate a reasonable funding amount in USD based on the scale and impact of their work
4. Provide a brief explanation (1-2 sentences) for your conclusion
5. Provide detailed reasoning (3-5 sentences) explaining how you arrived at the specific funding amount, including factors like:
   - Scale of the disaster/situation
   - Number of people helped
   - Types of aid provided (food, shelter, medical, etc.)
   - Duration of assistance
   - Comparison to similar aid efforts if available
6. Return your response in this EXACT JSON format:
{
  "isTrue": true|false,
  "amount": 10000,
  "explanation": "Brief explanation of your conclusion",
  "fundingReasoning": "Detailed explanation of how you arrived at the funding amount"
}

IMPORTANT: The amount should be ONLY a number without any currency symbols, commas, or special characters.
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
          inferenceConfig: config.modelSettings.inferenceConfig
        })
      };

      const command = new InvokeModelCommand(input);
      const response = await this.bedrockClient.send(command);
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));
      const resultText = responseBody.output.message.content[0].text.trim();
      
      // Extract JSON from the response
      const jsonStart = resultText.indexOf('{');
      const jsonEnd = resultText.lastIndexOf('}') + 1;
      const jsonString = resultText.slice(jsonStart, jsonEnd);
      const analysis = JSON.parse(jsonString);
      
      // Prepare the sources
      const sources = searchResults.map(result => ({
        title: result.title,
        url: result.link,
        snippet: result.snippet
      }));

      return {
        isTrue: analysis.isTrue,
        amount: analysis.amount,
        sources: sources,
        summary: analysis.explanation,
        reasoning: analysis.fundingReasoning
      };
    } catch (error) {
      console.error("Error analyzing NGO petition:", error);
      return { isTrue: false, amount: 0, sources: [] };
    }
  }

  async processVote(voteResult: string, amount: number, petition: string): Promise<{ newAmount: number; explanation: string }> {
    try {
      console.log(`🗳️ Processing vote: "${voteResult}" for petition: "${petition}"`);
      
      if (voteResult.toLowerCase() === 'approve') {
        return { newAmount: amount, explanation: "approved" };
      }
      
      if (voteResult.toLowerCase() === 'reject') {
        return { newAmount: 0, explanation: "rejected" };
      }
      
      // For higher/lower votes, we need to analyze the petition again
      const searchResults = await this.googleSearch.search(petition);
      
      if (searchResults.length === 0) {
        console.log("❌ No search results found");
        return { 
          newAmount: voteResult.toLowerCase() === 'higher' ? Math.round(amount * 1.1) : Math.round(amount * 0.9),
          explanation: "Adjusted based on vote with limited information available."
        };
      }
      
      // Prepare search results for analysis
      const searchResultsText = searchResults.slice(0, 5).map((result, index) => {
        return `Result ${index + 1}:
Title: ${result.title}
Snippet: ${result.snippet}
URL: ${result.link}\n`;
      }).join('\n');

      // Use Bedrock to analyze the results
      const prompt = `Analyze the following NGO petition and search results to adjust the funding amount.

NGO PETITION: "${petition}"
CURRENT AMOUNT: ${amount} USD
VOTE RESULT: ${voteResult} (${voteResult.toLowerCase() === 'higher' ? 'People feel the NGO deserves more funding' : 'People feel the NGO deserves less funding'})

SEARCH RESULTS:
${searchResultsText}

INSTRUCTIONS:
1. Carefully read the NGO petition and search results
2. Based on the vote result and available information, adjust the funding amount
3. If vote is "higher", increase the amount reasonably
4. If vote is "lower", decrease the amount reasonably
5. Provide a brief explanation for your adjustment
6. Return your response in this EXACT JSON format:
{
  "newAmount": 12000,
  "explanation": "Brief explanation of your adjustment"
}

IMPORTANT: The newAmount should be ONLY a number without any currency symbols, commas, or special characters.
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
          inferenceConfig: config.modelSettings.inferenceConfig
        })
      };

      const command = new InvokeModelCommand(input);
      const response = await this.bedrockClient.send(command);
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));
      const resultText = responseBody.output.message.content[0].text.trim();
      
      // Extract JSON from the response
      const jsonStart = resultText.indexOf('{');
      const jsonEnd = resultText.lastIndexOf('}') + 1;
      const jsonString = resultText.slice(jsonStart, jsonEnd);
      const analysis = JSON.parse(jsonString);
      
      return {
        newAmount: analysis.newAmount,
        explanation: analysis.explanation
      };
    } catch (error) {
      console.error("Error processing vote:", error);
      // Fallback adjustment
      return { 
        newAmount: voteResult.toLowerCase() === 'higher' ? Math.round(amount * 1.1) : Math.round(amount * 0.9),
        explanation: "Error occurred during processing. Applied standard adjustment."
      };
    }
  }
}

// Create Express server
function createServer(factChecker: FactChecker) {
  const app = express();
  
  // Middleware
  app.use(express.json());
  app.use(cors());
  
  // Health check endpoint
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });
  
  // Fact check endpoint
  app.post('/api/fact-check', async (req, res) => {
    try {
      const { statement } = req.body;
      
      if (!statement) {
        return res.status(400).json({ error: 'Statement is required' });
      }
      
      console.log(`\n🔎 API Request - Analyzing NGO Petition: "${statement}"`);
      
      const startTime = Date.now();
      const result = await factChecker.analyzeNGOPetition(statement);
      const responseTime = Date.now() - startTime;
      
      console.log(`\n📊 Analysis Result (${responseTime}ms):`);
      console.log(`Petition: "${statement}"`);
      console.log(`Is True: ${result.isTrue ? '✅ TRUE' : '❌ FALSE'}`);
      console.log(`Recommended Amount: $${result.amount}`);
      
      if (result.summary) {
        console.log(`\n📝 Explanation: ${result.summary}`);
      }
      
      if (result.reasoning) {
        console.log(`\n💰 Funding Reasoning: ${result.reasoning}`);
      }
      
      if (result.sources.length > 0) {
        console.log(`\n🔗 Sources (${result.sources.length}):`);
        result.sources.slice(0, 3).forEach((source, index) => {
          console.log(`\n${index + 1}. ${source.title}`);
          console.log(`   ${source.snippet}`);
          console.log(`   ${source.url}`);
        });
      }
      
      res.status(200).json({
        petition: statement,
        isTrue: result.isTrue,
        amount: result.amount,
        summary: result.summary,
        reasoning: result.reasoning,
        sources: result.sources.slice(0, 3),
        responseTimeMs: responseTime
      });
    } catch (error) {
      console.error('Error processing fact check request:', error);
      res.status(500).json({ error: 'Failed to process fact check request' });
    }
  });
  
  // Voting endpoint
  app.post('/api/voting', async (req, res) => {
    try {
      const { voteResult, petition, uuid } = req.body;
      
      if (!voteResult || !petition) {
        return res.status(400).json({ 
          error: 'Vote result and petition are required' 
        });
      }
      
      if (!uuid) {
        return res.status(400).json({
          error: 'UUID is required to identify the claim'
        });
      }
      
      // Validate vote result
      const validVoteResults = ['higher', 'lower', 'approve', 'reject'];
      if (!validVoteResults.includes(voteResult.toLowerCase())) {
        return res.status(400).json({ 
          error: 'Vote result must be one of: higher, lower, approve, reject' 
        });
      }
      
      // Fetch the current claimed amount from the database
      const claimDetails = await fetchClaimDetails(uuid);
      
      if (!claimDetails) {
        return res.status(404).json({
          error: `Claim with ID ${uuid} not found`
        });
      }
      
      const amount = claimDetails.amount;
      
      console.log(`\n🗳️ API Request - Processing Vote: "${voteResult}" for petition with ID: ${uuid}`);
      console.log(`Current claimed amount: $${amount}`);
      
      const startTime = Date.now();
      const result = await factChecker.processVote(voteResult, amount, petition);
      const responseTime = Date.now() - startTime;
      
      console.log(`\n📊 Vote Processing Result (${responseTime}ms):`);
      console.log(`Vote: "${voteResult}"`);
      console.log(`Original Amount: $${amount}`);
      console.log(`New Amount: $${result.newAmount}`);
      console.log(`Explanation: ${result.explanation}`);
      
      // Determine the claim state based on vote result
      let claimState = 'voting';
      if (voteResult.toLowerCase() === 'approve') {
        claimState = 'approved';
      } else if (voteResult.toLowerCase() === 'reject') {
        claimState = 'rejected';
      }
      
      // Update the database
      const dbUpdateSuccess = await updateClaim(
        uuid,
        result.newAmount,
        result.explanation,
        claimState
      );
      
      if (!dbUpdateSuccess) {
        console.warn(`⚠️ Failed to update database for claim: ${uuid}`);
      }
      
      res.status(200).json({
        voteResult,
        originalAmount: amount,
        newAmount: result.newAmount,
        explanation: result.explanation,
        claimId: uuid,
        claimState: claimState,
        dbUpdateSuccess: dbUpdateSuccess,
        responseTimeMs: responseTime
      });
    } catch (error) {
      console.error('Error processing voting request:', error);
      res.status(500).json({ error: 'Failed to process voting request' });
    }
  });
  
  return app;
}

// Main function
async function main() {
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

    console.log(`\n🚀 Initializing Fact Checker System...`);
    
    if (selectedCharacter.settings && (selectedCharacter.settings as any).modelId) {
      config.modelSettings.modelId = (selectedCharacter.settings as any).modelId;
    }
    
    console.log(`Using AWS Bedrock model: ${config.modelSettings.modelId} in region: ${config.awsCredentials.region}`);

    const factChecker = new FactChecker();
    
    // Create and start Express server
    const app = createServer(factChecker);
    const port = config.server.port;
    
    app.listen(port, () => {
      console.log(`\n🌐 Fact Checker API server running on port ${port}`);
      console.log(`Try it out: curl -X POST http://localhost:${port}/api/fact-check -H "Content-Type: application/json" -d '{"statement":"Our NGO provided food and shelter to 500 families affected by the recent hurricane"}'`);
      console.log(`Or voting: curl -X POST http://localhost:${port}/api/voting -H "Content-Type: application/json" -d '{"voteResult":"higher", "petition":"Our NGO provided food and shelter to 500 families affected by the recent hurricane", "uuid":"b930308b-9d25-4431-8fb7-b29e62d06ab3"}'`);
    });

    // Also provide CLI interface for testing
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log("\n💻 CLI interface also available. Enter statements below:");
    
    function promptForStatement() {
      rl.question('\nEnter an NGO petition to analyze or "vote:result:petition:uuid" to process a vote (or type "exit" to quit): ', async (input) => {
        if (input.toLowerCase() === 'exit') {
          rl.close();
          return;
        }

        // Check if this is a vote command
        if (input.startsWith('vote:')) {
          const parts = input.substring(5).split(':');
          if (parts.length !== 3) {
            console.log('\n❌ Invalid vote format. Use "vote:result:petition:uuid"');
            promptForStatement();
            return;
          }

          const [voteResult, petition, uuid] = parts;
          
          // Fetch the current claimed amount from the database
          const claimDetails = await fetchClaimDetails(uuid);
          
          if (!claimDetails) {
            console.log(`\n❌ Claim with ID ${uuid} not found`);
            promptForStatement();
            return;
          }
          
          const amount = claimDetails.amount;

          console.log(`\n🗳️ Processing vote: "${voteResult}" for petition with ID ${uuid}`);
          console.log(`Current claimed amount: $${amount}`);
          
          const startTime = Date.now();
          const result = await factChecker.processVote(voteResult, amount, petition);
          const responseTime = Date.now() - startTime;
          
          // Determine the claim state based on vote result
          let claimState = 'voting';
          if (voteResult.toLowerCase() === 'approve') {
            claimState = 'approved';
          } else if (voteResult.toLowerCase() === 'reject') {
            claimState = 'rejected';
          }
          
          // Update the database
          const dbUpdateSuccess = await updateClaim(
            uuid,
            result.newAmount,
            result.explanation,
            claimState
          );
          
          console.log(`\n📊 Vote Result (${responseTime}ms):`);
          console.log("=".repeat(50));
          console.log(`Original Amount: $${amount}`);
          console.log(`New Amount: $${result.newAmount}`);
          console.log(`Explanation: ${result.explanation}`);
          console.log(`Database Update: ${dbUpdateSuccess ? '✅ Success' : '❌ Failed'}`);
          console.log(`Claim State: ${claimState}`);
          console.log("=".repeat(50));
        } else {
          // Process as an NGO petition
          const petition = input;
          console.log(`\n🔎 Analyzing NGO Petition: "${petition}"`);
          
          const startTime = Date.now();
          const result = await factChecker.analyzeNGOPetition(petition);
          const responseTime = Date.now() - startTime;
          
          console.log(`\n📊 Analysis Result (${responseTime}ms):`);
          console.log("=".repeat(50));
          console.log(`Petition: "${petition}"`);
          console.log(`Is True: ${result.isTrue ? '✅ TRUE' : '❌ FALSE'}`);
          console.log(`Recommended Amount: $${result.amount}`);
          
          if (result.summary) {
            console.log(`\n📝 Explanation: ${result.summary}`);
          }
          
          if (result.reasoning) {
            console.log(`\n💰 Funding Reasoning: ${result.reasoning}`);
          }
          
          if (result.sources.length > 0) {
            console.log(`\n🔗 Sources (${result.sources.length}):`);
            result.sources.slice(0, 3).forEach((source, index) => {
              console.log(`\n${index + 1}. ${source.title}`);
              console.log(`   ${source.snippet}`);
              console.log(`   ${source.url}`);
            });
          }
          
          console.log("=".repeat(50));
        }
        
        promptForStatement(); // Continue prompting
      });
    }

    promptForStatement();

  } catch (error) {
    elizaLogger.error("Error in fact checker system:", error);
    console.error("Failed to run system:", (error as Error).message);
    process.exit(1);
  }
}

// Start the application
main().catch((error) => {
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