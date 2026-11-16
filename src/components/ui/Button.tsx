/**
 * Button
 * Reusable button with variant + size system.
 * Supports asChild (via Slot pattern) for rendering as <a> or other elements.
 */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize    = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Render as child element (e.g. <a href="...">). Requires a single child. */
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-accent-600 text-white',
    'hover:bg-accent-700 active:bg-accent-800',
    'focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2',
  ].join(' '),
  secondary: [
    'border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)]',
    'hover:bg-[var(--bg-surface)] active:bg-[var(--bg-surface)]',
    'focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2',
  ].join(' '),
  ghost: [
    'text-[var(--text-secondary)] bg-transparent',
    'hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]',
    'focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2',
  ].join(' '),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8  px-3   text-xs  gap-1.5',
  md: 'h-10 px-4   text-sm  gap-2',
  lg: 'h-12 px-6   text-base gap-2.5',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asChild = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium',
          'transition-colors duration-150 select-none whitespace-nowrap',
          'disabled:pointer-events-none disabled:opacity-50',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export default Button;
