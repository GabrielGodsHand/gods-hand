import { ScanCommand, GetCommand, PutCommand, QueryCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "./client";
import { Claim, ClaimWithOrganization } from "../types/database";
import { v4 as uuidv4 } from "uuid";

const TABLE_NAME = "gods-hand-claims";

export const claimsService = {
  // Get all claims for an event (sorted by created_at desc)
  async getClaimsByEventId(eventId: string): Promise<ClaimWithOrganization[]> {
    try {
      const command = new QueryCommand({
        TableName: TABLE_NAME,
        IndexName: "event_id-created_at-index",
        KeyConditionExpression: "event_id = :eventId",
        ExpressionAttributeValues: {
          ":eventId": eventId,
        },
        ScanIndexForward: false, // Sort in descending order (newest first)
      });
      
      const response = await docClient.send(command);
      return (response.Items || []) as ClaimWithOrganization[];
    } catch (error) {
      console.error("Error fetching claims:", error);
      throw error;
    }
  },

  // Get claim by ID
  async getClaimById(id: string): Promise<ClaimWithOrganization | null> {
    try {
      const command = new GetCommand({
        TableName: TABLE_NAME,
        Key: { id },
      });
      
      const response = await docClient.send(command);
      return (response.Item as ClaimWithOrganization) || null;
    } catch (error) {
      console.error("Error fetching claim:", error);
      throw error;
    }
  },

  // Create a new claim
  async createClaim(claimData: Omit<Claim, "id" | "created_at" | "updated_at">): Promise<ClaimWithOrganization> {
    try {
      const newClaim: ClaimWithOrganization = {
        id: uuidv4(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...claimData,
      };

      const command = new PutCommand({
        TableName: TABLE_NAME,
        Item: newClaim,
      });
      
      await docClient.send(command);
      return newClaim;
    } catch (error) {
      console.error("Error creating claim:", error);
      throw error;
    }
  },

  // Update a claim
  async updateClaim(id: string, updates: Partial<Omit<Claim, "id" | "created_at">>): Promise<ClaimWithOrganization | null> {
    try {
      // First get the existing claim
      const existingClaim = await this.getClaimById(id);
      if (!existingClaim) {
        return null;
      }

      const updatedClaim: ClaimWithOrganization = {
        ...existingClaim,
        ...updates,
        updated_at: new Date().toISOString(),
      };

      const command = new PutCommand({
        TableName: TABLE_NAME,
        Item: updatedClaim,
      });
      
      await docClient.send(command);
      return updatedClaim;
    } catch (error) {
      console.error("Error updating claim:", error);
      throw error;
    }
  },

  // Update only the claimed amount (used by AI processing)
  async updateClaimedAmount(id: string, amount: number): Promise<ClaimWithOrganization | null> {
    try {
      const command = new UpdateCommand({
        TableName: TABLE_NAME,
        Key: { id },
        UpdateExpression: "SET claimed_amount = :amount, updated_at = :updatedAt",
        ExpressionAttributeValues: {
          ":amount": amount,
          ":updatedAt": new Date().toISOString(),
        },
        ReturnValues: "ALL_NEW",
      });
      
      const response = await docClient.send(command);
      return (response.Attributes as ClaimWithOrganization) || null;
    } catch (error) {
      console.error("Error updating claimed amount:", error);
      throw error;
    }
  },
}; 