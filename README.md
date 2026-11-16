# Dharvesh Ahamed — Portfolio Website

A personal portfolio built for **Dharvesh Ahamed** as an **AI Developer**, featuring Apple-inspired minimalism, an electric blue accent palette, a responsive 3D interactive hero, and comprehensive case studies.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **React Three Fiber / Drei**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file and configure variables
cp .env.local.example .env.local

# 3. Start development server
npm run dev

# 4. Open http://localhost:3000
```

---

## 📋 Required Content Checklist (Before Production Launch)

All missing items are labeled with `[Placeholder]` tags in the codebase. Replace them before deploying:

1. **`src/data/site.ts`**:
   - `tagline`: Your one-sentence value proposition.
   - `bio`: 2–3 sentences on your background, models/systems built, and focus areas.
   - `email`: Your real contact email address.
   - `socials.github.href`: Your GitHub profile URL (e.g. `https://github.com/dharveshahamed`).
   - `socials.linkedin.href`: Your LinkedIn profile URL.
   - `location`: Your city/country.
   - `availability`: Your current hiring status (e.g., "Actively interviewing").

2. **`src/data/projects.ts`**:
   - **CargoSync**: Summary, problem, approach, architecture, key decisions, verified tech stack, and outcomes.
   - **Intelligent Energy Control System**: Summary, problem, approach, architecture, key decisions, verified tech stack, and outcomes.
   - Links (live site or source repository) when available.

3. **`public/resume.pdf`**:
   - Place your résumé PDF at `/public/resume.pdf`.
   - Update `resumeUrl: '/resume.pdf'` in `src/data/site.ts` to automatically activate the download button.

4. **`public/og-image.png`**:
   - 1200×630px social preview image for OpenGraph and Twitter cards.

---

## 🏛️ Architecture & Component Model

```
src/
├── app/
│   ├── api/
│   │   └── github/route.ts      # Server-side GitHub API integration (cached, secret-safe)
│   ├── projects/
│   │   ├── page.tsx             # Complete projects catalogue
│   │   └── [slug]/
│   │       ├── page.tsx         # Dedicated case study routes (CargoSync & IECS)
│   │       └── not-found.tsx
│   ├── globals.css              # Tailwind v4 @theme tokens, light/dark custom properties
│   ├── layout.tsx               # Root layout, JSON-LD Schema.org, skip-link, ThemeProvider
│   ├── not-found.tsx            # Global 404 page
│   ├── page.tsx                 # Home page (all 6 sections in order)
│   ├── robots.ts                # Robots.txt metadata generator
│   └── sitemap.ts               # Sitemap generator
├── components/
│   ├── 3d/
│   │   ├── HeroScene.tsx        # React Three Fiber / Drei interactive 3D jewel
│   │   └── Hero3DWrapper.tsx    # Lazy dynamic loader + reduced-motion / WebGL fallback
│   ├── layout/
│   │   ├── Navigation.tsx       # Sticky nav with scroll-spy, Radix mobile sheet, resume action
│   │   ├── Footer.tsx           # Minimal copyright + verified social links
│   │   └── ThemeToggle.tsx      # Sun/Moon light/dark toggle
│   ├── providers/
│   │   └── ThemeProvider.tsx    # Native React 19 theme provider with localStorage sync
│   ├── sections/
│   │   ├── HeroSection.tsx      # Confident typography, status pill, CTAs, 3D visual
│   │   ├── ProjectsSection.tsx  # Featured project cards, hover elevation, case study links
│   │   ├── CapabilitiesSection.tsx # AI / Frontend / Tools skill columns with placeholder chips
│   │   ├── AboutSection.tsx     # Narrative, target roles callout, quick facts, portrait slot
│   │   ├── GitHubSection.tsx    # Curated / live repository cards with stats
│   │   └── ContactSection.tsx   # Direct email contact card & connection channels
│   └── ui/
│       ├── Badge.tsx            # Tag/chip primitive
│       ├── Button.tsx           # Slot/asChild accessible button
│       ├── Container.tsx        # Centered responsive container
│       ├── ProjectVisual.tsx    # Custom abstract vector visuals for projects
│       └── SectionHeading.tsx   # Standardized section headings
├── data/
│   ├── projects.ts              # Typed project data (zero invented information)
│   └── site.ts                  # SiteConfig content model
└── lib/
    ├── cn.ts                    # Class name merger
    ├── fonts.ts                 # System-first modern sans-serif
    ├── projects.ts              # Helper functions & adjacent project queries
    └── tokens.ts                # Token definitions
```

---

## ♿ Accessibility & Performance

- **WCAG 2.2 AA Compliance**: Meets all contrast guidelines with both near-white (`#F8FAFC`) light mode and charcoal (`#0D1117`) dark mode.
- **Accessible Landmarks**: Full semantic hierarchy (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Skip to Content**: Integrated keyboard bypass link for screen readers and tab navigation.
- **Motion Preferences**: Respects `prefers-reduced-motion` across all Framer Motion transitions and Three.js 3D animations.
- **Non-blocking 3D**: Lazy-loaded client-side only; non-interactive elements have `tabIndex={-1}` and `aria-hidden="true"`.
- **Fast Static Generation**: Case studies are pre-rendered at build time with SSG.

---

## 🚢 Deployment (Vercel)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio implementation"
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Import the project into [Vercel](https://vercel.com):
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Add Environment Variables in Vercel project settings:
   - `NEXT_PUBLIC_SITE_URL`: Your custom domain (e.g., `https://dharveshahamed.dev`)
   - `GITHUB_TOKEN`: (Optional) GitHub Personal Access Token for live repository stats.
4. Click **Deploy**.

---

## 🌐 Custom Domain Setup

Recommended domain options:
- `dharveshahamed.com`
- `dharvesh.dev`
- `dharveshahamed.dev`

### DNS Records:
- **A Record**: Point `@` to `76.76.21.21` (Vercel)
- **CNAME Record**: Point `www` to `cname.vercel-dns.com`
