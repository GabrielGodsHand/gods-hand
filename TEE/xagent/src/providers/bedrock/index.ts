import { createAmazonBedrock } from "@ai-sdk/amazon-bedrock";

// Define interfaces needed since they don't seem to be exported from elizaOS/core
interface CompletionOptions {
  temperature?: number;
  maxTokens?: number;
  topP?: number;
  character?: any;
}

interface ChatCompletionOptions extends CompletionOptions {
  character?: any;
}

interface ModelProviderInterface {
  complete(prompt: string, options?: CompletionOptions): Promise<string>;
  chatComplete(messages: any[], options?: ChatCompletionOptions): Promise<any>;
}

export class BedrockProvider implements ModelProviderInterface {
  private client: any;
  private modelId: string;

  constructor(apiKey: string, modelId: string = "amazon.nova-lite-v1:0") {
    this.modelId = modelId;
<<<<<<< HEAD
    
=======

>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
    // Initialize the Bedrock client
    this.client = createAmazonBedrock({
      region: process.env.AWS_REGION || "us-east-1",
      // We'll use environment variables instead of explicit credentials
    });
  }

  async complete(prompt: string, options?: CompletionOptions): Promise<string> {
    try {
<<<<<<< HEAD
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
=======
      const response = await fetch(
        "https://api.amazonaws.com/bedrock-runtime/model/" +
          this.modelId +
          "/invoke",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.AWS_ACCESS_KEY_ID}`,
          },
          body: JSON.stringify({
            prompt: prompt,
            temperature: options?.temperature || 0.7,
            max_tokens: options?.maxTokens || 500,
            top_p: options?.topP || 0.9,
          }),
        }
      );

      const data = await response.json();
      return data.completion || data.generated_text || "";
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
    } catch (error) {
      console.error("Error in Bedrock completion:", error);
      return "I'm sorry, I couldn't process that request.";
    }
  }

<<<<<<< HEAD
  async chatComplete(messages: any[], options?: ChatCompletionOptions): Promise<any> {
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
=======
  async chatComplete(
    messages: any[],
    options?: ChatCompletionOptions
  ): Promise<any> {
    try {
      // Convert elizaOS message format to Bedrock format
      const formattedMessages = messages.map((msg) => {
        const role =
          msg.user === options?.character?.name ? "assistant" : "user";
        return {
          role,
          content: msg.content.text,
        };
      });

      const response = await fetch(
        "https://api.amazonaws.com/bedrock-runtime/model/" +
          this.modelId +
          "/invoke",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.AWS_ACCESS_KEY_ID}`,
          },
          body: JSON.stringify({
            messages: formattedMessages,
            temperature: options?.temperature || 0.7,
            max_tokens: options?.maxTokens || 500,
            top_p: options?.topP || 0.9,
          }),
        }
      );

      const data = await response.json();

      return {
        content: {
          text: data.completion || data.message?.content || "",
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
        },
        user: options?.character?.name,
      };
    } catch (error) {
      console.error("Error in Bedrock chat completion:", error);
      return {
        content: {
<<<<<<< HEAD
          text: "I'm sorry, I couldn't process that request."
        },
        user: options?.character?.name
=======
          text: "I'm sorry, I couldn't process that request.",
        },
        user: options?.character?.name,
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
      };
    }
  }
}

<<<<<<< HEAD
export default BedrockProvider; 
=======
export default BedrockProvider;
>>>>>>> 3c34de57e5389602cc79d803586d6a8342ed9a58
