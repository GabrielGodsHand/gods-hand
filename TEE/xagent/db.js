import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid'

// Get these from your Supabase dashboard (Settings → API)
const SUPABASE_URL = 'https://gzigpkrzuonxgeeolnpu.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6aWdwa3J6dW9ueGdlZW9sbnB1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTkzMDU2OSwiZXhwIjoyMDY1NTA2NTY5fQ.HEXJM4qlHERgHMGaTSFZtNcU_8JBxq9dVeHDkdiD8Z0'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function insertEvent() {
  const { data, error } = await supabase
    .from('events')
    .insert([{
      id: uuidv4(),
      disaster_location: 'Chennai, India',
      created_at: new Date().toISOString(),
      title: 'Flood Relief Needed',
      description: 'Heavy rains have caused flooding in multiple areas. Help is needed.',
      estimated_amount_required: 500000,
      source: 'https://twitter.com/reliefinfo',
      tweet_id: '1728391289312',
      updated_at: new Date().toISOString()
    }])

  if (error) {
    console.error('Insert error:', error)
  } else {
    console.log('Insert successful:', data)
  }
}

insertEvent()
