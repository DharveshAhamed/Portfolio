/**
 * ThemeToggle
 * Icon button that switches between light and dark themes via next-themes.
 */
'use client';

import { useTheme } from '@/components/providers/ThemeProvider';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — only render after mount
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={cn(
          'h-9 w-9 rounded-md bg-transparent',
          className
        )}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-md',
        'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
        'hover:bg-[var(--bg-surface)] transition-colors duration-150',
        'focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)]',
        className
      )}
    >
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
