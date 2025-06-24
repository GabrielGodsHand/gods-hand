import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Create DynamoDB client
const dynamoClient = new DynamoDBClient({
  region: (import.meta as any).env.VITE_AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: (import.meta as any).env.VITE_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: (import.meta as any).env.VITE_AWS_SECRET_ACCESS_KEY || "",
  },
});

// Create Document client for easier operations
const docClient = DynamoDBDocumentClient.from(dynamoClient);

export { dynamoClient, docClient }; 