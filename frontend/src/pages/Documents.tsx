import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@/lib/supabase/client";
import DocumentsClient from "@/components/DocumentsClient";
import { User } from "@supabase/supabase-js";
import { Organization, KYBDocument } from "@/lib/types/database";

export default function DocumentsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [documents, setDocuments] = useState<KYBDocument[]>([]);
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

        // Get organization's documents
        const { data: documents } = await supabase
          .from("kyb_documents")
          .select("*")
          .eq("organization_id", organization.id)
          .order("uploaded_at", { ascending: false });

        setDocuments(documents || []);
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
    <DocumentsClient
      user={user}
      organization={organization}
      documents={documents}
    />
  );
}
