import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  // 'https://ocyeeeuvddjosudlotgv.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jeWVlZXV2ZGRqb3N1ZGxvdGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1NTAwNDgsImV4cCI6MTk4OTEyNjA0OH0.BksYDL8vU6155vcDTwfEjpxqYmlOBVh5TwEn5pLTezU'
);