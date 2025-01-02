import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://khpxjmuuxeiytldqreul.supabase.co", // supabaseUrl
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtocHhqbXV1eGVpeXRsZHFyZXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3NTIxMzAsImV4cCI6MjA1MTMyODEzMH0.6TXwtSv0_r6oeA0__jAPYRTAZ33VHHPDOxjWmgzlY4I" // supabaseKey
);

export default supabase;
