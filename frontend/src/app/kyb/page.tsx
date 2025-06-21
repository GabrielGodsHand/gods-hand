import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import KYBFormClient from '@/components/KYBFormClient';

export default async function KYBPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Check if user already has an organization
  const { data: organization } = await supabase
    .from('organizations')
    .select('*')
    .eq('user_id', user.id)
    .single();

  return <KYBFormClient user={user} existingOrganization={organization} />;
} 