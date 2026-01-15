'use client';

import { useState } from 'react';
import { Check, Moon, Sun, Circle, Square, Eye } from 'lucide-react';

// Theme definitions (mirroring what's in @signal3/core)
const themes = {
  'equifax-light': {
    name: 'equifax-light',
    displayName: 'Equifax Light',
    description: 'The default light theme with Equifax brand colors',
    icon: Sun,
    colors: {
      brand: '#1849A9',
      bgPrimary: '#FFFFFF',
      bgSecondary: '#F9FAFB',
      textPrimary: '#101828',
    },
    borderRadius: '10px',
  },
  'equifax-dark': {
    name: 'equifax-dark',
    displayName: 'Equifax Dark',
    description: 'Dark theme for low-light environments',
    icon: Moon,
    colors: {
      brand: '#528BFF',
      bgPrimary: '#101828',
      bgSecondary: '#182230',
      textPrimary: '#F9FAFB',
    },
    borderRadius: '10px',
  },
  'equifax-rounded': {
    name: 'equifax-rounded',
    displayName: 'Equifax Rounded',
    description: 'Friendly, approachable with pill-shaped elements',
    icon: Circle,
    colors: {
      brand: '#1849A9',
      bgPrimary: '#FFFFFF',
      bgSecondary: '#F9FAFB',
      textPrimary: '#101828',
    },
    borderRadius: '9999px',
  },
  'equifax-sharp': {
    name: 'equifax-sharp',
    displayName: 'Equifax Sharp',
    description: 'Corporate, professional with minimal rounding',
    icon: Square,
    colors: {
      brand: '#1849A9',
      bgPrimary: '#FFFFFF',
      bgSecondary: '#F9FAFB',
      textPrimary: '#101828',
    },
    borderRadius: '6px',
  },
  'equifax-high-contrast': {
    name: 'equifax-high-contrast',
    displayName: 'High Contrast',
    description: 'Enhanced contrast for accessibility',
    icon: Eye,
    colors: {
      brand: '#0C2B5E',
      bgPrimary: '#FFFFFF',
      bgSecondary: '#F2F4F7',
      textPrimary: '#000000',
    },
    borderRadius: '10px',
  },
};

type ThemeName = keyof typeof themes;

function ThemePreview({ themeName }: { themeName: ThemeName }) {
  const theme = themes[themeName];

  return (
    <div
      className="p-6 rounded-xl border-2 transition-all"
      style={{
        backgroundColor: theme.colors.bgPrimary,
        borderColor: theme.colors.bgSecondary,
      }}
    >
      {/* Sample buttons */}
      <div className="flex flex-wrap gap-3 mb-4">
        <button
          className="px-4 py-2 text-sm font-semibold text-white"
          style={{
            backgroundColor: theme.colors.brand,
            borderRadius: theme.borderRadius,
          }}
        >
          Primary
        </button>
        <button
          className="px-4 py-2 text-sm font-semibold border"
          style={{
            backgroundColor: theme.colors.bgPrimary,
            color: theme.colors.textPrimary,
            borderColor: theme.colors.bgSecondary,
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
            backgroundColor: theme.colors.bgPrimary,
            color: theme.colors.textPrimary,
            borderColor: theme.colors.bgSecondary,
            borderRadius: theme.borderRadius,
          }}
        />
      </div>

      {/* Sample card */}
      <div
        className="p-4 border"
        style={{
          backgroundColor: theme.colors.bgSecondary,
          borderColor: theme.colors.bgSecondary,
          borderRadius: theme.borderRadius,
        }}
      >
        <p
          className="text-sm font-medium"
          style={{ color: theme.colors.textPrimary }}
        >
          Card Title
        </p>
        <p className="text-xs mt-1" style={{ color: theme.colors.textPrimary, opacity: 0.7 }}>
          Sample card content
        </p>
      </div>

      {/* Sample badges */}
      <div className="flex gap-2 mt-4">
        <span
          className="px-2 py-0.5 text-xs font-medium text-white"
          style={{
            backgroundColor: theme.colors.brand,
            borderRadius: theme.borderRadius,
          }}
        >
          Badge
        </span>
        <span
          className="px-2 py-0.5 text-xs font-medium"
          style={{
            backgroundColor: '#ECFDF3',
            color: '#067647',
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
                  {/* Color preview dots */}
                  <div className="flex gap-1">
                    <div
                      className="h-4 w-4 rounded-full ring-1 ring-black/10"
                      style={{ backgroundColor: theme.colors.brand }}
                    />
                    <div
                      className="h-4 w-4 rounded-full ring-1 ring-black/10"
                      style={{ backgroundColor: theme.colors.bgPrimary }}
                    />
                    <div
                      className="h-4 w-4 rounded-full ring-1 ring-black/10"
                      style={{ backgroundColor: theme.colors.bgSecondary }}
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
    brand: '#FF6B00', // Custom brand color
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
    brand: '#00A651', // CK green
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
    textPrimary: '#000000',
    brand: '#0C2B5E', // Darker for contrast
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
    brand: '#6366F1', // Partner brand
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
      </div>
    </div>
  );
}
