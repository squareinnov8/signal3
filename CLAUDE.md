# Signal3 - Equifax Design System

## Project Overview

**Signal3** is Equifax's next-generation design system and component library, establishing a unified brand identity and visual language across all digital products. This project encompasses both a marketing website and a comprehensive component documentation platform.

## Vision

Signal3 represents Equifax's commitment to design consistency, developer experience, and brand cohesion. The initiative provides:

- **Unified Brand Identity**: A cohesive visual style that strengthens Equifax's market presence
- **Developer Efficiency**: Reusable, well-documented components that accelerate product development
- **Design-to-Code Synchronization**: Figma-first workflow ensuring design changes propagate to production

---

## Architecture

### Project Structure

```
signal3/
├── apps/
│   └── marketing/              # Marketing website (Next.js)
│       ├── pages/
│       │   ├── index.tsx       # Landing/hero page
│       │   ├── about.tsx       # Signal3 story & philosophy
│       │   ├── components/     # Component library browser
│       │   └── docs/           # Documentation pages
│       └── components/
│
├── packages/
│   ├── signal3-core/           # Core design tokens & theming
│   │   ├── tokens/             # Design tokens (colors, spacing, typography)
│   │   ├── themes/             # Equifax theme configurations
│   │   └── figma-sync/         # Figma API integration for token sync
│   │
│   ├── signal3-web/            # Web component library
│   │   └── src/
│   │       ├── components/     # React components
│   │       └── styles/         # Component-specific styles
│   │
│   ├── signal3-mobile/         # Mobile component library (React Native)
│   │   └── src/
│   │       └── components/
│   │
│   └── signal3-app/            # Desktop/Electron app components
│       └── src/
│           └── components/
│
├── docs/                       # Component documentation content
│   └── components/
│       └── [component-name]/
│           ├── overview.mdx    # Purpose & use cases
│           ├── variations.mdx  # Configurable options
│           ├── examples.mdx    # Code snippets & demos
│           └── api.mdx         # Props/API reference
│
├── .figma/                     # Figma configuration & tokens export
│   ├── config.json             # Figma file/project IDs
│   └── tokens.json             # Exported design tokens
│
└── turbo.json                  # Turborepo configuration
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Monorepo** | Turborepo | Package management & build orchestration |
| **Framework** | Next.js 14+ | Marketing site & documentation |
| **UI Foundation** | Untitled UI | Base component library (themed) |
| **Styling** | Tailwind CSS | Utility-first styling with custom Equifax theme |
| **Documentation** | MDX | Rich component documentation |
| **Figma Sync** | Figma API + Tokens Studio | Design-to-code token synchronization |
| **Package Manager** | pnpm | Efficient workspace dependency management |

---

## Untitled UI Integration

### Theming Strategy

All components are built **exclusively** on Untitled UI, customized with Equifax branding:

```typescript
// Example: Equifax theme extension
const equifaxTheme = {
  colors: {
    primary: {
      25: '#F5F8FF',
      50: '#EFF4FF',
      100: '#D1E0FF',
      // ... Equifax brand colors
      700: '#1849A9',  // Equifax Primary Blue
      900: '#0C2B5E',
    },
    // Semantic colors mapped to Equifax palette
    brand: 'colors.primary.700',
    error: 'colors.red.600',
    success: 'colors.green.600',
  },
  typography: {
    fontFamily: {
      display: 'Equifax Sans, system-ui, sans-serif',
      body: 'Equifax Sans, system-ui, sans-serif',
    },
  },
  // ... spacing, radii, shadows
};
```

### Component Wrapping Pattern

```typescript
// packages/signal3-web/src/components/Button/Button.tsx
import { Button as UntitledButton } from '@untitled-ui/react';
import { useSignal3Theme } from '@signal3/core';

export const Button = ({ variant, size, children, ...props }) => {
  const theme = useSignal3Theme();

  return (
    <UntitledButton
      variant={variant}
      size={size}
      className={theme.components.button[variant]}
      {...props}
    >
      {children}
    </UntitledButton>
  );
};
```

---

## Figma Synchronization

### Workflow

1. **Design in Figma**: Designers update styles in Figma using Tokens Studio plugin
2. **Export Tokens**: Tokens are exported to `.figma/tokens.json`
3. **Transform**: Build script transforms tokens to CSS variables & Tailwind config
4. **Deploy**: Changes propagate through the component library

### Configuration

```json
// .figma/config.json
{
  "figmaFileId": "YOUR_FIGMA_FILE_ID",
  "tokensPath": ".figma/tokens.json",
  "outputPaths": {
    "css": "packages/signal3-core/tokens/variables.css",
    "tailwind": "packages/signal3-core/tokens/tailwind.config.js",
    "json": "packages/signal3-core/tokens/tokens.json"
  },
  "tokenSets": ["global", "equifax-light", "equifax-dark"]
}
```

### Sync Commands

```bash
# Pull latest tokens from Figma
pnpm figma:pull

# Transform tokens to platform formats
pnpm tokens:build

# Full sync (pull + build)
pnpm figma:sync
```

---

## Component Documentation Structure

Each component in the library must include comprehensive documentation:

### Required Documentation Files

```markdown
# docs/components/button/

## overview.mdx
- **Purpose**: What problem does this component solve?
- **When to Use**: Appropriate use cases
- **When NOT to Use**: Anti-patterns & alternatives
- **Accessibility**: WCAG compliance notes

## variations.mdx
- **Visual Variants**: primary, secondary, tertiary, destructive
- **Sizes**: xs, sm, md, lg, xl
- **States**: default, hover, active, disabled, loading
- **With Icons**: leading, trailing, icon-only

## examples.mdx
- Live, interactive code examples
- Copy-paste ready snippets
- Common implementation patterns

## api.mdx
- Full props table with types
- Event handlers
- Ref forwarding
- Slots/children patterns
```

### Documentation Template

```mdx
---
title: Button
description: Trigger actions and navigate between pages
status: stable
package: signal3-web
figmaLink: https://figma.com/...
---

import { Button } from '@signal3/web';
import { ComponentPreview, PropsTable } from '@/components/docs';

## Overview

Buttons communicate actions users can take. They are typically placed
throughout the UI, in places like dialogs, forms, cards, and toolbars.

<ComponentPreview>
  <Button variant="primary">Get Started</Button>
</ComponentPreview>

## Use Cases

- **Primary actions**: Form submissions, confirmations
- **Navigation**: Moving between views or pages
- **Destructive actions**: Deletions, cancellations (use destructive variant)

## Variants

### Visual Hierarchy

<ComponentPreview>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="tertiary">Tertiary</Button>
</ComponentPreview>

## Code

```tsx
import { Button } from '@signal3/web';

export function MyComponent() {
  return (
    <Button
      variant="primary"
      size="md"
      onClick={() => console.log('clicked')}
    >
      Click me
    </Button>
  );
}
```

## Props

<PropsTable component="Button" />
```

---

## Marketing Website Structure

### Pages

| Route | Purpose |
|-------|---------|
| `/` | Hero landing - Signal3 value proposition |
| `/about` | The Signal3 story, philosophy, and team |
| `/getting-started` | Quick start guide for developers |
| `/components` | Component library browser |
| `/components/[category]/[name]` | Individual component documentation |
| `/foundations` | Design tokens, colors, typography, spacing |
| `/patterns` | Common UI patterns & templates |
| `/resources` | Figma files, sketch assets, icon library |

### Marketing Content Themes

1. **Clarity**: Signal3 brings clarity to complex financial decisions
2. **Trust**: Built on Equifax's heritage of data integrity
3. **Innovation**: Modern, accessible, performant design
4. **Unity**: One design language across all platforms

---

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server (marketing site)
pnpm dev

# Build all packages
pnpm build

# Run component tests
pnpm test

# Lint & format
pnpm lint
pnpm format

# Figma token sync
pnpm figma:sync

# Generate new component scaffold
pnpm generate:component [name]

# Build documentation
pnpm docs:build

# Storybook (component development)
pnpm storybook
```

---

## Package Dependencies

### Core Dependencies

```json
{
  "dependencies": {
    "@untitled-ui/react": "^1.x",
    "next": "^14.x",
    "react": "^18.x",
    "tailwindcss": "^3.x",
    "framer-motion": "^10.x",
    "@mdx-js/react": "^3.x"
  },
  "devDependencies": {
    "turbo": "^1.x",
    "@figma/rest-api-spec": "^1.x",
    "token-transformer": "^0.x",
    "style-dictionary": "^3.x"
  }
}
```

---

## Equifax Brand Guidelines

### Primary Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand-primary` | `#1849A9` | Primary actions, links |
| `brand-secondary` | `#0C2B5E` | Headers, emphasis |
| `brand-accent` | `#E31837` | Alerts, highlights |

### Typography

| Token | Font | Usage |
|-------|------|-------|
| `font-display` | Equifax Sans Bold | Headlines, hero text |
| `font-body` | Equifax Sans Regular | Body copy, descriptions |
| `font-mono` | JetBrains Mono | Code snippets |

### Spacing Scale

Based on 4px base unit: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`

---

## Quality Standards

### Accessibility (WCAG 2.1 AA)

- All components must meet WCAG 2.1 AA standards
- Color contrast ratios: 4.5:1 for normal text, 3:1 for large text
- Keyboard navigation support required
- Screen reader compatibility tested

### Performance

- Core Web Vitals compliance
- Lazy loading for non-critical components
- Tree-shakeable exports
- < 50kb gzipped for core package

### Testing Requirements

- Unit tests for all component logic
- Visual regression tests via Chromatic/Percy
- Accessibility audits via axe-core
- Cross-browser testing (Chrome, Firefox, Safari, Edge)

---

## Contributing

### Adding a New Component

1. Run `pnpm generate:component ComponentName`
2. Implement component wrapping Untitled UI base
3. Add comprehensive documentation in `/docs/components/`
4. Write unit and accessibility tests
5. Add Storybook stories for all variants
6. Submit PR with component preview screenshots

### Updating Design Tokens

1. Update tokens in Figma via Tokens Studio
2. Run `pnpm figma:sync` to pull and transform
3. Verify changes in Storybook
4. Commit updated token files

---

## Resources

- **Figma Library**: [Link to Figma project]
- **Untitled UI Docs**: https://www.untitledui.com/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **MDX**: https://mdxjs.com/

---

## Contacts

- **Design Lead**: [Name]
- **Engineering Lead**: [Name]
- **Product Owner**: [Name]
