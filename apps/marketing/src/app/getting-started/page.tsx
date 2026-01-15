import Link from 'next/link';
import { ArrowRight, Terminal, Palette, BookOpen, Layers } from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';

const steps = [
  {
    step: 1,
    title: 'Install Signal3',
    description: 'Add the core and web packages to your project.',
    code: `# Using pnpm (recommended)
pnpm add @signal3/core @signal3/web

# Using npm
npm install @signal3/core @signal3/web

# Using yarn
yarn add @signal3/core @signal3/web`,
  },
  {
    step: 2,
    title: 'Configure Tailwind',
    description: 'Extend your Tailwind config with Signal3 design tokens.',
    code: `// tailwind.config.js
const { colors, spacing } = require('@signal3/core/tokens');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@signal3/web/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};`,
  },
  {
    step: 3,
    title: 'Import styles',
    description: 'Add the base CSS to your application.',
    code: `// app/layout.tsx or _app.tsx
import '@signal3/web/styles.css';

// Or import individual token CSS
import '@signal3/core/css';`,
  },
  {
    step: 4,
    title: 'Use components',
    description: 'Import and use Signal3 components in your app.',
    code: `import { Button, Card, Input } from '@signal3/web';

export function MyComponent() {
  return (
    <Card>
      <Input
        label="Email"
        placeholder="you@example.com"
      />
      <Button variant="primary">
        Get Started
      </Button>
    </Card>
  );
}`,
  },
];

const quickLinks = [
  {
    icon: Layers,
    title: 'Component Library',
    description: 'Browse all available components with live examples.',
    href: '/components',
  },
  {
    icon: Palette,
    title: 'Design Tokens',
    description: 'Colors, typography, spacing, and more.',
    href: '/foundations',
  },
  {
    icon: BookOpen,
    title: 'API Reference',
    description: 'Detailed props and configuration options.',
    href: '/docs/api',
  },
];

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-marketing py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Getting Started
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Get up and running with Signal3 in minutes. Follow these steps to
              add beautiful, accessible components to your project.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container-marketing py-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-primary-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <link.icon className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                    {link.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="container-marketing py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Installation</h2>
          <p className="mt-2 text-gray-600">
            Follow these steps to add Signal3 to your React project.
          </p>

          <div className="mt-12 space-y-12">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                {/* Step number */}
                <div className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">
                  {step.step}
                </div>

                <div className="ml-4 border-l-2 border-gray-200 pl-8 pb-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{step.description}</p>
                  <div className="mt-4">
                    <CodeBlock code={step.code} language="bash" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Framework Guides */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container-marketing py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900">Framework Guides</h2>
            <p className="mt-2 text-gray-600">
              Detailed setup instructions for popular frameworks.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { name: 'Next.js', href: '/docs/frameworks/nextjs' },
                { name: 'Vite', href: '/docs/frameworks/vite' },
                { name: 'Create React App', href: '/docs/frameworks/cra' },
                { name: 'Remix', href: '/docs/frameworks/remix' },
              ].map((framework) => (
                <Link
                  key={framework.name}
                  href={framework.href}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 transition-all hover:border-primary-200 hover:shadow-sm"
                >
                  <span className="font-medium">{framework.name}</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Need Help */}
      <div className="border-t border-gray-200">
        <div className="container-marketing py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-gray-900">Need help?</h2>
            <p className="mt-2 text-gray-600">
              Can&apos;t find what you&apos;re looking for? Reach out to the team.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <BookOpen className="h-4 w-4" />
                Read the docs
              </Link>
              <Link
                href="https://github.com/equifax/signal3/issues"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Terminal className="h-4 w-4" />
                Report an issue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
