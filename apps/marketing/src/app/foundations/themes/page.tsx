'use client';

import { useState } from 'react';
import { Check, Moon, Sun, Circle, Square, Eye } from 'lucide-react';

// Theme definitions using correct Equifax brand colors
// Previews render via CSS variables where possible, with overrides for theme-specific values
const themes = {
  'equifax-light': {
    name: 'equifax-light',
    displayName: 'Equifax Light',
    description: 'The default light theme with Equifax brand colors',
    icon: Sun,
    colors: {
      brand: { cssVar: '--color-primary-600', label: 'Primary 600' },
      bgPrimary: { cssVar: '--color-white', label: 'White' },
      bgSecondary: { cssVar: '--color-gray-50', label: 'Gray 50' },
      textPrimary: { cssVar: '--color-gray-900', label: 'Gray 900' },
    },
    borderRadius: '10px',
  },
  'equifax-dark': {
    name: 'equifax-dark',
    displayName: 'Equifax Dark',
    description: 'Dark theme for low-light environments',
    icon: Moon,
    colors: {
      brand: { cssVar: '--color-primary-400', label: 'Primary 400' },
      bgPrimary: { cssVar: '--color-gray-900', label: 'Gray 900' },
      bgSecondary: { cssVar: '--color-gray-800', label: 'Gray 800' },
      textPrimary: { cssVar: '--color-gray-50', label: 'Gray 50' },
    },
    borderRadius: '10px',
  },
  'equifax-rounded': {
    name: 'equifax-rounded',
    displayName: 'Equifax Rounded',
    description: 'Friendly, approachable with pill-shaped elements',
    icon: Circle,
    colors: {
      brand: { cssVar: '--color-primary-600', label: 'Primary 600' },
      bgPrimary: { cssVar: '--color-white', label: 'White' },
      bgSecondary: { cssVar: '--color-gray-50', label: 'Gray 50' },
      textPrimary: { cssVar: '--color-gray-900', label: 'Gray 900' },
    },
    borderRadius: '9999px',
  },
  'equifax-sharp': {
    name: 'equifax-sharp',
    displayName: 'Equifax Sharp',
    description: 'Corporate, professional with minimal rounding',
    icon: Square,
    colors: {
      brand: { cssVar: '--color-primary-600', label: 'Primary 600' },
      bgPrimary: { cssVar: '--color-white', label: 'White' },
      bgSecondary: { cssVar: '--color-gray-50', label: 'Gray 50' },
      textPrimary: { cssVar: '--color-gray-900', label: 'Gray 900' },
    },
    borderRadius: '6px',
  },
  'equifax-high-contrast': {
    name: 'equifax-high-contrast',
    displayName: 'High Contrast',
    description: 'Enhanced contrast for accessibility',
    icon: Eye,
    colors: {
      brand: { cssVar: '--color-primary-800', label: 'Primary 800' },
      bgPrimary: { cssVar: '--color-white', label: 'White' },
      bgSecondary: { cssVar: '--color-gray-100', label: 'Gray 100' },
      textPrimary: { cssVar: '--color-black', label: 'Black' },
    },
    borderRadius: '10px',
  },
};

type ThemeName = keyof typeof themes;

function ThemePreview({ themeName }: { themeName: ThemeName }) {
  const theme = themes[themeName];
  const c = theme.colors;

  return (
    <div
      className="p-6 rounded-xl border-2 transition-all"
      style={{
        backgroundColor: `rgb(var(${c.bgPrimary.cssVar}))`,
        borderColor: `rgb(var(${c.bgSecondary.cssVar}))`,
      }}
    >
      {/* Sample buttons */}
      <div className="flex flex-wrap gap-3 mb-4">
        <button
          className="px-4 py-2 text-sm font-semibold text-white"
          style={{
            backgroundColor: `rgb(var(${c.brand.cssVar}))`,
            borderRadius: theme.borderRadius,
          }}
        >
          Primary
        </button>
        <button
          className="px-4 py-2 text-sm font-semibold border"
          style={{
            backgroundColor: `rgb(var(${c.bgPrimary.cssVar}))`,
            color: `rgb(var(${c.textPrimary.cssVar}))`,
            borderColor: `rgb(var(${c.bgSecondary.cssVar}))`,
            borderRadius: theme.borderRadius,
          }}
        >
          Secondary
        </button>
      </div>

      {/* Sample input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Sample input..."
          className="w-full px-3 py-2 text-sm border"
          style={{
            backgroundColor: `rgb(var(${c.bgPrimary.cssVar}))`,
            color: `rgb(var(${c.textPrimary.cssVar}))`,
            borderColor: `rgb(var(${c.bgSecondary.cssVar}))`,
            borderRadius: theme.borderRadius,
          }}
        />
      </div>

      {/* Sample card */}
      <div
        className="p-4 border"
        style={{
          backgroundColor: `rgb(var(${c.bgSecondary.cssVar}))`,
          borderColor: `rgb(var(${c.bgSecondary.cssVar}))`,
          borderRadius: theme.borderRadius,
        }}
      >
        <p
          className="text-sm font-medium"
          style={{ color: `rgb(var(${c.textPrimary.cssVar}))` }}
        >
          Card Title
        </p>
        <p className="text-xs mt-1" style={{ color: `rgb(var(${c.textPrimary.cssVar}) / 0.7)` }}>
          Sample card content
        </p>
      </div>

      {/* Sample badges */}
      <div className="flex gap-2 mt-4">
        <span
          className="px-2 py-0.5 text-xs font-medium text-white"
          style={{
            backgroundColor: `rgb(var(${c.brand.cssVar}))`,
            borderRadius: theme.borderRadius,
          }}
        >
          Badge
        </span>
        <span
          className="px-2 py-0.5 text-xs font-medium"
          style={{
            backgroundColor: `rgb(var(--color-success-50))`,
            color: `rgb(var(--color-success-700))`,
            borderRadius: theme.borderRadius,
          }}
        >
          Success
        </span>
      </div>
    </div>
  );
}

export default function ThemesPage() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>('equifax-light');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white">
        <div className="container-marketing py-8">
          <h1 className="text-3xl font-bold text-gray-900">Themes & Subthemes</h1>
          <p className="mt-2 text-gray-600">
            Signal3 supports multiple themes and subthemes for different contexts, products, and accessibility needs.
            All themes are built on CSS custom properties, so switching themes only requires remapping token values.
          </p>
        </div>
      </div>

      <div className="container-marketing py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Theme Selector */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Themes</h2>
            <div className="space-y-3">
              {(Object.entries(themes) as [ThemeName, typeof themes[ThemeName]][]).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => setSelectedTheme(key)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                    selectedTheme === key
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      selectedTheme === key ? 'bg-primary-100' : 'bg-gray-100'
                    }`}
                  >
                    <theme.icon
                      className={`h-5 w-5 ${
                        selectedTheme === key ? 'text-primary-600' : 'text-gray-500'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{theme.displayName}</span>
                      {selectedTheme === key && (
                        <Check className="h-4 w-4 text-primary-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{theme.description}</p>
                  </div>
                  {/* Color preview dots — rendered via CSS vars */}
                  <div className="flex gap-1">
                    <div
                      className="h-4 w-4 rounded-full ring-1 ring-black/10"
                      style={{ backgroundColor: `rgb(var(${theme.colors.brand.cssVar}))` }}
                    />
                    <div
                      className="h-4 w-4 rounded-full ring-1 ring-black/10"
                      style={{ backgroundColor: `rgb(var(${theme.colors.bgPrimary.cssVar}))` }}
                    />
                    <div
                      className="h-4 w-4 rounded-full ring-1 ring-black/10"
                      style={{ backgroundColor: `rgb(var(${theme.colors.bgSecondary.cssVar}))` }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Preview</h2>
            <ThemePreview themeName={selectedTheme} />

            {/* Token mapping table */}
            <div className="mt-6 rounded-xl border border-gray-200 bg-white">
              <div className="px-4 py-3 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-700">Token Mapping</h3>
              </div>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {Object.entries(themes[selectedTheme].colors).map(([role, token]) => (
                    <tr key={role}>
                      <td className="px-4 py-2 text-gray-500">{role}</td>
                      <td className="px-4 py-2">
                        <code className="text-xs text-gray-700">{token.cssVar}</code>
                      </td>
                      <td className="px-4 py-2">
                        <div
                          className="h-5 w-5 rounded ring-1 ring-black/10"
                          style={{ backgroundColor: `rgb(var(${token.cssVar}))` }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Usage code */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Usage</h3>
              <div className="rounded-lg bg-gray-900 p-4 text-sm">
                <pre className="text-gray-100 overflow-x-auto">
                  <code>{`import { themes } from '@signal3/core';

// Use a preset theme
const theme = themes['${selectedTheme}'];

// Or create a custom subtheme
import { createSubtheme, equifaxLight } from '@signal3/core';

const customTheme = createSubtheme(equifaxLight, {
  name: 'my-product-theme',
  colors: {
    brand: '--color-blue-600', // Override brand token
  },
  components: {
    button: {
      borderRadius: '999px', // Pill buttons
    },
  },
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Creating Custom Themes */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Creating Custom Subthemes</h2>
          <p className="mt-2 text-gray-600">
            You can create custom subthemes for specific products, brands, or use cases by extending a base theme.
            All themes are powered by CSS custom properties, so switching only requires remapping token values.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Product-specific themes</h3>
              <p className="mt-2 text-sm text-gray-600">
                Create unique themes for different Equifax products while maintaining brand consistency.
              </p>
              <pre className="mt-4 rounded-lg bg-gray-50 p-3 text-xs overflow-x-auto">
                <code className="text-gray-700">{`const creditKarmaTheme = createSubtheme(equifaxLight, {
  name: 'credit-karma',
  colors: {
    brand: '--color-green-600', // CK green
  },
});`}</code>
              </pre>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Accessibility themes</h3>
              <p className="mt-2 text-sm text-gray-600">
                Provide high-contrast or other accessibility-focused variants.
              </p>
              <pre className="mt-4 rounded-lg bg-gray-50 p-3 text-xs overflow-x-auto">
                <code className="text-gray-700">{`const accessibleTheme = createSubtheme(equifaxLight, {
  name: 'accessible',
  colors: {
    textPrimary: '--color-black',
    brand: '--color-primary-800', // Darker for contrast
  },
});`}</code>
              </pre>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Partner co-branding</h3>
              <p className="mt-2 text-sm text-gray-600">
                Create white-label themes for partner integrations.
              </p>
              <pre className="mt-4 rounded-lg bg-gray-50 p-3 text-xs overflow-x-auto">
                <code className="text-gray-700">{`const partnerTheme = createSubtheme(equifaxLight, {
  name: 'partner-acme',
  colors: {
    brand: '--color-purple-600', // Partner brand
  },
  typography: {
    fontFamily: {
      ...fontFamilies,
      display: 'Partner Font, sans-serif',
    },
  },
});`}</code>
              </pre>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Component overrides</h3>
              <p className="mt-2 text-sm text-gray-600">
                Customize specific component styles for different contexts.
              </p>
              <pre className="mt-4 rounded-lg bg-gray-50 p-3 text-xs overflow-x-auto">
                <code className="text-gray-700">{`const compactTheme = createSubtheme(equifaxLight, {
  name: 'compact',
  components: {
    button: { borderRadius: '4px' },
    input: { borderRadius: '4px' },
    card: { borderRadius: '8px' },
  },
});`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* How Theming Works */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">How Theming Works</h2>
          <p className="mt-2 text-gray-600">
            Signal3 uses a three-layer token architecture for maximum flexibility.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                <span className="text-primary-600 font-bold text-sm">1</span>
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">Primitive Tokens</h3>
              <p className="mt-2 text-sm text-gray-600">
                Raw color values stored as RGB channels in CSS variables. These never change between themes.
              </p>
              <code className="mt-3 block text-xs text-gray-500 bg-gray-50 rounded p-2">
                --color-primary-600: 158 27 50;
              </code>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                <span className="text-primary-600 font-bold text-sm">2</span>
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">Semantic Tokens</h3>
              <p className="mt-2 text-sm text-gray-600">
                Purpose-based tokens that reference primitives. These are remapped when switching themes.
              </p>
              <code className="mt-3 block text-xs text-gray-500 bg-gray-50 rounded p-2">
                --s3-text-primary: rgb(var(--color-gray-900));
              </code>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                <span className="text-primary-600 font-bold text-sm">3</span>
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">Tailwind Utilities</h3>
              <p className="mt-2 text-sm text-gray-600">
                Tailwind classes consume the CSS variables, giving you theme-aware utility classes with opacity support.
              </p>
              <code className="mt-3 block text-xs text-blue-600 bg-gray-50 rounded p-2">
                className=&quot;bg-primary-600/50&quot;
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
