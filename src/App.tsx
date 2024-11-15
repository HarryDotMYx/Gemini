import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { History } from './components/History';
import { HistoryEntry } from './types';

function App() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const handleSubmit = (input: string, response: string) => {
    setHistory(prev => [...prev, { input, response }]);
  };

  const handleReset = () => {
    setHistory([]);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Header />
          <InputForm onSubmit={handleSubmit} onReset={handleReset} />
          <History history={history} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;