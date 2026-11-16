/**
 * Global 404 page
 */
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center py-24">
      <p className="text-6xl font-bold text-accent-600 mb-4">404</p>
      <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
        Page not found
      </h1>
      <p className="text-[var(--text-secondary)] mb-8 max-w-md">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild variant="primary">
        <Link href="/">Go back home</Link>
      </Button>
    </Container>
  );
}
