import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@/lib/supabase/client";
import EventDetailClient from "@/components/EventDetailClient";
import { User } from "@supabase/supabase-js";
import { Organization } from "@/lib/types/database";

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [organization, setOrganization] = useState<Organization | null>(null);
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
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [supabase]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!id) {
    return <div>Event not found</div>;
  }

  return (
    <EventDetailClient user={user} organization={organization} eventId={id} />
  );
}
