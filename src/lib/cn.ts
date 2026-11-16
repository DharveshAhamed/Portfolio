/**
 * Class name utility — combines clsx (conditional classes)
 * with tailwind-merge (deduplicates Tailwind utilities).
 */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
