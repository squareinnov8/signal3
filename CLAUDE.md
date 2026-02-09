# Signal3 - Equifax Design System

## Project Overview

**Signal3** is Equifax's next-generation design system and component library, establishing a unified brand identity and visual language across all digital products. This project encompasses both a marketing website and a comprehensive component documentation platform.

**Live Demo**: https://signal3-pi.vercel.app

---

## Current Status (January 2026)

### What's Been Delivered

#### Marketing Website (apps/marketing)
A fully functional Next.js 14 marketing site showcasing the Signal3 design system:

| Page | Route | Status | Description |
|------|-------|--------|-------------|
| Homepage | `/` | Complete | Hero, features, platform showcase, CTA sections |
| Getting Started | `/getting-started` | Complete | Quick start guide for developers |
| Components | `/components` | Complete | Component library browser with 7 components |
| Component Detail | `/components/[slug]` | Complete | Individual component docs with previews, props, examples |
| Foundations | `/foundations` | Complete | Design tokens hub with 8 foundation pages |
| Patterns | `/patterns` | Complete | UI pattern library with 6 pattern pages |
| Use Cases | `/patterns/use-cases` | Complete | 3 real-world page recreations |

#### Components Documented
| Component | Interactive Preview | Code Examples | AI Directives |
|-----------|---------------------|---------------|---------------|
| Button | Yes | 6 examples | Yes |
| Badge | Yes | 4 examples | Yes |
| Input | Yes | 5 examples | Yes |
| Card | Yes | 4 examples | Yes |
| Avatar | Yes | 4 examples | Yes |
| Navbar | Yes (3 variants) | 6 examples | Yes |
| Chat | Yes (3 variants) | 6 examples | Yes |

#### Foundation Pages
- **Colors** - Full Equifax color palette with copy-to-clipboard
- **Typography** - Type scale and font usage guidelines
- **Logos** - Official logo treatments with download links
- **Accessibility** - WCAG 2.1 AA guidelines
- **Content** - Voice, tone, and writing guidelines
- **Themes** - Light/dark theme documentation
- **Tokens** - Design token reference

#### Pattern Pages
- **Hero** - Hero section variants
- **Navigation** - Global nav with megamenu, developer nav
- **Pricing** - Pricing card layouts
- **Sections** - Feature grids, content sections
- **Split Content** - Two-column layouts
- **Chat** - Conversational UI patterns

#### Use Cases (Real-World Page Recreations)
1. **Equifax.com Homepage** (Featured) - Complete rebuild with nav, hero, pricing cards, offers, app promo, footer
2. **AT&T Garnishments** - Legal service page with data tables and search
3. **Employer's Edge** - Workforce solutions landing page

#### Features & Integrations
| Feature | Status | Details |
|---------|--------|---------|
| Aura AI Assistant | Complete | OpenAI-powered design system chatbot (gpt-4o-mini) |
| Developer Navigation | Complete | Top utility bar with icons, badges, account dropdown |
| File Ingestion | Complete | Vercel Blob storage for asset uploads |
| Pendo Analytics | Complete | User behavior tracking |
| Vercel Analytics | Complete | Performance and traffic analytics |
| Official Logos | Complete | 9 SVG logo treatments hosted locally |

---

## Project Structure (Actual)

```
signal3/
├── apps/
│   └── marketing/                    # Next.js 14 marketing site
│       ├── src/
│       │   ├── app/
│       │   │   ├── api/
│       │   │   │   ├── aura/         # Aura AI chatbot endpoint
│       │   │   │   └── ingest/       # File upload endpoint
│       │   │   ├── components/       # Component documentation pages
│       │   │   ├── foundations/      # Design foundations pages
│       │   │   ├── patterns/         # UI patterns & use cases
│       │   │   ├── getting-started/
│       │   │   ├── ingest/           # File upload UI
│       │   │   ├── layout.tsx        # Root layout with nav, footer, analytics
│       │   │   └── page.tsx          # Homepage
│       │   ├── components/
│       │   │   ├── docs/             # Documentation components
│       │   │   │   ├── ComponentPreview.tsx
│       │   │   │   ├── CodeBlock.tsx
│       │   │   │   ├── CopyButton.tsx
│       │   │   │   └── PropsTable.tsx
│       │   │   ├── home/             # Homepage sections
│       │   │   ├── layout/           # Navigation, Footer
│       │   │   └── Aura.tsx          # AI assistant widget
│       │   └── data/
│       │       └── aura-knowledge.md # Aura's knowledge base
│       └── public/
│           ├── logos/                # Official Equifax logos (9 SVGs)
│           └── images/
│               └── use-cases/        # Use case assets
│                   ├── employers-edge/
│                   └── equifax-homepage/
│
├── packages/
│   ├── signal3-core/                 # Core design tokens (scaffold)
│   ├── signal3-web/                  # Web components (scaffold)
│   ├── signal3-mobile/               # Mobile components (scaffold)
│   └── signal3-app/                  # Desktop components (scaffold)
│
└── docs/                             # Component documentation (scaffold)
```

---

## Technology Stack

| Layer | Technology | Version | Status |
|-------|------------|---------|--------|
| Monorepo | Turborepo | Latest | Active |
| Framework | Next.js | 14.2.35 | Active |
| Styling | Tailwind CSS | 3.x | Active |
| Icons | Lucide React | Latest | Active |
| AI | OpenAI API | gpt-4o-mini | Active |
| Analytics | Pendo | Latest | Active |
| Analytics | Vercel Analytics | 1.6.1 | Active |
| Storage | Vercel Blob | Latest | Active |
| Package Manager | pnpm | 8.x | Active |

---

## Environment Variables

Required for full functionality:

```bash
# Vercel Blob Storage (for file ingestion)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...

# OpenAI (for Aura AI assistant)
OPENAI_API_KEY=sk-...

# Vercel (auto-generated)
VERCEL_OIDC_TOKEN=...
```

---

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server (marketing site)
pnpm dev

# Build
pnpm build

# Deploy to Vercel (from signal3 root)
vercel --prod --yes
```

---

## Outstanding Items

### High Priority
1. **Component Package Development** - The `packages/signal3-web` directory is scaffolded but components are not yet extracted from the marketing site into reusable packages
2. **Figma Token Sync** - Figma API integration not yet implemented
3. **Storybook Setup** - Component development environment not configured
4. **Unit Tests** - No test coverage currently

### Medium Priority
1. **Dark Mode** - Theme switching documented but not implemented site-wide
2. **Search Functionality** - Search icon present but not functional
3. **Mobile Navigation** - Basic mobile menu exists but could be enhanced
4. **Component API Documentation** - Props tables are placeholder data

### Low Priority
1. **Resources Page** - `/resources` route not implemented
2. **About Page** - `/about` route not implemented
3. **Additional Components** - Modal, Dropdown, Table, Form components
4. **Internationalization** - French tagline logos available but no i18n

---

## Recommendations for Next Steps

### Phase 1: Component Extraction (Recommended Next)
1. Extract reusable components from `apps/marketing` into `packages/signal3-web`
2. Set up proper exports and TypeScript declarations
3. Create Storybook for component development and testing
4. Add unit tests with Vitest or Jest

### Phase 2: Design Token Pipeline
1. Connect to Figma using Tokens Studio plugin
2. Implement token transformation pipeline (Style Dictionary)
3. Generate CSS variables and Tailwind config from tokens
4. Set up CI/CD for automatic token sync

### Phase 3: Documentation Enhancement
1. Add real component API documentation (auto-generated from TypeScript)
2. Implement search with Algolia or similar
3. Add versioning for component documentation
4. Create contribution guidelines

### Phase 4: Production Readiness
1. Add comprehensive test coverage
2. Set up visual regression testing (Chromatic/Percy)
3. Implement proper error boundaries
4. Add performance monitoring

---

## Brand Assets

### Logo Files (in `/public/logos/`)
| File | Usage |
|------|-------|
| `EFXlogo_red.svg` | Primary logo for light backgrounds |
| `EFXlogo_white.svg` | Reversed logo for dark backgrounds |
| `ticker-red.svg` | Stock ticker for light backgrounds |
| `ticker-white.svg` | Stock ticker for dark backgrounds |
| `ticker-gray.svg` | Subtle ticker applications |
| `tagline-en-color-one-line.svg` | English tagline (horizontal) |
| `tagline-en-color-two-lines.svg` | English tagline (stacked) |
| `tagline-fr-color-one-line.svg` | French tagline (horizontal) |
| `tagline-fr-color-two-lines.svg` | French tagline (stacked) |

### Primary Colors (Implemented)
| Token | Value | Usage |
|-------|-------|-------|
| `primary-600` | `#9E1B32` | Equifax Red - primary actions |
| `blue-600` | `#007298` | Links, informational |
| `green-600` | `#45842A` | Success states |
| `orange-600` | `#E77204` | Warning states |
| `gray-500` | `#5B6771` | Text, borders |

---

## Contacts

- **Project Owner**: Rob Ramsay (rob.ramsay@equifax.com)
- **UX&A Team**: Manages Aura AI assistant and design system governance

---

## Deployment

The site is deployed on Vercel:
- **Production**: https://signal3-pi.vercel.app
- **Project**: squareinnov/signal3
- **Region**: Washington, D.C. (iad1)

Deploy from the `signal3` root directory:
```bash
cd /path/to/signal3
vercel --prod --yes
```

---

## Session Notes

### January 16, 2026
- Added Equifax.com homepage use case with full section rebuild
- Installed Pendo analytics (snippet in layout)
- Installed Vercel Analytics (@vercel/analytics)
- Added official Equifax logo SVGs to `/public/logos/`
- Created Logos foundation page with usage guidelines
- Added account dropdown to developer nav and component previews
- Fixed developer nav icon alignment and sizing
- Added Aura AI assistant with OpenAI integration
- Added Chat component with 3 interactive variants
- Added Navbar component with megamenu capabilities
- Built file ingestion system with Vercel Blob
- Created 3 use cases: AT&T Garnishments, Employers Edge, Equifax Homepage
