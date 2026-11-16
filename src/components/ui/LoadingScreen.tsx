'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Lock background scrolling while loading
    document.body.style.overflow = 'hidden';

    const duration = 1800; // 1.8 seconds smooth load
    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      // Smooth cubic easing for natural loading deceleration
      const eased = 1 - Math.pow(1 - rawProgress, 3);
      const currentPct = Math.round(eased * 100);

      setProgress(currentPct);

      if (rawProgress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsComplete(true);
          document.body.style.overflow = '';
        }, 220);
      }
    };

    const rafId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -16,
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#000000] text-[#F2F2F2] select-none pointer-events-auto"
          aria-label="Loading Dharvesh Ahamed Portfolio"
        >
          <div className="flex flex-col items-center max-w-2xl sm:max-w-3xl px-6 text-center">
            {/* Message with smooth fade-in and larger, commanding scale */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-[#F2F2F2] leading-tight"
            >
              Coding is{' '}
              <span className="font-serif italic font-normal text-[var(--accent)] tracking-normal">
                Craft
              </span>{' '}
              isnt it?
            </motion.h2>

            {/* Horizontal progress bar container */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.95 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              className="mt-10 sm:mt-14 w-72 sm:w-96 md:w-[440px]"
            >
              {/* Track */}
              <div className="h-[4px] sm:h-[5px] w-full bg-[#202022] rounded-full overflow-hidden">
                {/* Fill bar */}
                <div
                  className="h-full bg-[var(--accent)] rounded-full transition-all duration-75 ease-out shadow-[0_0_16px_rgba(251,146,60,0.6)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Progress indicator percentage */}
              <div className="mt-4 flex justify-between items-center font-mono text-[var(--text-muted)]">
                <span className="text-xs uppercase tracking-widest opacity-60">INITIALIZING</span>
                <span className="text-sm sm:text-base font-semibold text-[var(--text)] tabular-nums">
                  {progress}%
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

