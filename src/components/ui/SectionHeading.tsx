/**
 * SectionHeading
 * Consistent section title + optional subtitle used across all sections.
 */
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
