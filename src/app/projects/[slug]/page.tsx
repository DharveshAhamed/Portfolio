import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, GitBranch } from 'lucide-react';
import Container from '@/components/ui/Container';
import { getProjectBySlug, getAllSlugs, getAdjacentProjects } from '@/lib/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Specification & Case Study | Dharvesh Ahamed`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="py-16 sm:py-24 border-b border-[var(--border)]">
      <Container className="max-w-4xl">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/#projects"
            className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Selected Work
          </Link>
        </div>

        {/* Case Study Header Box */}
        <header className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10 card-shadow">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-widest">
              PROJECT SPEC // {project.slug}
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded border border-[var(--border)] bg-[var(--panel)] text-[var(--accent)]">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text)]">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {project.summary}
          </p>

          {/* Metadata Parameters Grid */}
          <div className="mt-8 pt-6 border-t border-[var(--border)] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div>
              <span className="text-[var(--text-muted)] block">ROLE:</span>
              <span className="text-[var(--text)] font-medium mt-1 block">{project.role}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block">TIMELINE:</span>
              <span className="text-[var(--text)] font-medium mt-1 block">{project.timeline}</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block">DEMO:</span>
              <span className="text-[var(--text)] font-medium mt-1 block">
                {project.links.live ? (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline inline-flex items-center gap-1">
                    Live <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  'Unpublished'
                )}
              </span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block">SOURCE:</span>
              <span className="text-[var(--text)] font-medium mt-1 block">
                {project.links.github ? (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline inline-flex items-center gap-1">
                    GitHub <GitBranch className="h-3 w-3" />
                  </a>
                ) : (
                  'Private / TBD'
                )}
              </span>
            </div>
          </div>
        </header>

        {/* Detailed Spec Panels */}
        <div className="mt-12 space-y-8 font-sans">
          {/* Overview */}
          <section className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 card-shadow">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
              // ARCHITECTURE OVERVIEW
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Problem */}
          <section className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 card-shadow">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
              // PROBLEM & SYSTEM CONSTRAINTS
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {project.problem}
            </p>
          </section>

          {/* Approach & Implementation */}
          <section className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 card-shadow">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-3">
              // SYSTEM DESIGN & APPROACH
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {project.approach?.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </section>

          {/* Verified Stack */}
          <section className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 card-shadow">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
              // TECHNICAL SPECIFICATION
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.length > 0 ? (
                project.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-[6px] border border-[var(--border)] bg-[var(--panel)] text-[var(--text)]"
                  >
                    {t}
                  </span>
                ))
              ) : (
                ['PyTorch', 'FastAPI', 'Docker', 'PostgreSQL', 'Redis'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 rounded-[6px] border border-[var(--border)] bg-[var(--panel)] text-[var(--text-muted)]"
                  >
                    {tech}
                  </span>
                ))
              )}
            </div>
          </section>
        </div>

        {/* Next / Previous Project Navigation */}
        <nav
          aria-label="Case Study Navigation"
          className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs"
        >
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> PREVIOUS: {prev.title}
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1.5"
            >
              NEXT: {next.title} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </Container>
    </article>
  );
}
