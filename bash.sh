const supabaseUrl = 'https://gkkxjkbsqluqosrapiru.supabase.co';
const supabaseKey = String.fromEnvironment('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdra3hqa2JzcWx1cW9zcmFwaXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5OTIwMDEsImV4cCI6MjA3NjU2ODAwMX0.fg1xwVS90kDQCx7MC53mltooPBrnVexRZkRM26kgW-U');

Future<void> main() async {
  await Supabase.initialize(url: supabaseUrl, anonKey: supabaseKey);
  runApp(MyApp());
}

pip install streamlit langchain-openai
