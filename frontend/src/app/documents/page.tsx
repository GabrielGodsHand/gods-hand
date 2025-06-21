import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import DocumentsClient from '@/components/DocumentsClient';

export default async function DocumentsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Check if user has an organization
  const { data: organization } = await supabase
    .from('organizations')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (!organization) {
    redirect('/kyb');
  }

  // Get organization's documents
  const { data: documents } = await supabase
    .from('kyb_documents')
    .select('*')
    .eq('organization_id', organization.id)
    .order('uploaded_at', { ascending: false });

  return <DocumentsClient user={user} organization={organization} documents={documents || []} />;
} 