/**
 * Container
 * Responsive max-width wrapper with wide full-screen immersion.
 */
import { cn } from '@/lib/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full max-w-7xl 2xl:max-w-[1600px] px-6 sm:px-10 lg:px-14 xl:px-16 2xl:px-20',
        className
      )}
    >
      {children}
    </Tag>
  );
}
