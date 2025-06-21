import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import EventDetailClient from '@/components/EventDetailClient';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export const metadata: Metadata = {
  title: 'Event Details - Hand of God',
  description: 'View disaster event details, donations, and claims',
};

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();

  // Get user's organization if logged in
  let organization = null;
  if (user) {
    const { data: orgData } = await supabase
      .from('organizations')
      .select('*')
      .eq('user_id', user.id)
      .single();
    organization = orgData;
  }

  return (
    <EventDetailClient 
      user={user} 
      organization={organization} 
      eventId={id}
    />
  );
} 