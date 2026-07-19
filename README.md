# Imran Khan — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The `/contact` page sends submissions via [Resend](https://resend.com). Add your API key to `.env.local`:

```
RESEND_API_KEY=re_your_key_here
```

Without it, the API route (`app/api/contact/route.ts`) fails gracefully with a friendly error instead of crashing.

## Content

All site copy — bio, skills, projects, education, achievements — lives in `lib/data/*.ts`. Edit those files to update the site; no component changes needed for content updates.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```
