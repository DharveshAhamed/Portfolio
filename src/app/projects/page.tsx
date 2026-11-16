import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { getAllProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'All Projects — Dharvesh Ahamed | Aspiring AI/ML Developer',
  description: 'Complete catalogue of engineering systems, architectures, and case studies by Dharvesh Ahamed.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-16 sm:py-24 border-b border-[var(--border)]">
      <Container className="max-w-5xl">
        <div className="mb-10">
          <Link
            href="/#projects"
            className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
              ARCHIVE // INDEX
            </span>
            <h1 className="mt-2 text-3xl sm:text-[44px] font-bold tracking-tight text-[var(--text)]">
              All Projects & Systems
            </h1>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            {projects.length} RECORDS CATALOGUED
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between rounded-[14px] border border-[var(--border)] bg-[var(--surface)] card-shadow transition-all duration-200 hover:-translate-y-1 hover:border-[var(--card-hover-border)]"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    SYS_0{idx + 1}
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--panel)] text-[var(--text-muted)]">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text)] tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.length > 0 ? (
                    project.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--panel)] text-[var(--text-muted)]"
                      >
                        {t}
                      </span>
                    ))
                  ) : (
                    ['Architecture', 'Inference', 'Distributed'].map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--panel)] text-[var(--text-muted)]"
                      >
                        {t}
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div className="px-6 py-4 border-t border-[var(--border)] bg-[var(--panel)]/40 rounded-b-[13px] flex items-center justify-between font-mono text-xs">
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                >
                  View case study <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <span className="text-[11px]">SPEC READY</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
