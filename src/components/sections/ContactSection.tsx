'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Mail, ArrowUpRight, Send, CheckCircle, Loader2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import { siteConfig } from '@/data/site';

export default function ContactSection() {
  const [state, handleSubmit] = useForm('mwlolzvn');

  const isGithubConfigured =
    siteConfig.socials.github.href && !siteConfig.socials.github.href.includes('[');
  const isLinkedinConfigured =
    siteConfig.socials.linkedin.href && !siteConfig.socials.linkedin.href.includes('[');

  const inputClass =
    'w-full bg-[var(--panel)] border border-[var(--border)] rounded-lg px-4 py-3 font-mono text-sm text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none';

  const errorClass = 'mt-1 font-mono text-xs text-red-400';

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-16 lg:p-20 card-shadow">

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text)] leading-tight">
            Have something in{' '}
            <span className="font-serif italic font-normal text-[var(--accent)]">
              mind?
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-2xl text-[var(--text-muted)] font-sans max-w-3xl leading-relaxed">
            I am always interested in discussing technical architectures, engineering roles, and high-impact web applications. Reach out directly.
          </p>

          {/* ── Contact Form ── */}
          <div className="mt-12 pt-10 border-t border-[var(--border)]">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--text-muted)] block mb-6">
              SEND A MESSAGE
            </span>

            {state.succeeded ? (
              /* ── Success state ── */
              <div className="flex flex-col items-start gap-3 py-10">
                <CheckCircle className="h-8 w-8 text-[var(--accent)]" />
                <p className="font-mono text-lg text-[var(--text)]">Message sent successfully.</p>
                <p className="font-mono text-sm text-[var(--text-muted)]">
                  I&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className={inputClass}
                    disabled={state.submitting}
                  />
                  <ValidationError field="name" prefix="Name" errors={state.errors} className={errorClass} />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                    disabled={state.submitting}
                  />
                  <ValidationError field="email" prefix="Email" errors={state.errors} className={errorClass} />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="message" className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What&apos;s on your mind?"
                    className={inputClass}
                    disabled={state.submitting}
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} className={errorClass} />
                </div>

                {/* Form-level errors */}
                <ValidationError errors={state.errors} className={`sm:col-span-2 ${errorClass}`} />

                {/* Actions row */}
                <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex items-center gap-2.5 h-12 px-8 rounded-lg bg-[var(--border-strong)] text-[var(--bg)] font-semibold text-sm transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send message
                      </>
                    )}
                  </button>

                  {/* Fallback direct email */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Or email me directly
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* ── Social bar ── */}
          <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-6 font-mono text-xs sm:text-sm text-[var(--text-muted)]">
            <span>NETWORK CHANNELS:</span>
            <div className="flex items-center gap-8">
              {isGithubConfigured ? (
                <a
                  href={siteConfig.socials.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text)] transition-colors inline-flex items-center gap-1.5"
                >
                  GitHub <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="opacity-50">GitHub [TBD]</span>
              )}
              {isLinkedinConfigured ? (
                <a
                  href={siteConfig.socials.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text)] transition-colors inline-flex items-center gap-1.5"
                >
                  LinkedIn <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="opacity-50">LinkedIn [TBD]</span>
              )}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
