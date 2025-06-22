import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import EventsClient from "@/components/EventsClient";
import { FullScreenDivineLoader } from "@/components/DivineLoader";
import { User } from "@supabase/supabase-js";
import { Organization, Event } from "@/lib/types/database";

export default function EventsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function loadData() {
      try {
        // Get current user
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);

        // Get user's organization if logged in
        if (user) {
          const { data: orgData } = await supabase
            .from("organizations")
            .select("*")
            .eq("user_id", user.id)
            .single();
          setOrganization(orgData);
        }

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
    return <FullScreenDivineLoader message="Loading divine events..." />;
  }

  return (
    <EventsClient user={user} organization={organization} events={events} />
  );
}
