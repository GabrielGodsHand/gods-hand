import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@/lib/supabase/client";
import KYBFormClient from "@/components/KYBFormClient";
import { User } from "@supabase/supabase-js";
import { Organization } from "@/lib/types/database";

export default function KYBPage() {
  const [user, setUser] = useState<User | null>(null);
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const supabase = createClient();

  useEffect(() => {
    async function loadData() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          navigate("/login");
          return;
        }

        setUser(user);

        // Check if user already has an organization
        const { data: organization } = await supabase
          .from("organizations")
          .select("*")
          .eq("user_id", user.id)
          .single();

        setOrganization(organization);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [navigate, supabase]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <KYBFormClient user={user} existingOrganization={organization} />;
}
