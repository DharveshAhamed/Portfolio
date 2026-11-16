'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="w-full border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-none z-40 transition-colors">
      <div className="mx-auto flex max-w-7xl 2xl:max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20 py-4 sm:py-5 font-mono text-xs sm:text-sm">
        {/* Left: @diveintodharvesh */}
        <Link
          href="/"
          className="flex items-center text-[var(--text)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
        >
          <span className="font-semibold text-sm sm:text-base">@diveintodharvesh</span>
        </Link>

        {/* Right: "open to work" pill with orange dot */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 shadow-sm">
            <span
              className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]"
              aria-hidden="true"
            />
            <span className="text-xs uppercase tracking-wider text-[var(--text)] font-medium">
              open to work
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
