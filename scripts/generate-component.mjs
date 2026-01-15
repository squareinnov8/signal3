#!/usr/bin/env node

/**
 * Component Generator Script
 *
 * Scaffolds a new component with all necessary files:
 * - Component implementation
 * - Index export
 * - Storybook story
 * - Test file
 * - Documentation MDX
 *
 * Usage: pnpm generate:component Button
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Please provide a component name');
  console.log('Usage: pnpm generate:component ComponentName');
  process.exit(1);
}

const pascalCase = componentName.charAt(0).toUpperCase() + componentName.slice(1);
const kebabCase = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const templates = {
  component: `import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const ${pascalCase.toLowerCase()}Variants = cva(
  // Base styles
  '',
  {
    variants: {
      variant: {
        default: '',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ${pascalCase}Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ${pascalCase.toLowerCase()}Variants> {
  // Add custom props here
}

const ${pascalCase} = React.forwardRef<HTMLDivElement, ${pascalCase}Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(${pascalCase.toLowerCase()}Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

${pascalCase}.displayName = '${pascalCase}';

export { ${pascalCase}, ${pascalCase.toLowerCase()}Variants };
`,

  index: `export { ${pascalCase}, type ${pascalCase}Props } from './${pascalCase}';
`,

  story: `import type { Meta, StoryObj } from '@storybook/react';
import { ${pascalCase} } from './${pascalCase}';

const meta: Meta<typeof ${pascalCase}> = {
  title: 'Components/${pascalCase}',
  component: ${pascalCase},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '${pascalCase} content',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <${pascalCase} size="sm">Small</${pascalCase}>
      <${pascalCase} size="md">Medium</${pascalCase}>
      <${pascalCase} size="lg">Large</${pascalCase}>
    </div>
  ),
};
`,

  test: `import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ${pascalCase} } from './${pascalCase}';

describe('${pascalCase}', () => {
  it('renders correctly', () => {
    render(<${pascalCase}>Test content</${pascalCase}>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<${pascalCase} className="custom-class">Content</${pascalCase}>);
    expect(screen.getByText('Content')).toHaveClass('custom-class');
  });
});
`,

  docs: `---
title: ${pascalCase}
description: Description of the ${pascalCase} component
status: draft
package: signal3-web
---

import { ${pascalCase} } from '@signal3/web';

## Overview

Brief description of what the ${pascalCase} component does and when to use it.

## Usage

\`\`\`tsx
import { ${pascalCase} } from '@signal3/web';

export function Example() {
  return <${pascalCase}>Content</${pascalCase}>;
}
\`\`\`

## Variants

### Default

The default variant of the component.

## Sizes

The component supports multiple sizes: \`sm\`, \`md\`, and \`lg\`.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | \`'default'\` | \`'default'\` | Visual variant |
| size | \`'sm' \\| 'md' \\| 'lg'\` | \`'md'\` | Component size |
| className | \`string\` | - | Additional CSS classes |

## Accessibility

- Add accessibility notes here
- Keyboard navigation
- Screen reader support
`,
};

async function generateComponent() {
  console.log(`\n🧩 Generating component: ${pascalCase}\n`);

  const componentDir = path.join(rootDir, 'packages/signal3-web/src/components', pascalCase);
  const docsDir = path.join(rootDir, 'docs/components', kebabCase);

  try {
    // Create component directory
    await fs.mkdir(componentDir, { recursive: true });
    console.log(`📁 Created directory: packages/signal3-web/src/components/${pascalCase}/`);

    // Write component files
    await fs.writeFile(path.join(componentDir, `${pascalCase}.tsx`), templates.component);
    console.log(`✅ Created ${pascalCase}.tsx`);

    await fs.writeFile(path.join(componentDir, 'index.ts'), templates.index);
    console.log(`✅ Created index.ts`);

    await fs.writeFile(path.join(componentDir, `${pascalCase}.stories.tsx`), templates.story);
    console.log(`✅ Created ${pascalCase}.stories.tsx`);

    await fs.writeFile(path.join(componentDir, `${pascalCase}.test.tsx`), templates.test);
    console.log(`✅ Created ${pascalCase}.test.tsx`);

    // Create docs directory and file
    await fs.mkdir(docsDir, { recursive: true });
    await fs.writeFile(path.join(docsDir, 'index.mdx'), templates.docs);
    console.log(`✅ Created docs/components/${kebabCase}/index.mdx`);

    console.log(`\n🎉 Component ${pascalCase} generated successfully!`);
    console.log(`\nNext steps:`);
    console.log(`1. Update packages/signal3-web/src/index.ts to export the component`);
    console.log(`2. Implement the component styles and logic`);
    console.log(`3. Add Storybook stories for all variants`);
    console.log(`4. Write comprehensive documentation`);

  } catch (error) {
    console.error('❌ Error generating component:', error.message);
    process.exit(1);
  }
}

generateComponent();
