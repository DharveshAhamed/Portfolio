/**
 * Site-wide configuration / content model.
 *
 * CONTENT NEEDED: Replace all [Placeholder] strings with real content.
 */

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  /** Full name */
  name: string;
  /** Short name / monogram */
  monogram: string;
  /** Professional title shown in hero */
  role: string;
  /** Hero tagline — one punchy sentence */
  tagline: string;
  /** Bio paragraphs for About section */
  bio: string[];
  /** Contact email */
  email: string;
  /** Resume PDF path (place file in /public/), or null if not yet available */
  resumeUrl: string | null;
  /** Social / external links */
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
    instagram: SocialLink;
  };
  /** Open Graph defaults */
  siteUrl: string;
  ogImage: string;
  /** Physical location — optional */
  location?: string;
  /** Availability status — optional */
  availability?: string;
}

export const siteConfig: SiteConfig = {
  name: 'Dharvesh Ahamed',
  monogram: 'DA',
  role: 'Aspiring AI/ML Developer | Python Developer',
  tagline: 'Aspiring AI/ML Developer & Python Developer building intelligent applications with Python, FastAPI, Next.js, and Machine Learning.',
  bio: [
    'MCA candidate with intermediate Python programming skills, foundational knowledge of Machine Learning, and practical familiarity with ChatGPT and AI APIs. Experienced in developing software applications using Python, FastAPI, Next.js, PostgreSQL, and modern development technologies.',
    'Brings a strong foundation in backend development, database management, API design, and problem-solving, with a passion for building AI-powered applications and applying Machine Learning to practical software development challenges.',
  ],
  email: 'dharveshahamed717@gmail.com',
  resumeUrl: '/resume.pdf',
  socials: {
    github: {
      label: 'GitHub',
      href: 'https://github.com/DharveshAhamed',
    },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dharveshahamed',
    },
    instagram: {
      label: 'Instagram',
      href: 'https://www.instagram.com/dharvesh_ahamed',
    },
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dharveshahamed.dev',
  ogImage: '/og-image.png',
  location: 'Tirur, Kerala, India',
  availability: 'Open to opportunities',
};
