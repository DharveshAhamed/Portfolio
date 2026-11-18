'use client';

import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] pt-14 pb-28 text-[var(--text)] transition-colors">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center w-full">
          {/* Left Section: Monogram Badge (Orange) + Name + Title */}
          <div className="flex items-center gap-4 justify-start">
            {/* Orange Monogram Tile with Custom Gothic D Logo */}
            <div
              className="h-13 w-13 sm:h-14 sm:w-14 rounded-2xl bg-[var(--accent)] flex items-center justify-center overflow-hidden p-2.5 shadow-sm shrink-0 select-none"
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-black.png" alt="Dharvesh Logo" className="h-full w-full object-contain" />
            </div>

            <div className="flex flex-col">
              <span className="font-sans font-black text-lg sm:text-xl tracking-wider text-[var(--text)] uppercase leading-tight">
                DHARVESH<br />
                AHAMED
              </span>
              <span className="font-mono text-xs sm:text-sm text-[var(--text-muted)] mt-1">
                Aspiring AI/ML Developer | Python Developer
              </span>
            </div>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="flex flex-col items-start md:items-center justify-center gap-3 font-mono text-xs sm:text-sm text-[var(--text-muted)]">
            <div className="flex items-center gap-6 sm:gap-8">
              <a
                href="#about"
                className="hover:text-[var(--accent)] transition-colors"
              >
                Profile
              </a>
              <a
                href="#stack"
                className="hover:text-[var(--accent)] transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-[var(--accent)] transition-colors"
              >
                Projects
              </a>
            </div>
            <div className="flex items-center gap-6 sm:gap-8">
              <a
                href="#about"
                className="hover:text-[var(--accent)] transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="hover:text-[var(--accent)] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right Section: Copyright */}
          <div className="flex items-center md:justify-end font-mono text-xs sm:text-sm text-[var(--text-muted)]">
            <span>&copy; 2026 DHARVESH AHAMED</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
