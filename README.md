# Portfolio

The living home for my work, experiments, and interface details as this site takes shape.

## Card Snapshot

- Label: Portfolio
- Project index: 01
- Signature: portfolio
- Repository: https://github.com/nsh0823/portfolio
- Preview image: `/images/screenshots/portfolio_screenshot.png`

## Overview

A personal portfolio focused on presenting selected work through tactile motion, project case studies, and a polished interface system. I wanted the site to feel interactive and user friendly while challenging myself with newer tools such as Next.js and Framer Motion.

## My Role

I designed and built the portfolio experience end to end, including the project cards, responsive layout, motion interactions, and project detail flow. The visual direction was inspired by Toss Impact, I used ChatGPT to create the avatar version of myself, and I used Codex for coding assistance while building the site.

## Main Features

- Interactive parallax project cards with pointer-based depth.
- Project detail modal with structured case-study content.
- Responsive navigation with glass styling and scroll-based collapse.
- Generated personal avatar artwork created with ChatGPT for a more distinctive portfolio identity.
- Toss Impact-inspired visual language adapted into a custom portfolio experience.

## Tech Stack

Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Vercel

## Screenshots

- Home: The interactive landing section with motion and avatar artwork.
- Projects: The projects section with parallax cards and modal case studies.
- About: The personal background section with scroll-revealed content.
- Skills: The skills section organized around the technologies I use.

## Project Structure

```txt
src/app/                  App Router pages, metadata, and global layout
src/components/layout/    App shell controls such as navigation and toggles
src/components/sections/  Page-level portfolio sections
src/components/projects/  Project-specific cards and detail UI
src/components/ui/        Reusable shadcn-style primitives
src/data/                 Portfolio content and localized project data
src/hooks/                Shared React hooks
src/lib/                  General utilities
public/images/            Static portfolio imagery
```

Project case-study content lives in `src/data/projects.ts`. Section presentation lives separately under `src/components/sections`, so content changes do not need to touch rendering logic.

## Deploy

The project can be deployed on Vercel using the default Next.js settings.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Useful checks:

```bash
npm run lint
npm run build
```
