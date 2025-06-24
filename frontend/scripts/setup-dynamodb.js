import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { CreateTableCommand, DescribeTableCommand } from "@aws-sdk/client-dynamodb";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Try both VITE_ prefixed and plain environment variable names
const awsRegion = process.env.AWS_REGION || process.env.VITE_AWS_REGION || "us-east-1";
const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID || process.env.VITE_AWS_ACCESS_KEY_ID;
const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || process.env.VITE_AWS_SECRET_ACCESS_KEY;

// Debug: Check if environment variables are loaded
console.log("Environment check:");
console.log("AWS_REGION:", awsRegion ? "✓ Set" : "✗ Not set");
console.log("AWS_ACCESS_KEY_ID:", awsAccessKeyId ? "✓ Set" : "✗ Not set");
console.log("AWS_SECRET_ACCESS_KEY:", awsSecretAccessKey ? "✓ Set" : "✗ Not set");

if (!awsAccessKeyId || !awsSecretAccessKey) {
  console.error("❌ AWS credentials not found in environment variables!");
  console.error("Please make sure your .env file contains either:");
  console.error("  AWS_REGION=us-east-1");
  console.error("  AWS_ACCESS_KEY_ID=your_access_key_id");
  console.error("  AWS_SECRET_ACCESS_KEY=your_secret_access_key");
  console.error("OR:");
  console.error("  VITE_AWS_REGION=us-east-1");
  console.error("  VITE_AWS_ACCESS_KEY_ID=your_access_key_id");
  console.error("  VITE_AWS_SECRET_ACCESS_KEY=your_secret_access_key");
  process.exit(1);
}

// Configure AWS SDK
const dynamoClient = new DynamoDBClient({
  region: awsRegion,
  credentials: {
    accessKeyId: awsAccessKeyId,
    secretAccessKey: awsSecretAccessKey,
  },
});

const createEventsTable = async () => {
  const params = {
    TableName: "gods-hand-events",
    KeySchema: [
      {
        AttributeName: "id",
        KeyType: "HASH",
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: "id",
        AttributeType: "S",
      },
      {
        AttributeName: "created_at",
        AttributeType: "S",
      },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: "created_at-index",
        KeySchema: [
          {
            AttributeName: "created_at",
            KeyType: "HASH",
          },
        ],
        Projection: {
          ProjectionType: "ALL",
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
      },
    ],
    BillingMode: "PROVISIONED",
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };

  try {
    const command = new CreateTableCommand(params);
    const result = await dynamoClient.send(command);
    console.log("Events table created successfully:", result.TableDescription.TableName);
  } catch (error) {
    if (error.name === "ResourceInUseException") {
      console.log("Events table already exists");
    } else {
      console.error("Error creating events table:", error);
    }
  }
};

const createClaimsTable = async () => {
  const params = {
    TableName: "gods-hand-claims",
    KeySchema: [
      {
        AttributeName: "id",
        KeyType: "HASH",
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: "id",
        AttributeType: "S",
      },
      {
        AttributeName: "event_id",
        AttributeType: "S",
      },
      {
        AttributeName: "created_at",
        AttributeType: "S",
      },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: "event_id-created_at-index",
        KeySchema: [
          {
            AttributeName: "event_id",
            KeyType: "HASH",
          },
          {
            AttributeName: "created_at",
            KeyType: "RANGE",
          },
        ],
        Projection: {
          ProjectionType: "ALL",
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
      },
    ],
    BillingMode: "PROVISIONED",
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };

  try {
    const command = new CreateTableCommand(params);
    const result = await dynamoClient.send(command);
    console.log("Claims table created successfully:", result.TableDescription.TableName);
  } catch (error) {
    if (error.name === "ResourceInUseException") {
      console.log("Claims table already exists");
    } else {
      console.error("Error creating claims table:", error);
    }
  }
};

const setupTables = async () => {
  console.log("Setting up DynamoDB tables...");
  await createEventsTable();
  await createClaimsTable();
  console.log("DynamoDB setup complete!");
};

// Run setup
setupTables().catch(console.error); 