export interface HistoryEntry {
  input: string;
  response: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}