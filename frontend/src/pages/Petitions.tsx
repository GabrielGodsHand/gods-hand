import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@/lib/supabase/client";
import PetitionsClient from "@/components/PetitionsClient";
import { User } from "@supabase/supabase-js";
import { Organization } from "@/lib/types/database";

interface PetitionWithVault {
  id: string;
  petition_title: string;
  petition_description: string;
  requested_amount: number;
  project_location: string;
  beneficiaries_count: number;
  project_timeline: string;
  expected_impact: string;
  status: string;
  approved_amount?: number;
  funded_amount?: number;
  review_notes?: string;
  created_at: string;
  organization_id: string;
  fund_vaults: {
    vault_name: string;
    disaster_type: string;
    location: string;
  };
}

export default function PetitionsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [petitions, setPetitions] = useState<PetitionWithVault[]>([]);
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

        // Check if user has an organization
        const { data: organization } = await supabase
          .from("organizations")
          .select("*")
          .eq("user_id", user.id)
          .single();

        if (!organization) {
          navigate("/kyb");
          return;
        }

        setOrganization(organization);

        // Get user's petitions with fund vault information
        const { data: petitions } = await supabase
          .from("fund_petitions")
          .select(
            `
            *,
            fund_vaults (
              vault_name,
              disaster_type,
              location
            )
          `
          )
          .eq("organization_id", organization.id)
          .order("created_at", { ascending: false });

        setPetitions(petitions || []);
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

  return (
    <PetitionsClient
      user={user}
      organization={organization}
      petitions={petitions}
    />
  );
}
