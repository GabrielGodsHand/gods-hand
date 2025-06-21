import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import PetitionFormClient from '@/components/PetitionFormClient';

interface PetitionPageProps {
  params: {
    id: string;
  };
}

export default async function PetitionPage({ params }: PetitionPageProps) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Check if user has an approved organization
  const { data: organization } = await supabase
    .from('organizations')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (!organization) {
    redirect('/kyb');
  }

  if (organization.kyb_status !== 'approved') {
    redirect('/events?error=kyb_not_approved');
  }

  // Get the fund vault details
  const { data: fundVault } = await supabase
    .from('fund_vaults')
    .select('*')
    .eq('id', params.id)
    .eq('status', 'active')
    .single();

  if (!fundVault) {
    redirect('/events?error=vault_not_found');
  }

  return (
    <PetitionFormClient 
      user={user} 
      organization={organization} 
      fundVault={fundVault} 
    />
  );
} 