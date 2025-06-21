import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import PetitionsClient from '@/components/PetitionsClient';

export default async function PetitionsPage() {
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

  // Get user's petitions with fund vault information
  const { data: petitions } = await supabase
    .from('fund_petitions')
    .select(`
      *,
      fund_vaults (
        vault_name,
        disaster_type,
        location
      )
    `)
    .eq('organization_id', organization.id)
    .order('created_at', { ascending: false });

  return <PetitionsClient user={user} organization={organization} petitions={petitions || []} />;
} 