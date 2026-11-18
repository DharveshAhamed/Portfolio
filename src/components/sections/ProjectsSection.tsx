'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { projects } from '@/data/projects';

// Crisp Line-Art Architecture Diagrams mapped to real project engineering workflows
function ArchitectureDiagram({ type }: { type: 'sync' | 'energy' }) {
  if (type === 'sync') {
    return (
      <svg
        viewBox="0 0 520 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full stroke-[#71717A] dark:stroke-[#71717A]"
        aria-label="CargoSync System Architecture"
      >
        <defs>
          <pattern id="dot-grid-sync" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#2E2E33" />
          </pattern>
          {/* Main flow path: SHIPPER → FASTAPI → 3D PACKING */}
          <path id="sync-main-path" d="M 95 100 L 135 100 L 225 100 L 265 100 L 315 100" />
          {/* Branch path to CARRIER */}
          <path id="sync-carrier-path" d="M 315 100 L 365 100 L 395 100 L 395 55 L 420 55" />
          {/* Branch path to QR VERIFY */}
          <path id="sync-qr-path" d="M 315 100 L 365 100 L 395 100 L 395 145 L 420 145" />
        </defs>
        <rect width="520" height="200" fill="url(#dot-grid-sync)" opacity="0.6" />

        {/* Connecting Data Bus Lines */}
        <line x1="95" y1="100" x2="135" y2="100" strokeWidth="1.5" />
        <line x1="225" y1="100" x2="265" y2="100" strokeWidth="1.5" />

        {/* Branch Lines from 3D Packing Optimizer */}
        <line x1="365" y1="100" x2="395" y2="100" strokeWidth="1.5" />
        <line x1="395" y1="100" x2="395" y2="55" strokeWidth="1.5" />
        <line x1="395" y1="55" x2="420" y2="55" strokeWidth="1.5" />

        <line x1="395" y1="100" x2="395" y2="145" strokeWidth="1.5" />
        <line x1="395" y1="145" x2="420" y2="145" strokeWidth="1.5" />

        {/* Database link line */}
        <line x1="180" y1="125" x2="180" y2="155" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Node 1: Shipper Freight Ingestion */}
        <rect x="20" y="75" width="75" height="50" rx="8" strokeWidth="1.5" fill="#141416" />
        <text x="57" y="97" textAnchor="middle" fill="#E4E4E7" fontSize="11" fontFamily="monospace" fontWeight="600" stroke="none">SHIPPER</text>
        <text x="57" y="112" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace" stroke="none">FREIGHT</text>

        {/* Node 2: FastAPI & Pydantic Validation */}
        <rect x="135" y="72" width="90" height="56" rx="8" strokeWidth="1.5" fill="#141416" />
        <text x="180" y="95" textAnchor="middle" fill="#E4E4E7" fontSize="11" fontFamily="monospace" fontWeight="600" stroke="none">FASTAPI</text>
        <text x="180" y="111" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace" stroke="none">REST API</text>

        {/* Node 3 (Sub): Supabase & PostgreSQL */}
        <rect x="140" y="155" width="80" height="32" rx="6" strokeWidth="1.2" strokeDasharray="3 3" fill="#111113" />
        <text x="180" y="174" textAnchor="middle" fill="#71717A" fontSize="9" fontFamily="monospace" stroke="none">SUPABASE / SQL</text>

        {/* Node 4: 3D Packing Optimizer (Three.js) — HIGHLIGHTED CORE ENGINE */}
        <rect x="265" y="68" width="100" height="64" rx="10" stroke="#FB923C" strokeWidth="2" fill="#181512" />
        <circle cx="315" cy="85" r="4" fill="#FB923C" stroke="none" className="glow-core" />
        <text x="315" y="103" textAnchor="middle" fill="#FB923C" fontSize="10" fontFamily="monospace" fontWeight="bold" stroke="none">3D PACKING</text>
        <text x="315" y="118" textAnchor="middle" fill="#D4D4D8" fontSize="9" fontFamily="monospace" stroke="none">THREE.JS OPT</text>

        {/* Node 5A: Proximity & Carrier Matching */}
        <rect x="420" y="32" width="85" height="46" rx="8" strokeWidth="1.5" fill="#141416" />
        <text x="462" y="52" textAnchor="middle" fill="#E4E4E7" fontSize="10" fontFamily="monospace" fontWeight="600" stroke="none">CARRIER</text>
        <text x="462" y="67" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace" stroke="none">MATCHING</text>

        {/* Node 5B: QR Code Verification Dispatch */}
        <rect x="420" y="122" width="85" height="46" rx="8" strokeWidth="1.5" fill="#141416" />
        <text x="462" y="142" textAnchor="middle" fill="#E4E4E7" fontSize="10" fontFamily="monospace" fontWeight="600" stroke="none">CHECKLIST</text>
        <text x="462" y="157" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace" stroke="none">VERIFICATION</text>

        {/* ── Animated flow dots travelling along workflow paths ── */}
        {/* Dot 1: main path, no delay */}
        <circle r="2.5" fill="#FB923C" opacity="0.9" stroke="none">
          <animateMotion dur="4s" repeatCount="indefinite" begin="0s">
            <mpath href="#sync-main-path" />
          </animateMotion>
        </circle>
        {/* Dot 2: main path, staggered */}
        <circle r="2" fill="#FB923C" opacity="0.6" stroke="none">
          <animateMotion dur="4s" repeatCount="indefinite" begin="-2s">
            <mpath href="#sync-main-path" />
          </animateMotion>
        </circle>
        {/* Dot 3: branch to CARRIER */}
        <circle r="2.5" fill="#FB923C" opacity="0.9" stroke="none">
          <animateMotion dur="4.5s" repeatCount="indefinite" begin="-1s">
            <mpath href="#sync-carrier-path" />
          </animateMotion>
        </circle>
        {/* Dot 4: branch to QR VERIFY */}
        <circle r="2.5" fill="#FB923C" opacity="0.9" stroke="none">
          <animateMotion dur="4.5s" repeatCount="indefinite" begin="-0.5s">
            <mpath href="#sync-qr-path" />
          </animateMotion>
        </circle>
      </svg>
    );
  }

  // type === 'energy' (Intelligent Energy Control System | IoT Application)
  return (
    <svg
      viewBox="0 0 520 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full stroke-[#71717A] dark:stroke-[#71717A]"
      aria-label="Intelligent Energy Control System Architecture"
    >
      <defs>
        <pattern id="dot-grid-energy" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#2E2E33" />
        </pattern>
        {/* Main flow path: SENSORS → ARDUINO → PYTHON ENGINE → FLUTTER */}
        <path id="energy-main-path" d="M 95 100 L 135 100 L 235 100 L 280 100 L 380 100 L 420 100" />
        {/* Feedback loop path */}
        <path id="energy-feedback-path" d="M 330 132 L 330 160 L 185 160 L 185 128" />
      </defs>
      <rect width="520" height="200" fill="url(#dot-grid-energy)" opacity="0.6" />

      {/* Hardware Sensing to Controller Bus */}
      <line x1="95" y1="100" x2="135" y2="100" strokeWidth="1.5" />

      {/* Wi-Fi 6 Wireless Communication Wave Indicator */}
      <line x1="235" y1="100" x2="280" y2="100" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M 252 88 A 12 12 0 0 1 264 88" strokeWidth="1.5" stroke="#FB923C" opacity="0.8" />
      <path d="M 248 83 A 18 18 0 0 1 268 83" strokeWidth="1.2" stroke="#FB923C" opacity="0.5" />
      <text x="258" y="117" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="monospace" stroke="none">WI-FI 6</text>

      {/* Python Engine to Flutter App Line */}
      <line x1="380" y1="100" x2="420" y2="100" strokeWidth="1.5" />

      {/* Relay Feedback Loop Line */}
      <line x1="185" y1="128" x2="185" y2="160" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="185" y1="160" x2="330" y2="160" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="330" y1="160" x2="330" y2="132" strokeWidth="1.2" strokeDasharray="3 3" />

      {/* Node 1: Physical Loads & Current Sensors */}
      <rect x="20" y="75" width="75" height="50" rx="8" strokeWidth="1.5" fill="#141416" />
      <text x="57" y="97" textAnchor="middle" fill="#E4E4E7" fontSize="10" fontFamily="monospace" fontWeight="600" stroke="none">SENSORS</text>
      <text x="57" y="112" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace" stroke="none">&amp; RELAYS</text>

      {/* Node 2: Arduino UNO & Custom PCB */}
      <rect x="135" y="72" width="100" height="56" rx="8" strokeWidth="1.5" fill="#141416" />
      <text x="185" y="95" textAnchor="middle" fill="#E4E4E7" fontSize="10" fontFamily="monospace" fontWeight="600" stroke="none">ARDUINO UNO</text>
      <text x="185" y="111" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace" stroke="none">CUSTOM PCB</text>

      {/* Node 3: Python Automation Engine — HIGHLIGHTED CORE ENGINE */}
      <rect x="280" y="68" width="100" height="64" rx="10" stroke="#FB923C" strokeWidth="2" fill="#181512" />
      <circle cx="330" cy="85" r="4" fill="#FB923C" stroke="none" className="glow-core" />
      <text x="330" y="103" textAnchor="middle" fill="#FB923C" fontSize="10" fontFamily="monospace" fontWeight="bold" stroke="none">PYTHON IOT</text>
      <text x="330" y="118" textAnchor="middle" fill="#D4D4D8" fontSize="9" fontFamily="monospace" stroke="none">AUTOMATION</text>

      {/* Node 4: Mobile Interface (Flutter App) */}
      <rect x="420" y="72" width="85" height="56" rx="8" strokeWidth="1.5" fill="#141416" />
      <text x="462" y="95" textAnchor="middle" fill="#E4E4E7" fontSize="10" fontFamily="monospace" fontWeight="600" stroke="none">FLUTTER APP</text>
      <text x="462" y="111" textAnchor="middle" fill="#A1A1AA" fontSize="9" fontFamily="monospace" stroke="none">UI &amp; CONTROL</text>

      {/* Node 5 (Sub): Relay Switch Feedback Loop Indicator */}
      <text x="258" y="174" textAnchor="middle" fill="#71717A" fontSize="9" fontFamily="monospace" stroke="none">DEVICE CONTROL FEEDBACK</text>

      {/* ── Animated flow dots travelling along workflow paths ── */}
      {/* Dot 1: main path, no delay */}
      <circle r="2.5" fill="#FB923C" opacity="0.9" stroke="none">
        <animateMotion dur="4.5s" repeatCount="indefinite" begin="0s">
          <mpath href="#energy-main-path" />
        </animateMotion>
      </circle>
      {/* Dot 2: main path, staggered */}
      <circle r="2" fill="#FB923C" opacity="0.6" stroke="none">
        <animateMotion dur="4.5s" repeatCount="indefinite" begin="-2.2s">
          <mpath href="#energy-main-path" />
        </animateMotion>
      </circle>
      {/* Dot 3: feedback loop */}
      <circle r="2" fill="#FB923C" opacity="0.5" stroke="none">
        <animateMotion dur="5s" repeatCount="indefinite" begin="-1s">
          <mpath href="#energy-feedback-path" />
        </animateMotion>
      </circle>
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="py-20 sm:py-28 border-b border-[var(--border)]"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] leading-tight">
            Selected Work
          </h2>
        </div>

        {/* Two-Column Featured Cards with Expanded Width & Scale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12">
          {projects.map((project, index) => {
            const isFirst = index === 0;
            const diagramType = isFirst ? 'sync' : 'energy';
            const label = isFirst ? 'CARGO & 3D PACKING PIPELINE' : 'IOT SENSOR & TELEMETRY WORKFLOW';
            const metric = isFirst
              ? '✦ 3D cargo packing visualization & Checklist delivery verification'
              : '✦ IoT electricity monitoring & automated device control';

            return (
              <div
                key={project.slug}
                className="group flex flex-col justify-between rounded-[18px] border border-[var(--border)] bg-[var(--surface)] card-shadow transition-all duration-200 hover:-translate-y-1.5 hover:border-[var(--card-hover-border)]"
              >
                <div>
                  {/* Top Line-Art Architecture Panel */}
                  <div className="relative h-56 sm:h-64 lg:h-72 w-full border-b border-[var(--border)] bg-[var(--panel)] rounded-t-[17px] overflow-hidden p-4 sm:p-6">
                    <span className="absolute top-4 left-6 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] z-10">
                      {label}
                    </span>
                    <ArchitectureDiagram type={diagramType} />
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-base sm:text-lg text-[var(--text-muted)] line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Orange Metric Line with Sparkle Glyph */}
                    <div className="mt-6 font-mono text-xs sm:text-sm text-[var(--accent)] flex items-center gap-2">
                      <span>{metric}</span>
                    </div>

                    {/* Mono Stack List */}
                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {project.tags.length > 0 ? (
                        project.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-xs px-3 py-1 rounded-md border border-[var(--border)] bg-[var(--panel)] text-[var(--text-muted)]"
                          >
                            {t}
                          </span>
                        ))
                      ) : (
                        ['PyTorch', 'TypeScript', 'FastAPI', 'Docker'].map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs px-3 py-1 rounded-md border border-[var(--border)] bg-[var(--panel)] text-[var(--text-muted)]"
                          >
                            {tech}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions Rule */}
                <div className="px-6 sm:px-10 py-4 sm:py-5 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs sm:text-sm">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
                  >
                    View case study <ArrowRight className="h-4 w-4" />
                  </Link>

                  {(project.links.live || project.links.github) && (
                    <div className="flex items-center gap-4 text-[var(--text-muted)]">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--text)] transition-colors inline-flex items-center gap-1"
                        >
                          Live <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.links.live && project.links.github && <span>/</span>}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[var(--text)] transition-colors inline-flex items-center gap-1"
                        >
                          GitHub Repository <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
