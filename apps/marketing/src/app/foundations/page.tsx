'use client';

import Link from 'next/link';
import { Palette, Type, Maximize, Layers, Grid3X3, Eye, FileText, Sparkles, Image } from 'lucide-react';
import NextImage from 'next/image';

const foundations = [
  {
    icon: Palette,
    name: 'Colors',
    description: 'Equifax brand colors, semantic colors, and color scales',
    href: '/foundations/colors',
  },
  {
    icon: Type,
    name: 'Typography',
    description: 'Open Sans typeface, sizes, weights, and text styles',
    href: '/foundations/typography',
  },
  {
    icon: Eye,
    name: 'Accessibility',
    description: 'WCAG 2.1 AA compliance guidelines and best practices',
    href: '/foundations/accessibility',
  },
  {
    icon: FileText,
    name: 'Content Style',
    description: 'Voice, tone, and writing guidelines',
    href: '/foundations/content',
  },
  {
    icon: Maximize,
    name: 'Spacing',
    description: 'Consistent spacing scale for margins and padding',
    href: '/foundations/spacing',
    comingSoon: true,
  },
  {
    icon: Layers,
    name: 'Shadows',
    description: 'Elevation and depth with shadow tokens',
    href: '/foundations/shadows',
    comingSoon: true,
  },
  {
    icon: Grid3X3,
    name: 'Border Radius',
    description: 'Consistent rounding for UI elements',
    href: '/foundations/radii',
    comingSoon: true,
  },
  {
    icon: Image,
    name: 'Logos',
    description: 'Official Equifax logo treatments and usage guidelines',
    href: '/foundations/logos',
  },
  {
    icon: Sparkles,
    name: 'Design Tokens',
    description: 'Browse all design tokens',
    href: '/foundations/tokens',
  },
];

// Color preview data - Equifax brand colors
const colorPreview = {
  primary: ['#FEF5F6', '#FDF2F4', '#FCE4E8', '#F9C8D0', '#F4A1AE', '#EC7085', '#D84560', '#9E1B32', '#8A1729', '#6E1221', '#520D18', '#3A0911'],
  gray: ['#FCFCFD', '#F9FAFB', '#F2F4F6', '#E7E7E7', '#D0D4D8', '#A3AAAD', '#5B6771', '#4A545D', '#3A424A', '#2A3037', '#1A1E24', '#0D0F11'],
};

export default function FoundationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-marketing py-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Foundations
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Design tokens form the foundation of Signal3. These atomic values
            ensure consistency across all components and platforms.
          </p>
        </div>
      </div>

      {/* Foundation Cards */}
      <div className="container-marketing py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foundations.map((foundation) => (
            <Link
              key={foundation.name}
              href={foundation.href}
              className={`group relative rounded-xl border bg-white p-6 transition-all hover:shadow-md ${
                foundation.comingSoon
                  ? 'border-gray-100 opacity-60 cursor-not-allowed'
                  : 'border-gray-200 hover:border-primary-200'
              }`}
              onClick={foundation.comingSoon ? (e) => e.preventDefault() : undefined}
            >
              {foundation.comingSoon && (
                <span className="absolute right-4 top-4 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">
                  Coming Soon
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <foundation.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-primary-600">
                {foundation.name}
              </h3>
              <p className="mt-2 text-gray-600">{foundation.description}</p>
            </Link>
          ))}
        </div>

        {/* Color Preview */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Equifax Color System</h2>
          <p className="mt-2 text-gray-600">
            The official Equifax color palette built for accessibility and brand consistency.
          </p>

          <div className="mt-8 space-y-8">
            {/* Primary - Equifax Red */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Equifax Red (Primary)</h3>
              <div className="mt-3 flex overflow-hidden rounded-lg">
                {colorPreview.primary.map((color, i) => (
                  <div
                    key={i}
                    className="h-12 flex-1"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>25</span>
                <span>950</span>
              </div>
            </div>

            {/* Gray */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Gray</h3>
              <div className="mt-3 flex overflow-hidden rounded-lg">
                {colorPreview.gray.map((color, i) => (
                  <div
                    key={i}
                    className="h-12 flex-1"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>25</span>
                <span>950</span>
              </div>
            </div>
          </div>

          <Link
            href="/foundations/colors"
            className="mt-6 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            View all colors →
          </Link>
        </section>

        {/* Typography Preview */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Typography Scale</h2>
          <p className="mt-2 text-gray-600">
            A harmonious type scale for clear hierarchy and readability.
          </p>

          <div className="mt-8 space-y-4 rounded-xl border border-gray-200 bg-white p-8">
            <div className="flex items-baseline gap-4">
              <span className="w-20 shrink-0 text-xs text-gray-500">display-2xl</span>
              <span className="text-7xl font-semibold tracking-tight text-gray-900">Aa</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-20 shrink-0 text-xs text-gray-500">display-xl</span>
              <span className="text-6xl font-semibold tracking-tight text-gray-900">Aa</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-20 shrink-0 text-xs text-gray-500">display-lg</span>
              <span className="text-5xl font-semibold tracking-tight text-gray-900">Aa</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-20 shrink-0 text-xs text-gray-500">display-md</span>
              <span className="text-4xl font-semibold text-gray-900">Aa</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-20 shrink-0 text-xs text-gray-500">text-xl</span>
              <span className="text-xl text-gray-900">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-20 shrink-0 text-xs text-gray-500">text-md</span>
              <span className="text-base text-gray-900">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-20 shrink-0 text-xs text-gray-500">text-sm</span>
              <span className="text-sm text-gray-900">The quick brown fox jumps over the lazy dog.</span>
            </div>
          </div>

          <Link
            href="/foundations/typography"
            className="mt-6 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            View typography guide →
          </Link>
        </section>

        {/* Logos Preview */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Logo Treatments</h2>
          <p className="mt-2 text-gray-600">
            Official Equifax logo variations for different contexts and backgrounds.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Primary Logo - Red */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-gray-700">Primary Logo</h3>
              <p className="text-xs text-gray-500 mt-1">For light backgrounds</p>
              <div className="mt-4 flex h-24 items-center justify-center rounded-lg bg-gray-50 p-4">
                <NextImage
                  src="/logos/EFXlogo_red.svg"
                  alt="Equifax Logo Red"
                  width={180}
                  height={48}
                  className="h-auto w-auto max-h-12"
                />
              </div>
            </div>

            {/* White Logo */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-gray-700">Reversed Logo</h3>
              <p className="text-xs text-gray-500 mt-1">For dark backgrounds</p>
              <div className="mt-4 flex h-24 items-center justify-center rounded-lg bg-gray-900 p-4">
                <NextImage
                  src="/logos/EFXlogo_white.svg"
                  alt="Equifax Logo White"
                  width={180}
                  height={48}
                  className="h-auto w-auto max-h-12"
                />
              </div>
            </div>

            {/* Ticker Variants */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-gray-700">Ticker Symbol</h3>
              <p className="text-xs text-gray-500 mt-1">Stock ticker variations</p>
              <div className="mt-4 space-y-3">
                <div className="flex h-12 items-center justify-center rounded-lg bg-gray-50 p-2">
                  <NextImage
                    src="/logos/ticker-red.svg"
                    alt="Equifax Ticker Red"
                    width={60}
                    height={24}
                    className="h-auto w-auto max-h-6"
                  />
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-gray-900 p-2">
                  <NextImage
                    src="/logos/ticker-white.svg"
                    alt="Equifax Ticker White"
                    width={60}
                    height={24}
                    className="h-auto w-auto max-h-6"
                  />
                </div>
              </div>
            </div>

            {/* Tagline - English One Line */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 md:col-span-2 lg:col-span-3">
              <h3 className="text-sm font-semibold text-gray-700">Taglines</h3>
              <p className="text-xs text-gray-500 mt-1">Logo with tagline - English and French</p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="flex h-20 items-center justify-center rounded-lg bg-gray-50 p-4">
                  <NextImage
                    src="/logos/tagline-en-color-one-line.svg"
                    alt="Equifax Tagline English One Line"
                    width={320}
                    height={48}
                    className="h-auto w-auto max-h-10"
                  />
                </div>
                <div className="flex h-20 items-center justify-center rounded-lg bg-gray-50 p-4">
                  <NextImage
                    src="/logos/tagline-fr-color-one-line.svg"
                    alt="Equifax Tagline French One Line"
                    width={320}
                    height={48}
                    className="h-auto w-auto max-h-10"
                  />
                </div>
                <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 p-4">
                  <NextImage
                    src="/logos/tagline-en-color-two-lines.svg"
                    alt="Equifax Tagline English Two Lines"
                    width={200}
                    height={64}
                    className="h-auto w-auto max-h-16"
                  />
                </div>
                <div className="flex h-24 items-center justify-center rounded-lg bg-gray-50 p-4">
                  <NextImage
                    src="/logos/tagline-fr-color-two-lines.svg"
                    alt="Equifax Tagline French Two Lines"
                    width={200}
                    height={64}
                    className="h-auto w-auto max-h-16"
                  />
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/foundations/logos"
            className="mt-6 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            View logo guidelines →
          </Link>
        </section>
      </div>
    </div>
  );
}
