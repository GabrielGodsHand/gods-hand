import React, { useEffect, useState } from "react";
import EventsClient from "../components/EventsClient";
import { FullScreenDivineLoader } from "../components/DivineLoader";
import { Event } from "../lib/types/database";
import { eventsService } from "../lib/dynamodb/events";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const eventsData = await eventsService.getAllEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Error loading events:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <FullScreenDivineLoader message="Loading events..." />;
  }

  return <EventsClient events={events} />;
}
