/**
 * Badge
 * Small label chip for tech tags or status indicators.
 */
import { cn } from '@/lib/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        {
          // default: neutral surface
          'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border)]':
            variant === 'default',
          // accent: electric blue
          'bg-accent-100 text-accent-700 dark:bg-accent-950 dark:text-accent-300':
            variant === 'accent',
          // outline: border only
          'border border-[var(--border)] text-[var(--text-secondary)] bg-transparent':
            variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
