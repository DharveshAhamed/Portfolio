'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Container from '@/components/ui/Container';
import { siteConfig } from '@/data/site';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const isResumeAvailable = Boolean(siteConfig.resumeUrl);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32 border-b border-[var(--border)]"
    >
      <Container>
        <motion.div
          className="flex flex-col items-start w-full -mt-2 sm:-mt-4 lg:-mt-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Handle Tag above Hero Headline */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8 pt-2">
            <Link
              href="/"
              className="font-mono text-sm sm:text-base text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] inline-block"
            >
              @diveintodharvesh
            </Link>
          </motion.div>

          {/* Headline with serif italic orange accent */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[112px] 2xl:text-[128px] font-bold tracking-[-3px] text-[var(--text)] leading-[0.95] max-w-7xl"
          >
            Hi, I am Dharvesh Ahamed. I craft complete web{' '}
            <span className="font-serif italic font-normal text-[var(--accent)] tracking-normal">
              solutions.
            </span>
          </motion.h1>

          {/* One-line specialty in gray */}
          <motion.p
            variants={itemVariants}
            className="mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-2xl lg:text-3xl xl:text-4xl text-[var(--text-muted)] max-w-6xl font-sans leading-relaxed"
          >
            Aspiring AI/ML Developer &amp; Python Developer specializing in building AI-powered applications, FastAPI backends, and Machine Learning solutions.
          </motion.p>

          {/* Action Row */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 flex flex-wrap items-center gap-6 sm:gap-10"
          >
            {/* White primary button */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center h-13 sm:h-14 px-8 sm:px-10 rounded-lg bg-[var(--border-strong)] text-[var(--bg)] font-semibold text-base transition-transform active:scale-[0.98] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-[var(--accent)] shadow-md"
            >
              View Work
            </a>

            {/* Mono Download resume link */}
            <div className="relative group">
              {isResumeAvailable ? (
                <a
                  href={siteConfig.resumeUrl!}
                  download="Dharvesh_Ahamed_Resume.pdf"
                  className="font-mono text-sm uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text)] inline-flex items-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
              ) : (
                <span className="font-mono text-sm uppercase tracking-wider text-[var(--text-muted)] opacity-60 inline-flex items-center gap-2 cursor-not-allowed">
                  <Download className="h-4 w-4" />
                  Download resume [TBD]
                </span>
              )}
            </div>

            {/* Orange Just shipped link */}
            <Link
              href="/projects/cargosync"
              className="font-mono text-sm uppercase tracking-wider text-[var(--accent)] hover:underline inline-flex items-center gap-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <span>Just shipped: CargoSync</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
