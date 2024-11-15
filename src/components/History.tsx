import React from 'react';
import { MessageSquare, User } from 'lucide-react';
import { HistoryEntry } from '../types';

interface HistoryProps {
  history: HistoryEntry[];
}

export function History({ history }: HistoryProps) {
  if (history.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mt-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Response History</h2>
        <p className="text-gray-600 dark:text-gray-300">No history yet. Submit a prompt to see the responses.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 mt-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Response History</h2>
      <div className="space-y-6">
        {history.map((entry, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-4"
          >
            <div className="flex items-start space-x-3">
              <User className="w-5 h-5 text-blue-500 mt-1" />
              <div className="flex-1">
                <p className="font-medium text-gray-700 dark:text-gray-200">Input {index + 1}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{entry.input}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MessageSquare className="w-5 h-5 text-green-500 mt-1" />
              <div className="flex-1">
                <p className="font-medium text-gray-700 dark:text-gray-200">Response {index + 1}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{entry.response}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}