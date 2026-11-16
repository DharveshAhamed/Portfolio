/**
 * Design Tokens
 * Single source of truth for the design system.
 * Colors are referenced in globals.css via CSS custom properties.
 */

export const tokens = {
  colors: {
    // Electric blue accent
    accent: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa', // dark-mode text uses
      500: '#3b82f6',
      600: '#2563eb', // primary light-mode accent (#2563EB)
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    // Neutral scale
    neutral: {
      0: '#ffffff',
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#09090b',
    },
  },
  fonts: {
    sans: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
  },
  spacing: {
    section: 'py-24 md:py-32',
  },
  animation: {
    // Durations
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    // Easings
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const;

export type TokenColors = typeof tokens.colors;
