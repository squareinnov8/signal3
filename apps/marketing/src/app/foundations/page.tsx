'use client';

import Link from 'next/link';
import { Palette, Type, Maximize, Moon, Layers, Grid3X3 } from 'lucide-react';

const foundations = [
  {
    icon: Palette,
    name: 'Colors',
    description: 'Brand colors, semantic colors, and color scales',
    href: '/foundations/colors',
  },
  {
    icon: Type,
    name: 'Typography',
    description: 'Font families, sizes, weights, and text styles',
    href: '/foundations/typography',
  },
  {
    icon: Maximize,
    name: 'Spacing',
    description: 'Consistent spacing scale for margins and padding',
    href: '/foundations/spacing',
  },
  {
    icon: Layers,
    name: 'Shadows',
    description: 'Elevation and depth with shadow tokens',
    href: '/foundations/shadows',
  },
  {
    icon: Grid3X3,
    name: 'Border Radius',
    description: 'Consistent rounding for UI elements',
    href: '/foundations/radii',
  },
  {
    icon: Moon,
    name: 'Dark Mode',
    description: 'Coming soon - Dark theme tokens',
    href: '/foundations/dark-mode',
    comingSoon: true,
  },
];

// Color preview data
const colorPreview = {
  primary: ['#F5F8FF', '#EFF4FF', '#D1E0FF', '#B2CCFF', '#84ADFF', '#528BFF', '#2970FF', '#1849A9', '#155EEF', '#0C2B5E', '#0A1D3D', '#051024'],
  gray: ['#FCFCFD', '#F9FAFB', '#F2F4F7', '#EAECF0', '#D0D5DD', '#98A2B3', '#667085', '#475467', '#344054', '#182230', '#101828', '#0C111D'],
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
          <h2 className="text-2xl font-bold text-gray-900">Color System</h2>
          <p className="mt-2 text-gray-600">
            A comprehensive color palette built for accessibility and brand consistency.
          </p>

          <div className="mt-8 space-y-8">
            {/* Primary */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Primary</h3>
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
      </div>
    </div>
  );
}
