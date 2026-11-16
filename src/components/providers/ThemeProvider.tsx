'use client';

import * as React from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'dark',
  resolvedTheme: 'dark',
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState<'light' | 'dark'>('dark');

  // Read saved theme on mount
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme') as Theme | null;
      if (saved && (saved === 'light' || saved === 'dark' || saved === 'system')) {
        setThemeState(saved);
      }
    } catch {
      // Fallback if localStorage is inaccessible
    }
  }, []);

  // Sync theme changes to html class
  React.useEffect(() => {
    const root = document.documentElement;
    let actualTheme: 'light' | 'dark' = 'light';

    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      actualTheme = systemDark ? 'dark' : 'light';
    } else {
      actualTheme = theme;
    }

    setResolvedTheme(actualTheme);

    if (actualTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Listen to system theme changes if set to system
  React.useEffect(() => {
    if (theme !== 'system') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      const actualTheme = e.matches ? 'dark' : 'light';
      setResolvedTheme(actualTheme);
      if (actualTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [theme]);

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('portfolio-theme', newTheme);
    } catch {
      // Ignore
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
