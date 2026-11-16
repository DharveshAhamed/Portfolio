'use client';

import dynamic from 'next/dynamic';
import { useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/cn';

// Lazy-load the Three.js canvas on client only
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => <StaticHeroFallback />,
});

function StaticHeroFallback() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-72 w-72 sm:h-96 sm:w-96 items-center justify-center select-none"
    >
      {/* Outer decorative ring */}
      <div className="absolute inset-0 rounded-full border border-blue-500/10 dark:border-blue-400/10" />

      {/* Middle geometric orbit */}
      <div className="absolute inset-8 rounded-full border border-dashed border-blue-500/20 dark:border-blue-400/20" />

      {/* Radiant orb */}
      <div className="relative flex h-44 w-44 sm:h-56 sm:w-56 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/15 via-blue-600/10 to-transparent p-1 shadow-2xl backdrop-blur-xl border border-white/20 dark:border-white/10">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-[22px] bg-[var(--surface)]/80 p-6 text-center shadow-inner">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/30">
            <Sparkles className="h-6 w-6" />
          </div>
          <span className="mt-4 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
            System
          </span>
          <span className="text-sm font-semibold text-[var(--text-primary)]">
            AI Architecture
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero3DWrapper() {
  const shouldReduceMotion = useReducedMotion();

  // In reduced-motion mode, strictly use the static visual
  if (shouldReduceMotion) {
    return <StaticHeroFallback />;
  }

  return (
    <div className="relative flex h-72 w-72 sm:h-96 sm:w-96 items-center justify-center">
      {/* Ambient background blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-600/20"
      />
      
      {/* 3D Canvas with pointer reactivity */}
      <HeroScene />
    </div>
  );
}

