'use client';

import React, { useState } from 'react';
import { ChevronDown, Briefcase, GraduationCap } from 'lucide-react';
import Container from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/cn';

interface TimelineEntry {
  type: 'experience' | 'education';
  role: string;
  org: string;
  dates: string;
  details: string;
  tech?: string[];
}

const TIMELINE_DATA: TimelineEntry[] = [
  {
    type: 'experience',
    role: 'Intern',
    org: 'Nexus Technologies, Kozhikode',
    dates: 'SEP 2024 — MAR 2025',
    details: 'Supported data management and technical documentation activities with an emphasis on accuracy and timely completion. Assisted with project-related tasks and collaborated with team members in a structured work environment. Gained exposure to project management methodologies and technical tools.',
    tech: ['Python', 'FastAPI', 'Documentation', 'Data Management'],
  },
  {
    type: 'education',
    role: 'Master of Computer Applications (MCA)',
    org: 'MES AIMAT, Marampally, Aluva',
    dates: 'CURRENTLY PURSUING',
    details: 'Postgraduate program with emphasis on advanced computer applications, software development, database architectures, and Machine Learning solutions.',
    tech: ['AI/ML', 'Advanced DBMS', 'Software Engineering', 'Python'],
  },
  {
    type: 'education',
    role: 'Bachelor of Computer Applications (BCA)',
    org: 'Majlis Arts and Science College, Puramannur, Malappuram',
    dates: 'COMPLETED MAR 2025',
    details: 'Core foundation in Computer Science, Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems.',
    tech: ['Data Structures', 'OOP', 'C/C++', 'DBMS', 'Web Development'],
  },
];

export default function AboutSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="about"
      aria-label="About and Background"
      className="py-20 sm:py-28 border-b border-[var(--border)]"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] leading-tight">
            About & Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10 card-shadow">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--text-muted)]">
                // ENGINEERING PHILOSOPHY
              </span>
              <p className="mt-6 text-lg sm:text-xl font-sans text-[var(--text)] leading-relaxed">
                I believe software engineering is about crafting reliable systems that solve real problems under real constraints. My focus sits at the intersection of intelligent AI workflows, robust Python &amp; FastAPI backends, and practical Machine Learning applications.
              </p>
              <p className="mt-6 text-base sm:text-lg font-sans text-[var(--text-muted)] leading-relaxed">
                {siteConfig.bio[0]}
              </p>

              <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col gap-4 font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)]">LOCATION:</span>
                  <span className="text-[var(--text)] font-medium">{siteConfig.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)]">STATUS:</span>
                  <span className="text-[var(--accent)] font-semibold">OPEN TO WORK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience and Education Rows */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="divide-y divide-[var(--border)] border border-[var(--border)] rounded-[18px] bg-[var(--surface)] card-shadow overflow-hidden">
              {TIMELINE_DATA.map((item, index) => {
                const isExpanded = expandedIndex === index;
                const Icon = item.type === 'experience' ? Briefcase : GraduationCap;

                return (
                  <div key={item.role + item.dates} className="transition-colors">
                    {/* Compact clickable row */}
                    <button
                      type="button"
                      onClick={() => toggleExpand(index)}
                      className="w-full p-6 sm:p-7 flex items-center justify-between text-left hover:bg-[var(--panel)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-5">
                        {/* Logo Tile */}
                        <div className="h-12 w-12 shrink-0 rounded-xl border border-[var(--border)] bg-[var(--panel)] flex items-center justify-center text-[var(--text)]">
                          <Icon className="h-5 w-5 text-[var(--text-muted)]" />
                        </div>

                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-[var(--text)]">
                            {item.role}
                          </h4>
                          <p className="font-mono text-xs sm:text-sm text-[var(--text-muted)] mt-0.5">
                            {item.org}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-5">
                        <span className="font-mono text-xs sm:text-sm text-[var(--text-muted)] hidden sm:inline">
                          {item.dates}
                        </span>
                        <ChevronDown
                          className={cn(
                            'h-5 w-5 text-[var(--text-muted)] transition-transform duration-200',
                            isExpanded && 'rotate-180 text-[var(--text)]'
                          )}
                        />
                      </div>
                    </button>

                    {/* Expandable Details Container */}
                    {isExpanded && (
                      <div className="px-7 pb-7 pt-2 text-sm sm:text-base text-[var(--text-muted)] border-t border-[var(--border)] bg-[var(--panel)]/50">
                        <p className="font-sans leading-relaxed">
                          {item.details}
                        </p>
                        {item.tech && (
                          <div className="mt-4 flex flex-wrap gap-2.5">
                            {item.tech.map((t) => (
                              <span
                                key={t}
                                className="font-mono text-xs px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
