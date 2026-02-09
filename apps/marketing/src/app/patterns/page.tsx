import Link from 'next/link';
import { ArrowRight, Layout, CreditCard, Layers, SplitSquareHorizontal, Navigation, Building2, FileText, MessageCircle } from 'lucide-react';

const patterns = [
  {
    title: 'Global Navigation',
    description: 'Marketplace-style header, footer, and breadcrumb navigation components.',
    href: '/patterns/navigation',
    icon: Navigation,
    variants: ['Marketplace Header', 'Developer Portal', 'Footer', 'Breadcrumb'],
  },
  {
    title: 'Hero Sections',
    description: 'Full-width hero patterns with various button and image configurations for landing pages.',
    href: '/patterns/hero',
    icon: Layout,
    variants: ['Single CTA', 'Dual CTA', 'Image Left', 'Image Right', 'Centered'],
  },
  {
    title: 'Pricing Comparison',
    description: 'Product comparison tables with monthly/annual pricing toggle and feature lists.',
    href: '/patterns/pricing',
    icon: CreditCard,
    variants: ['3-Column', 'Highlighted Plan', 'With Toggle'],
  },
  {
    title: 'Full-Width Sections',
    description: 'Branded full-width sections with the Equifax dot pattern backgrounds.',
    href: '/patterns/sections',
    icon: Layers,
    variants: ['Light Background', 'Dark Background', 'Brand Background'],
  },
  {
    title: 'Split Content',
    description: 'Two-column layouts with text, CTAs, and images for feature highlights.',
    href: '/patterns/split-content',
    icon: SplitSquareHorizontal,
    variants: ['Text Left', 'Text Right', 'With Stats', 'With List'],
  },
  {
    title: 'Chat & Messaging',
    description: 'Interactive chat interfaces for support, AI assistants, and real-time messaging.',
    href: '/patterns/chat',
    icon: MessageCircle,
    variants: ['Support Widget', 'AI Assistant', 'Floating Chat', 'Embedded'],
  },
];

export default function PatternsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-marketing py-16">
          <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
            Patterns
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Marketing Page Patterns
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Pre-built, production-ready patterns for common marketing page layouts.
            Each pattern follows Equifax brand guidelines and is fully responsive.
          </p>
        </div>
      </div>

      <div className="container-marketing py-12">
        {/* Pattern Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {patterns.map((pattern) => (
            <Link
              key={pattern.title}
              href={pattern.href}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-primary-200 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <pattern.icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-primary-600" />
              </div>

              <h2 className="mt-6 text-xl font-semibold text-gray-900">
                {pattern.title}
              </h2>
              <p className="mt-2 text-gray-600">
                {pattern.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {pattern.variants.map((variant) => (
                  <span
                    key={variant}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {variant}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Use Cases Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Use Cases</h2>
              <p className="mt-2 text-gray-600">
                Complete page recreations demonstrating patterns in real-world scenarios.
              </p>
            </div>
            <Link
              href="/patterns/use-cases"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all use cases
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/patterns/use-cases/att-garnishments"
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Building2 className="h-8 w-8" />
              </div>
              <div className="mt-4 flex-1 sm:mt-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-gray-900">AT&T Garnishments Service</h3>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                    New
                  </span>
                </div>
                <p className="mt-2 text-gray-600">
                  A reference page for proper service of legal garnishments to AT&T entities through CT Corporation.
                  Features searchable data tables with filtering.
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <FileText className="h-3 w-3" />
                    Source: attgarnishments.com
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                    Legal
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                    Data Table
                  </span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                    Search
                  </span>
                </div>
              </div>
              <ArrowRight className="hidden h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600 sm:block" />
            </Link>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Using Patterns</h2>
          <p className="mt-2 text-gray-600">
            Patterns are compositions of components designed for specific use cases.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-2xl font-bold text-primary-600">1</div>
              <h3 className="mt-4 font-semibold text-gray-900">Choose a Pattern</h3>
              <p className="mt-2 text-sm text-gray-600">
                Browse the patterns and select one that fits your use case. Each pattern has multiple variants.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-2xl font-bold text-primary-600">2</div>
              <h3 className="mt-4 font-semibold text-gray-900">Copy the Code</h3>
              <p className="mt-2 text-sm text-gray-600">
                Each pattern includes copy-ready code. Just paste it into your project and customize the content.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-2xl font-bold text-primary-600">3</div>
              <h3 className="mt-4 font-semibold text-gray-900">Customize</h3>
              <p className="mt-2 text-sm text-gray-600">
                Update text, images, and colors using design tokens. All patterns use Signal3 components.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
