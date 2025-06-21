import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock";

// Define interfaces needed since they don't seem to be exported from elizaOS/core
class BedrockProvider {
  constructor(apiKey, modelId = "amazon.nova-lite-v1:0") {
    this.modelId = modelId;
    
    // Initialize the Bedrock client
    this.client = createAmazonBedrock({
      region: process.env.AWS_REGION || "us-east-1",
      // We'll use environment variables instead of explicit credentials
    });
  }

  async complete(prompt, options = {}) {
    try {
      const response = await fetch('https://api.amazonaws.com/bedrock-runtime/model/' + this.modelId + '/invoke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.AWS_ACCESS_KEY_ID}`
        },
        body: JSON.stringify({
          prompt: prompt,
          temperature: options?.temperature || 0.7,
          max_tokens: options?.maxTokens || 500,
          top_p: options?.topP || 0.9
        })
      });
      
      const data = await response.json();
      return data.completion || data.generated_text || '';
    } catch (error) {
      console.error("Error in Bedrock completion:", error);
      return "I'm sorry, I couldn't process that request.";
    }
  }

  async chatComplete(messages, options = {}) {
    try {
      // Convert elizaOS message format to Bedrock format
      const formattedMessages = messages.map(msg => {
        const role = msg.user === options?.character?.name ? "assistant" : "user";
        return {
          role,
          content: msg.content.text
        };
      });

      const response = await fetch('https://api.amazonaws.com/bedrock-runtime/model/' + this.modelId + '/invoke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.AWS_ACCESS_KEY_ID}`
        },
        body: JSON.stringify({
          messages: formattedMessages,
          temperature: options?.temperature || 0.7,
          max_tokens: options?.maxTokens || 500,
          top_p: options?.topP || 0.9
        })
      });
      
      const data = await response.json();
      
      return {
        content: {
          text: data.completion || data.message?.content || '',
        },
        user: options?.character?.name,
      };
    } catch (error) {
      console.error("Error in Bedrock chat completion:", error);
      return {
        content: {
          text: "I'm sorry, I couldn't process that request."
        },
        user: options?.character?.name
      };
    }
  }
}

export default BedrockProvider; 