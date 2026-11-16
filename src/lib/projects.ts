/**
 * Project helper functions — keep data fetching decoupled from components.
 */
import { projects, type Project } from '@/data/projects';

/** Return all projects */
export function getAllProjects(): Project[] {
  return projects;
}

/** Return featured projects only */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

/** Return a single project by slug, or undefined if not found */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Return all slugs (used for generateStaticParams) */
export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Return adjacent projects for case-study navigation */
export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  const prev = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;
  return { prev, next };
}
