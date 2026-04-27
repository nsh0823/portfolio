
# Portfolio

<p align="center">
  <img width="300" height="auto" alt="ChatGPT Image 2026년 4월 27일 오전 12_46_18" src="https://github.com/user-attachments/assets/a70a316d-562d-452f-a77d-3a054ddf7552" />
  <div align="center">The living home for my work, experiences, and skills.</div>
</p>


#

## Screenshots

<table>
  <tr align="center">
    <td>
      <img width="1695" height="986" alt="portfolio_home" src="https://github.com/user-attachments/assets/959b0b34-b2ea-4363-8a6e-6fb9f67c58e1" />
    </td>
    <td>
      <img alt="portfolio_projects" src="https://github.com/user-attachments/assets/f490b7a9-80c0-4cc7-a962-21607e389f75" />
    </td>
  </tr>
  <tr>
    <td align="center">Home: The interactive landing section with motion and avatar artwork.</td>
    <td align="center">Projects: The projects section with parallax cards and modal case studies.</td>
  </tr>
  <tr align="center">
    <td>
      <img alt="portfolio_about" src="https://github.com/user-attachments/assets/92b91165-00b7-426d-81ea-b9515812ee5c" />
    </td>
    <td>
      <img alt="portfolio_skills" src="https://github.com/user-attachments/assets/4d6a7a75-31e2-492e-a27f-073b625821dc" />
    </td>
  </tr>
  <tr>
    <td align="center">About: The personal background section with scroll-revealed content.</td>
    <td align="center">Skills: The skills section organized around the technologies I use.</td>
  </tr>
</table>




https://github.com/user-attachments/assets/7038f348-6b4a-44f5-afb1-9d088c4e04f1



<br />

## Overview

A personal portfolio focused on presenting selected work through tactile motion, project case studies, and a polished interface system. I wanted the site to feel interactive and user friendly while challenging myself with newer tools such as Next.js and Framer Motion.

<br />

## My Role

I designed and built the portfolio experience end to end, including the project cards, responsive layout, motion interactions, and project detail flow. The visual direction was inspired by Toss Impact, I used ChatGPT to create the avatar version of myself, and I used Codex for coding assistance while building the site.

<br />

## Main Features

- Interactive parallax project cards with pointer-based depth.
- Project detail modal with structured case-study content.
- Responsive navigation with glass styling and scroll-based collapse.
- Generated personal avatar artwork created with ChatGPT for a more distinctive portfolio identity.
- Toss Impact-inspired visual language adapted into a custom portfolio experience.

<br />

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br />


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

> [!NOTE]
> Project case-study content lives in `src/data/projects.ts`. Section presentation lives separately under `src/components/sections`, so content changes do not need to touch rendering logic.


<br />

## Deploy

The project can be deployed on Vercel using the default Next.js settings.

<br />

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
