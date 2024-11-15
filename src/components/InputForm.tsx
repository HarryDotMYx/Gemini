import React, { useState } from 'react';
import { Send, RotateCcw } from 'lucide-react';
import { generateContent } from '../services/api';

interface InputFormProps {
  onSubmit: (text: string, response: string) => void;
  onReset: () => void;
}

export function InputForm({ onSubmit, onReset }: InputFormProps) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await generateContent(inputText);
      onSubmit(inputText, response);
      setInputText('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mt-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="inputText" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
            Enter your text:
          </label>
          <textarea
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={3}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-colors"
            required
            disabled={isLoading}
          />
        </div>
        {error && (
          <div className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
            {error}
          </div>
        )}
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 
                     text-white font-semibold rounded-lg transition-colors
                     disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4 mr-2" />
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
          <button
            type="button"
            onClick={onReset}
            disabled={isLoading}
            className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 
                     text-white font-semibold rounded-lg transition-colors
                     disabled:bg-red-300 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset History
          </button>
        </div>
      </form>
    </div>
  );
}