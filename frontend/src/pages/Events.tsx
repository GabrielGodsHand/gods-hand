import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import EventsClient from "@/components/EventsClient";
import { FullScreenDivineLoader } from "@/components/DivineLoader";
import { Event } from "@/lib/types/database";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function loadData() {
      try {
        // Fetch events from database
        const { data: events, error } = await supabase
          .from("events")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching events:", error);
        } else {
          setEvents(events || []);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [supabase]);

  if (loading) {
    return <FullScreenDivineLoader message="Loading events..." />;
  }

  return <EventsClient events={events} />;
}
