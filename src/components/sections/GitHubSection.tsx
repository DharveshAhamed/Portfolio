'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { GitBranch } from 'lucide-react';
import Container from '@/components/ui/Container';
import { siteConfig } from '@/data/site';

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionWeek {
  days: ContributionDay[];
}

// Deterministic fallback grid (shown while loading or when no token)
function buildFallbackGrid(): ContributionWeek[] {
  const weeks: ContributionWeek[] = [];
  for (let w = 0; w < 52; w++) {
    const days: ContributionDay[] = [];
    for (let d = 0; d < 7; d++) {
      const val = (w * 7 + d * 13 + 5) % 17;
      const level = val > 14 ? 3 : val > 10 ? 2 : val > 5 ? 1 : 0;
      days.push({ date: '', count: 0, level: level as 0 | 1 | 2 | 3 });
    }
    weeks.push({ days });
  }
  return weeks;
}

function levelColor(level: number): string {
  if (level === 4) return 'bg-[var(--accent)]';
  if (level === 3) return 'bg-[var(--accent)] opacity-80';
  if (level === 2) return 'bg-[#A1A1AA]';
  if (level === 1) return 'bg-[#52525B]';
  return 'bg-[#2A2A2E] border border-[#333338]';
}

export default function GitHubSection() {
  const handle =
    siteConfig.socials.github.href && !siteConfig.socials.github.href.includes('[')
      ? siteConfig.socials.github.href.split('github.com/')[1] || 'DharveshAhamed'
      : 'DharveshAhamed';

  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [isReal, setIsReal] = useState(false);
  const [loading, setLoading] = useState(true);

  const fallback = useMemo(() => buildFallbackGrid(), []);

  useEffect(() => {
    fetch('/api/github')
      .then((r) => r.json())
      .then((data) => {
        if (data.contributions && Array.isArray(data.contributions)) {
          setWeeks(data.contributions);
          setTotal(data.totalContributions ?? null);
          setIsReal(true);
        } else {
          setWeeks(fallback);
        }
      })
      .catch(() => setWeeks(fallback))
      .finally(() => setLoading(false));
  }, [fallback]);

  const displayWeeks = loading ? fallback : weeks;

  // Build month labels from real data dates
  const monthLabels = useMemo(() => {
    if (!isReal || displayWeeks.length === 0) return [];
    const labels: { label: string; col: number }[] = [];
    let lastMonth = '';
    displayWeeks.forEach((week, i) => {
      const firstDay = week.days.find((d) => d.date);
      if (!firstDay) return;
      const month = new Date(firstDay.date).toLocaleString('en-US', { month: 'short' });
      if (month !== lastMonth) {
        labels.push({ label: month, col: i });
        lastMonth = month;
      }
    });
    return labels;
  }, [isReal, displayWeeks]);

  return (
    <section
      id="github"
      aria-label="GitHub Open Source Activity"
      className="py-20 sm:py-28 border-b border-[var(--border)]"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] leading-tight">
            Activity &amp; Code
          </h2>
        </div>

        <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12 card-shadow overflow-hidden">
          {/* Card header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 mb-8 border-b border-[var(--border)]">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-lg border border-[var(--border)] bg-[var(--panel)] flex items-center justify-center text-[var(--text)]">
                <GitBranch className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-mono text-base font-bold text-[var(--text)]">
                  COMMIT_LOG // ACTIVITY_MATRIX
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[var(--text-muted)] mt-0.5">
                  {isReal && total !== null
                    ? `${total.toLocaleString()} contributions in the last year`
                    : 'Public code contributions & repository commits'}
                </p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-[var(--text-muted)]">
              <span>Less</span>
              <span className="h-3.5 w-3.5 rounded-[3px] bg-[#2A2A2E] border border-[#333338]" />
              <span className="h-3.5 w-3.5 rounded-[3px] bg-[#52525B]" />
              <span className="h-3.5 w-3.5 rounded-[3px] bg-[#A1A1AA]" />
              <span className="h-3.5 w-3.5 rounded-[3px] bg-[var(--accent)]" />
              <span>More</span>
            </div>
          </div>

          {/* Month labels (only when real data) */}
          {isReal && monthLabels.length > 0 && (
            <div className="relative overflow-x-auto">
              <div className="inline-flex gap-2 min-w-[850px] w-full justify-between mb-1 pl-0">
                {displayWeeks.map((_, i) => {
                  const label = monthLabels.find((m) => m.col === i);
                  return (
                    <div key={i} className="w-3.5 sm:w-4 font-mono text-[9px] text-[var(--text-muted)]">
                      {label ? label.label : ''}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Contribution grid */}
          <div className="overflow-x-auto pb-4">
            <div className="inline-flex gap-2 min-w-[850px] w-full justify-between">
              {displayWeeks.map((week, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-2">
                  {week.days.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-[3px] transition-transform hover:scale-125 ${levelColor(day.level)} ${loading ? 'animate-pulse' : ''}`}
                      title={
                        isReal && day.date
                          ? `${day.date}: ${day.count} contribution${day.count !== 1 ? 's' : ''}`
                          : `Activity level: ${day.level}`
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-6 font-mono text-xs sm:text-sm text-[var(--text-muted)]">
            <div className="flex items-center gap-6">
              <span>
                ACTIVE PIPELINE: <strong className="text-[var(--text)]">STABLE</strong>
              </span>
              <span>
                BRANCHES: <strong className="text-[var(--text)]">MAIN</strong>
              </span>
              {!isReal && (
                <span className="opacity-50 text-[10px]">
                  — Add GITHUB_TOKEN to .env.local for live data
                </span>
              )}
            </div>
            <a
              href={siteConfig.socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
            >
              @{handle} ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
