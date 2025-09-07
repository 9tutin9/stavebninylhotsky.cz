// Supabase konfigurace – vyplňte vlastní URL a anon key z projektu
// Návod: Project Settings → API → Project URL a anon public key

window.SUPABASE_URL = "https://shemzugiwzddlvfpsego.supabase.co"; // TODO: vyplnit
window.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoZW16dWdpd3pkZGx2ZnBzZWdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxNjcyMzAsImV4cCI6MjA3Mjc0MzIzMH0.CFAcCk9jzcCSK9hVgz77HQqWQyMyBJQGsmATEyhA7ZI"; // TODO: vyplnit

// Vytvoření klienta dostupného globálně (robustní init)
try {
  if (window.supabase && typeof window.supabase.createClient === 'function') {
    window.supabase = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
  } else if (typeof window.createClient === 'function') {
    window.supabase = window.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
  } else if (window.Supabase && typeof window.Supabase.createClient === 'function') {
    window.supabase = window.Supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
  } else {
    console.warn('Supabase knihovna nebyla načtena. Ujistěte se, že <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script> je před config.js');
  }
} catch (e) {
  console.error('Supabase init error:', e);
}


