import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import EventsClient from '@/components/EventsClient';

export const metadata: Metadata = {
  title: 'Global Disaster Events - Hand of God',
  description: 'Explore active disaster relief events around the world',
};

export default async function EventsPage() {
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

  // Fetch events from database
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching events:', error);
  }

  return <EventsClient user={user} organization={organization} events={events || []} />;
} 