# Swift Global Inc. — International EPC & Infrastructure Platform

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Accessibility](https://img.shields.io/badge/WCAG-2.1_AA-success?style=flat)](#accessibility--standards)

Official corporate web platform for **Swift Global Inc.**, a premier international Engineering, Procurement, and Construction (EPC) contractor. Specializing in turnkey execution of energy facilities, petrochemical plants, marine export terminals, heavy industrial processing, and international supply chain logistics.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Design System & Branding](#design-system--branding)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Cross-Entity Architecture](#cross-entity-architecture)
- [Accessibility & Standards](#accessibility--standards)
- [Deployment](#deployment)

---

## Overview

Swift Global Inc. manages end-to-end EPC contracts across North America, the Gulf Coast, and international energy hubs. This digital platform provides prospective industrial clients, joint-venture partners, and project sponsors with access to past delivery dossiers, engineering specifications, and formal procurement RFP mechanisms.

- **Primary URL**: [swiftglobalinc.com](https://swiftglobalinc.com)
- **Sister Enterprise**: [Swift Consult Inc.](https://swiftconsultinc.com) (Engineering Consulting, Civil & Structural Design)

---

## Key Features

### 1. High-Impact Industrial EPC Hero
- Industrial dark aesthetic with layered imagery, high visual impact, and strong typographical hierarchy.
- Direct CTA triggers for procurement tender inquiries and EPC portfolio examination.

### 2. Interactive EPC Project Portfolio & Detail Modal
- **Filterable Category Tabs**: Filter projects across `All`, `Energy & Petrochemical`, `Marine & Logistics`, and `Heavy Industrial` with live count badges.
- **Space-Efficient 3-Card Grid**: Displays 3 cards per row (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) with streamlined preview data.
- **EPC Side Modal (`ProjectSideModal.astro`)**: Reusable slide-over drawer sliding in smoothly from the right, providing an exhaustive industrial delivery dossier:
  - Project banner & key operational metrics
  - Turnkey Scope of Work & Engineering Execution narrative
  - Key EPC Milestones & Deliverables checklist
  - Technical Specifications matrix (International Codes, Heavy Fabrication Standards, Modularization, QA/QC)
  - Direct CTA to initiate procurement / tender discussions

### 3. Responsive Navigation & Mobile Drawer
- Full-height mobile drawer sliding in smoothly from the right edge.
- Extended breakpoint support: covers mobile viewports and tablets up to large tablets (`lg`).
- Streamlined header layout with clean spacing on smaller screens.

### 4. Global Sister Site Switcher (`SisterSiteSwitcher.astro`)
- Fixed to vertical center of the screen, attached to the right edge (`fixed right-0 top-1/2 -translate-y-1/2`).
- Permanent crisp white background (`bg-white`) whether collapsed or expanded.
- Collapses to a compact 44 x 44 px touch-friendly icon button.
- Expands to a clean 180 px maximum width card displaying the Swift Consult brand logo and a `"Visit Website ↗"` link (`target="_blank"`).
- Sits below modals (`z-30`) so it never obstructs project dossiers or mobile menus.
- Supports desktop hover, mobile tap toggle, keyboard navigation, and `Escape` key dismissal.

### 5. Standardized Responsive Margins
- Standardized page padding across the entire platform:
  - Mobile: `px-6`
  - Small Tablets (`md`): `px-10`
  - Large Tablets & Desktops (`lg`, `xl`): `px-12`

---

## Design System & Branding

The visual language reflects heavy industrial power, safety, and precision:

| Token | Hex / Class | Purpose |
| :--- | :--- | :--- |
| **Obsidian** | `#03070E` (`bg-obsidian-950`) | Deep background, primary industrial tone |
| **Amber Gold** | `#D4AF37` (`text-amber-gold`) | Accent color, luxury industrial highlight, badges |
| **Steel Gray** | `#5B8296` (`text-steel-500`) | Secondary text, borders, technical markers |
| **Component Rounding** | `rounded-md` (6px) | Standardized corner radius across all buttons and cards |

---

## Architecture & Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / zero runtime JS by default)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with `@tailwindcss/typography`
- **Type Checking**: Strict [TypeScript](https://www.typescriptlang.org/) (`tsc --noEmit`)
- **SEO & Structured Data**: OpenGraph tags, Twitter cards, canonical URLs, and `schema.org` JSON-LD corporate schema
- **Code Quality**: Astro Diagnostics (`astro check`)

---

## Repository Structure

```text
swift-global/
├── public/
│   ├── images/              # Industrial project assets, WebP photography, SVG logos
│   │   ├── swift-consult-logo.svg
│   │   └── swift-global-logo.svg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro # Navigation, mobile drawer, sister banner
│   │   │   └── Footer.astro # Corporate footer, global footprint, legal
│   │   └── ui/
│   │       ├── Badge.astro
│   │       ├── Button.astro
│   │       ├── ProjectSideModal.astro  # Slide-over EPC technical dossier
│   │       └── SisterSiteSwitcher.astro # Fixed collapsible cross-entity link
│   ├── data/
│   │   └── companyData.ts   # Central single-source-of-truth data model
│   ├── layouts/
│   │   └── Layout.astro     # Root HTML layout, SEO, JSON-LD, global switcher
│   ├── pages/
│   │   ├── index.astro      # Industrial homepage / EPC capabilities
│   │   ├── about.astro      # Global footprint, leadership, safety track record
│   │   ├── services.astro   # Turnkey EPC, procurement, construction management
│   │   ├── sectors.astro    # Energy, petrochemical, marine & heavy industrial
│   │   ├── projects.astro   # 3-col portfolio with category tabs & EPC modal
│   │   └── contact.astro    # Global tender & procurement RFP submission
│   └── styles/
│       └── global.css       # Tailwind base, typography, utility classes
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind theme configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd swift-global

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser.

---

## Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds static HTML/CSS/JS output to `dist/` |
| `npm run preview` | Previews the local production build in `dist/` |
| `npm run check` | Runs Astro diagnostics check across all template files |
| `npm run typecheck` | Runs TypeScript compiler checks (`tsc --noEmit`) |

---

## Cross-Entity Architecture

Swift Global operates in tandem with its domestic design partner **Swift Consult Inc.**:

- **Swift Global Inc.**: Heavy industrial procurement, EPC turnkey plant construction, marine terminals, cross-border supply chains.
- **Swift Consult Inc.**: Engineering design, structural calculations, civil drawings, municipal permits, P.Eng stamped reviews.

Both platforms feature reciprocal fixed sister-site switchers linking users smoothly across organizations.

---

## Accessibility & Standards

- **WCAG 2.1 AA Compliant**: High contrast color ratios throughout.
- **Keyboard Navigable**: Visible focus outlines (`focus-visible`), modal focus trapping, and `Escape` key listeners.
- **Semantic HTML**: Landmarks (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`), ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-expanded`).
- **Screen Reader Support**: Skip to main content link on every page.

---

## Deployment

The static output in `dist/` can be deployed directly to any modern static hosting provider:

- **Cloudflare Pages**: `npm run build` with output directory `dist`
- **Vercel**: Framework preset `Astro`
- **Netlify**: Build command `npm run build`, publish directory `dist`
- **GitHub Pages**: Static workflow deployment

---

## License

Copyright © 2026 Swift Global Inc. All rights reserved.
