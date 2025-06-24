import { ScanCommand, GetCommand, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "./client";
import { Event } from "../types/database";
import { v4 as uuidv4 } from "uuid";

const TABLE_NAME = "gods-hand-events";

export const eventsService = {
  // Get all events (sorted by created_at desc)
  async getAllEvents(): Promise<Event[]> {
    try {
      const command = new ScanCommand({
        TableName: TABLE_NAME,
      });
      
      const response = await docClient.send(command);
      const events = (response.Items || []) as Event[];
      
      // Sort by created_at in descending order (newest first)
      return events.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  },

  // Get event by ID
  async getEventById(id: string): Promise<Event | null> {
    try {
      const command = new GetCommand({
        TableName: TABLE_NAME,
        Key: { id },
      });
      
      const response = await docClient.send(command);
      return (response.Item as Event) || null;
    } catch (error) {
      console.error("Error fetching event:", error);
      throw error;
    }
  },

  // Create a new event
  async createEvent(eventData: Omit<Event, "id" | "created_at">): Promise<Event> {
    try {
      const newEvent: Event = {
        id: uuidv4(),
        created_at: new Date().toISOString(),
        ...eventData,
      };

      const command = new PutCommand({
        TableName: TABLE_NAME,
        Item: newEvent,
      });
      
      await docClient.send(command);
      return newEvent;
    } catch (error) {
      console.error("Error creating event:", error);
      throw error;
    }
  },

  // Update an event
  async updateEvent(id: string, updates: Partial<Omit<Event, "id" | "created_at">>): Promise<Event | null> {
    try {
      // First get the existing event
      const existingEvent = await this.getEventById(id);
      if (!existingEvent) {
        return null;
      }

      const updatedEvent: Event = {
        ...existingEvent,
        ...updates,
      };

      const command = new PutCommand({
        TableName: TABLE_NAME,
        Item: updatedEvent,
      });
      
      await docClient.send(command);
      return updatedEvent;
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
  },
}; 