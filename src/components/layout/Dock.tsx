'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Layers, User, MessageSquare, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/cn';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'work', label: 'Work', href: '#projects', icon: Briefcase },
  { id: 'stack', label: 'Stack', href: '#stack', icon: Layers },
  { id: 'about', label: 'About', href: '#about', icon: User },
];

export default function Dock() {
  const [activeId, setActiveId] = useState<string>('work');
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'stack', 'about', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(id === 'projects' ? 'work' : id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = resolvedTheme === 'dark';

  const isGithubReady = siteConfig.socials.github.href && !siteConfig.socials.github.href.includes('[');
  const isLinkedinReady = siteConfig.socials.linkedin.href && !siteConfig.socials.linkedin.href.includes('[');
  const isInstagramReady = siteConfig.socials.instagram?.href && !siteConfig.socials.instagram.href.includes('[');

  return (
    <nav
      aria-label="Interactive Navigation Dock"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]"
    >
      <div
        className={cn(
          'flex items-center gap-2 p-2 rounded-full',
          'bg-[var(--surface)] border border-[var(--border-strong)]',
          'dock-shadow transition-all duration-200'
        )}
      >
        {/* Navigation Anchors: Work, Stack, About */}
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;

          return (
            <motion.a
              key={item.id}
              href={item.href}
              onClick={() => setActiveId(item.id)}
              aria-current={isActive ? 'page' : undefined}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 450, damping: 22 }}
              className={cn(
                'min-h-[46px] min-w-[46px] px-4 sm:px-5 py-2.5 rounded-full',
                'font-mono text-xs sm:text-sm tracking-wider transition-colors duration-150',
                'flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-[var(--accent)] select-none',
                isActive
                  ? 'bg-[var(--border-strong)] text-[var(--bg)] font-semibold shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--panel)]'
              )}
            >
              <Icon className="h-4 w-4 sm:hidden" />
              <span className="hidden sm:inline">{item.label}</span>
            </motion.a>
          );
        })}

        {/* Separator rule */}
        <div className="h-6 w-px bg-[var(--border)] mx-1" aria-hidden="true" />

        {/* GitHub Logo Button with Spring Magnification */}
        <motion.a
          href={isGithubReady ? siteConfig.socials.github.href : 'https://github.com'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          title="GitHub"
          whileHover={{ scale: 1.25, y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 450, damping: 20 }}
          className={cn(
            'min-h-[46px] min-w-[46px] rounded-full flex items-center justify-center',
            'text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--panel)]',
            'transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]'
          )}
        >
          <GithubIcon className="h-4 w-4" />
        </motion.a>

        {/* LinkedIn Logo Button with Spring Magnification */}
        <motion.a
          href={isLinkedinReady ? siteConfig.socials.linkedin.href : 'https://linkedin.com'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          title="LinkedIn"
          whileHover={{ scale: 1.25, y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 450, damping: 20 }}
          className={cn(
            'min-h-[46px] min-w-[46px] rounded-full flex items-center justify-center',
            'text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--panel)]',
            'transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]'
          )}
        >
          <LinkedInIcon className="h-4 w-4" />
        </motion.a>

        {/* Instagram Logo Button with Spring Magnification */}
        <motion.a
          href={isInstagramReady ? siteConfig.socials.instagram!.href : 'https://instagram.com'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          title="Instagram"
          whileHover={{ scale: 1.25, y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 450, damping: 20 }}
          className={cn(
            'min-h-[46px] min-w-[46px] rounded-full flex items-center justify-center',
            'text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--panel)]',
            'transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]'
          )}
        >
          <InstagramIcon className="h-4 w-4" />
        </motion.a>

        {/* Connect Logo Button (anchored to #contact) */}
        <motion.a
          href="#contact"
          aria-label="Connect & Send Message"
          title="Connect"
          whileHover={{ scale: 1.25, y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 450, damping: 20 }}
          className={cn(
            'min-h-[46px] min-w-[46px] rounded-full flex items-center justify-center',
            'text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--panel)]',
            'transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]'
          )}
        >
          <MessageSquare className="h-4 w-4" />
        </motion.a>

        {/* Separator rule */}
        <div className="h-6 w-px bg-[var(--border)] mx-1" aria-hidden="true" />

        {/* Dark/Night Switch Button with Spring Magnification */}
        <motion.button
          type="button"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label={isDark ? 'Switch to light paper theme' : 'Switch to dark theme'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          whileHover={{ scale: 1.25, y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 450, damping: 20 }}
          className={cn(
            'min-h-[46px] min-w-[46px] rounded-full flex items-center justify-center',
            'text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--panel)]',
            'transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]'
          )}
        >
          {mounted && (
            isDark ? (
              <Sun className="h-4 w-4 text-[var(--text)]" />
            ) : (
              <Moon className="h-4 w-4 text-[var(--text)]" />
            )
          )}
        </motion.button>
      </div>
    </nav>
  );
}
