// Supabase Configuration
const SUPABASE_URL = 'https://opgoelecdontlmftithn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZ29lbGVjZG9udGxtZnRpdGhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNzQ3MDksImV4cCI6MjA3OTg1MDcwOX0.Y5sD3hNqp86wWU1DYGTTKiC4tpL-aXSBgj4mFzRv2MQ';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Get base URL for contact pages
function getBaseUrl() {
    const url = window.location.href;
    // Remove the filename from the URL
    return url.substring(0, url.lastIndexOf('/') + 1);
}

// Export for use in other scripts
window.supabaseClient = supabase;
window.getBaseUrl = getBaseUrl;
