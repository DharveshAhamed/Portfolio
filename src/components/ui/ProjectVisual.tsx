'use client';

import { Activity, Network, Layers } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ProjectVisualProps {
  slug: string;
  title: string;
  className?: string;
}

export default function ProjectVisual({ slug, title, className }: ProjectVisualProps) {
  if (slug === 'cargosync') {
    return (
      <div
        aria-hidden="true"
        className={cn(
          'relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-gradient-to-br from-blue-50/70 via-[var(--surface)] to-blue-100/30 dark:from-blue-950/40 dark:via-[var(--surface)] dark:to-blue-900/10 p-6 select-none',
          className
        )}
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.12] dark:opacity-[0.18]" />

        {/* Dynamic network nodes visualization */}
        <div className="relative flex flex-col items-center">
          <div className="flex items-center gap-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/25">
              <Network className="h-5 w-5" />
            </div>
            <div className="h-0.5 w-16 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-full" />
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/30 bg-[var(--surface)] text-blue-600 dark:text-blue-400">
              <Layers className="h-4 w-4" />
            </div>
          </div>
          <span className="mt-4 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
            {title}
          </span>
        </div>
      </div>
    );
  }

  // Intelligent Energy Control System
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-gradient-to-br from-blue-50/70 via-[var(--surface)] to-indigo-100/30 dark:from-blue-950/40 dark:via-[var(--surface)] dark:to-indigo-900/10 p-6 select-none',
        className
      )}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.12] dark:opacity-[0.18]" />

      {/* Energy waveform & control system */}
      <div className="relative flex flex-col items-center">
        <div className="flex items-center gap-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/25">
            <Activity className="h-5 w-5" />
          </div>
          <div className="h-0.5 w-16 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 rounded-full" />
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/30 bg-[var(--surface)] text-blue-600 dark:text-blue-400">
            <Layers className="h-4 w-4" />
          </div>
        </div>
        <span className="mt-4 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
          {title}
        </span>
      </div>
    </div>
  );
}

