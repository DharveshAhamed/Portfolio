'use client';

import Container from '@/components/ui/Container';

interface StackCategory {
  title: string;
  items: string[];
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    title: 'Programming Languages',
    items: ['Python', 'C', 'C++', 'SQL'],
  },
  {
    title: 'AI & Machine Learning',
    items: ['Generative AI', 'ChatGPT', 'AI APIs', 'Machine Learning Concepts', 'Agentic AI'],
  },
  {
    title: 'Backend, APIs & Databases',
    items: ['FastAPI', 'REST API Design', 'Pydantic Validation', 'API Integration', 'PostgreSQL', 'Supabase & Auth'],
  },
  {
    title: 'Frontend, Tools & Hardware',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Three.js', 'Git & GitHub', 'Flutter', 'Arduino UNO'],
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="stack"
      aria-label="Engineering Stack & Tools"
      className="py-20 sm:py-28 border-b border-[var(--border)]"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text)] leading-tight">
            Engineering Stack
          </h2>
        </div>

        {/* 4 Category Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 xl:gap-12">
          {STACK_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10 card-shadow"
            >
              {/* Category Header */}
              <div className="pb-5 mb-6 border-b border-[var(--border)]">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[var(--text)]">
                  {category.title}
                </h3>
              </div>

              {/* Bordered chips */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs sm:text-sm px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] text-[var(--text-muted)] transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--text)] cursor-default select-none shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
