# Manish Shaik — Portfolio

Personal portfolio built with **Next.js (App Router), React, TypeScript, Tailwind CSS v4, Motion, and Lucide icons**. It exports to a fully static site, so it deploys to Vercel (or any static host) with no server.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to /out
npm start          # serve /out locally
```

Requires Node.js 20+.

## Before you deploy

1. **Resume PDF** — copy your resume to `public/resume/Manish_Shaik_Resume.pdf`. Every "Download Resume" button points there. If you rename it, update `site.resume` and `site.resumeFileName` in `lib/data.ts`.
2. **Site URL** — in Vercel, set the environment variable `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://your-domain.com`) so canonical, Open Graph, robots, and sitemap URLs are correct.
3. **Blog project repo** — when the Technical Blog Platform repository is public, add its URL to the `github` field of that project in `lib/data.ts`; a "View on GitHub" button appears automatically.

## Editing content

All text lives in **`lib/data.ts`** — profile, nav links, hero keywords, skills, experience, achievement metrics, projects, education, and certifications. Components only read from it.

## Project structure

```
app/
  layout.tsx        SEO metadata, JSON-LD, fonts, theme bootstrap
  page.tsx          Section order
  globals.css       Design tokens (dark + light), glass/button/chip classes
  robots.ts, sitemap.ts, icon.svg
components/
  Navbar.tsx        Sticky nav, active-section pill, mobile menu, theme toggle
  Hero.tsx          Animated intro, rotating keywords, profile.json card
  About.tsx  Skills.tsx  Experience.tsx  Projects.tsx  Education.tsx  Contact.tsx  Footer.tsx
  ui.tsx            Section, Reveal (scroll animation), IconTile
  ThemeToggle.tsx  Providers.tsx  icons.tsx
lib/data.ts         All portfolio content
public/resume/      Put the resume PDF here
```

## Theming

Colors are CSS variables in `app/globals.css` (`:root` / `[data-theme="dark"]` and `[data-theme="light"]`), mapped into Tailwind via `@theme inline`. Dark is the default; the toggle remembers the visitor's choice.

## Accessibility & motion

Semantic landmarks, skip link, keyboard-friendly nav (Escape closes the mobile menu), visible focus rings, `aria-current` on the active section, and `MotionConfig reducedMotion="user"` plus a CSS fallback so animations respect the OS "reduce motion" setting.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project**, import the repo. The Next.js preset is detected automatically.
3. Add `NEXT_PUBLIC_SITE_URL`, then deploy.

Other hosts (Netlify, GitHub Pages, Cloudflare Pages): run `npm run build` and publish the `out/` folder.

## Contact form (optional)

The contact section uses a `mailto:` action because no email service is configured. To add a real form, wire it to a provider such as Formspree (works with static export) or Resend (requires removing `output: "export"` in `next.config.ts` and adding an API route).
