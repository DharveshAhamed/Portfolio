/**
 * Root Layout
 * - Applies Inter font
 * - ThemeProvider from next-themes (class-based, system default)
 * - Skip-to-content link
 * - Navigation + Footer
 * - OpenGraph metadata defaults
 */
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { inter } from '@/lib/fonts';
import { siteConfig } from '@/data/site';
import Footer from '@/components/layout/Footer';
import Dock from '@/components/layout/Dock';
import LoadingScreen from '@/components/ui/LoadingScreen';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} — Portfolio`,
    title: `${siteConfig.name} — Portfolio`,
    description: siteConfig.tagline,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Portfolio`,
    description: siteConfig.tagline,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: `${siteConfig.name} — ${siteConfig.role}`,
        description: `Portfolio of ${siteConfig.name}, ${siteConfig.role}`,
        publisher: {
          '@id': `${siteConfig.siteUrl}/#person`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteConfig.siteUrl}/#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        url: siteConfig.siteUrl,
      },
    ],
  };

  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased relative pb-28">
        {/* Skip to main content — keyboard / screen-reader accessible */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <ThemeProvider
          defaultTheme="dark"
        >
          <LoadingScreen />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
