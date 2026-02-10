'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export type ThemeName = 'one-equifax' | 'one-equifax-dark';

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'one-equifax',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('one-equifax');

  // Read from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('signal3-theme') as ThemeName | null;
    if (stored && stored !== 'one-equifax') {
      setThemeState(stored);
    }
  }, []);

  // Apply data-theme attribute whenever theme changes
  useEffect(() => {
    if (theme === 'one-equifax') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem('signal3-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
