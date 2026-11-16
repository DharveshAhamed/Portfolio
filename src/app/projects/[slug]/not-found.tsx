/**
 * Project not found page — shown when [slug] doesn't match any project.
 */
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function ProjectNotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center py-24">
      <p className="text-6xl font-bold text-accent-600 mb-4">404</p>
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
        Project not found
      </h2>
      <p className="text-[var(--text-secondary)] mb-8 max-w-md">
        This project doesn&apos;t exist or may have been renamed.
      </p>
      <Button asChild variant="primary">
        <Link href="/projects">View all projects</Link>
      </Button>
    </Container>
  );
}
