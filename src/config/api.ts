interface ApiConfig {
  apiKey: string;
  apiUrl: string;
}

export const apiConfig: ApiConfig = {
  apiKey: 'Your_API_Key_Here',
  apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
};