import { apiConfig } from '../config/api';

export async function generateContent(inputText: string) {
  try {
    if (!apiConfig.apiKey) {
      throw new Error('API key is not configured');
    }

    const response = await fetch(`${apiConfig.apiUrl}?key=${apiConfig.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: inputText }]
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.error?.message || `API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No content generated.';
  } catch (error) {
    console.error('API Error:', error);
    throw error instanceof Error ? error : new Error('Failed to generate content');
  }
}