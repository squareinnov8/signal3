'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

// Correct Equifax color palettes — hex values shown for reference, swatches rendered via CSS vars
const colorScales: Record<string, { label: string; base: string; shades: Record<string, string> }> = {
  primary: {
    label: 'Primary (Equifax Red)',
    base: '#9E1B32',
    shades: {
      25: '#FEF5F6', 50: '#FDF2F4', 100: '#FCE4E8', 200: '#F9C8D0',
      300: '#F4A1AE', 400: '#EC7085', 500: '#D84560', 600: '#9E1B32',
      700: '#8A1729', 800: '#6E1221', 900: '#520D18', 950: '#3A0911',
    },
  },
  blue: {
    label: 'Blue',
    base: '#007298',
    shades: {
      25: '#F0FAFD', 50: '#E5F6FB', 100: '#C7EDF7', 200: '#94DCEF',
      300: '#5CC5E3', 400: '#2AADD4', 500: '#0890B8', 600: '#007298',
      700: '#004D66', 800: '#003D52', 900: '#002D3D', 950: '#001E29',
    },
  },
  green: {
    label: 'Green (Success)',
    base: '#45842A',
    shades: {
      25: '#F5FBF3', 50: '#EDF8E9', 100: '#D9F0D1', 200: '#B5E1A6',
      300: '#8BCC76', 400: '#64B34D', 500: '#4A993A', 600: '#45842A',
      700: '#294D19', 800: '#223F15', 900: '#1A3010', 950: '#12210B',
    },
  },
  orange: {
    label: 'Orange (Warning)',
    base: '#E77204',
    shades: {
      25: '#FFFAF5', 50: '#FFF5EB', 100: '#FFEBD4', 200: '#FFD4A8',
      300: '#FFB871', 400: '#FF983A', 500: '#F5820F', 600: '#E77204',
      700: '#994A00', 800: '#7A3B00', 900: '#5C2C00', 950: '#3D1D00',
    },
  },
  yellow: {
    label: 'Yellow',
    base: '#F1C319',
    shades: {
      25: '#FFFDF5', 50: '#FFFBEB', 100: '#FFF5CC', 200: '#FFEC99',
      300: '#FFDF5C', 400: '#F7D033', 500: '#F1C319', 600: '#98700C',
      700: '#7A5909', 800: '#5C4307', 900: '#3D2D05', 950: '#291E03',
    },
  },
  purple: {
    label: 'Purple',
    base: '#652F6C',
    shades: {
      25: '#FAF5FB', 50: '#F6EDF7', 100: '#EDDAEF', 200: '#DBB5DF',
      300: '#C48BCA', 400: '#A95EB0', 500: '#873A90', 600: '#652F6C',
      700: '#431F47', 800: '#36193A', 900: '#28132B', 950: '#1B0D1D',
    },
  },
  gray: {
    label: 'Gray',
    base: '#5B6771',
    shades: {
      25: '#FCFCFD', 50: '#F9FAFB', 100: '#F2F4F6', 200: '#E7E7E7',
      300: '#D0D4D8', 400: '#A3AAAD', 500: '#5B6771', 600: '#4A545D',
      700: '#3A424A', 800: '#2A3037', 900: '#1A1E24', 950: '#0D0F11',
    },
  },
};

const semanticAliases = [
  { name: 'Success', key: 'success', mapsTo: 'green', description: 'Positive states, confirmations' },
  { name: 'Warning', key: 'warning', mapsTo: 'orange', description: 'Caution, attention required' },
  { name: 'Error', key: 'error', mapsTo: 'primary', description: 'Error states, destructive actions' },
];

const spacingTokens: Record<string, string> = {
  '0': '0', '0.5': '0.125rem', '1': '0.25rem', '1.5': '0.375rem',
  '2': '0.5rem', '2.5': '0.625rem', '3': '0.75rem', '4': '1rem',
  '5': '1.25rem', '6': '1.5rem', '8': '2rem', '10': '2.5rem',
  '12': '3rem', '16': '4rem', '20': '5rem', '24': '6rem',
  '32': '8rem', '40': '10rem', '48': '12rem', '64': '16rem',
};

const radiiTokens: Record<string, string> = {
  none: '0', xxs: '2px', xs: '4px', sm: '6px', md: '8px',
  lg: '10px', xl: '12px', '2xl': '16px', '3xl': '20px',
  '4xl': '24px', full: '9999px',
};

const shadowTokens: Record<string, string> = {
  xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
  sm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
  md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
  lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
  xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
  '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
  '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
};

const typographyTokens = {
  fontFamily: {
    display: 'Equifax Sans, system-ui, sans-serif',
    body: 'Equifax Sans, system-ui, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  fontSize: {
    xs: '0.75rem', sm: '0.875rem', md: '1rem', lg: '1.125rem',
    xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem',
    '5xl': '3rem', '6xl': '3.75rem', '7xl': '4.5rem',
  },
  fontWeight: {
    regular: '400', medium: '500', semibold: '600', bold: '700',
  },
};

function hexToChannels(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r} ${g} ${b}`;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={copy}
      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
      title={`Copy ${text}`}
    >
      {copied ? <Check className="h-3.5 w-3.5 text-green-600" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

function ColorSwatch({ scaleKey, scale }: { scaleKey: string; scale: typeof colorScales[string] }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <h3 className="text-sm font-semibold text-gray-900">{scale.label}</h3>
        <code className="text-xs text-gray-400">--color-{scaleKey}-*</code>
      </div>
      <div className="grid grid-cols-6 gap-2 sm:grid-cols-12">
        {Object.entries(scale.shades).map(([shade, hex]) => (
          <div key={shade} className="space-y-1.5">
            <div
              className="aspect-square rounded-lg ring-1 ring-inset ring-black/10"
              style={{ backgroundColor: `rgb(var(--color-${scaleKey}-${shade}))` }}
            />
            <div className="text-center">
              <p className="text-xs font-medium text-gray-700">{shade}</p>
              <div className="flex items-center justify-center gap-0.5">
                <p className="text-[10px] text-gray-500 font-mono">{hex}</p>
                <CopyButton text={`var(--color-${scaleKey}-${shade})`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TokensPage() {
  const [activeTab, setActiveTab] = useState<'colors' | 'spacing' | 'radii' | 'shadows' | 'typography'>('colors');

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container-marketing py-8">
          <h1 className="text-3xl font-bold text-gray-900">Design Tokens</h1>
          <p className="mt-2 text-gray-600">
            All the foundational values that power Signal3 components. Values are stored as CSS custom properties
            and consumed via Tailwind utility classes.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 sticky top-16 bg-white z-10">
        <div className="container-marketing">
          <nav className="flex gap-8 -mb-px">
            {(['colors', 'spacing', 'radii', 'shadows', 'typography'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-sm font-medium border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="container-marketing py-12">
        {/* Colors */}
        {activeTab === 'colors' && (
          <div className="space-y-12">
            {/* Primitive scales */}
            {Object.entries(colorScales).map(([key, scale]) => (
              <ColorSwatch key={key} scaleKey={key} scale={scale} />
            ))}

            {/* Semantic aliases */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Semantic Aliases</h3>
              <p className="text-sm text-gray-500">
                These map to primitive scales via CSS <code className="text-xs bg-gray-100 px-1 rounded">var()</code> references.
                Changing the base scale automatically updates the alias.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {semanticAliases.map((alias) => (
                  <div key={alias.key} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div
                      className="h-10 w-10 shrink-0 rounded-lg ring-1 ring-inset ring-black/10"
                      style={{ backgroundColor: `rgb(var(--color-${alias.key}-600))` }}
                    />
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900">{alias.name}</p>
                      <p className="text-xs text-gray-500">
                        <code>--color-{alias.key}-*</code> → <code>--color-{alias.mapsTo}-*</code>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Token format reference */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 space-y-4">
              <h3 className="text-sm font-semibold text-gray-900">Token Formats</h3>
              <p className="text-sm text-gray-500">
                Colors are stored as RGB channels for Tailwind opacity modifier support.
              </p>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">Format</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">Example</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">Usage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">CSS Variable</td>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700">
                          var(--color-primary-600)
                        </code>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">Raw CSS usage</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">RGB Channels</td>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700">
                          158 27 50
                        </code>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">Stored value (for Tailwind opacity)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Tailwind Class</td>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-blue-600">
                          bg-primary-600
                        </code>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">Utility class with opacity support</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">With Opacity</td>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-blue-600">
                          bg-primary-600/50
                        </code>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">Tailwind opacity modifier</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Semantic Token</td>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700">
                          var(--s3-bg-brand-solid)
                        </code>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">Semantic layer (theme-aware)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Spacing */}
        {activeTab === 'spacing' && (
          <div className="space-y-6">
            <p className="text-gray-600">Based on a 4px base unit. Use these values for consistent margins, padding, and gaps.</p>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">Token</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">CSS Variable</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">Value</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">Pixels</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">Preview</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {Object.entries(spacingTokens).map(([key, value]) => (
                    <tr key={key}>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                          spacing.{key}
                        </code>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <code className="font-mono text-xs text-gray-500">--spacing-{key}</code>
                          <CopyButton text={`var(--spacing-${key})`} />
                        </div>
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-gray-600">{value}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {value === '0' ? '0px' : `${parseFloat(value) * 16}px`}
                      </td>
                      <td className="px-4 py-3">
                        <div
                          className="h-4 rounded"
                          style={{
                            width: value === '0' ? '1px' : value,
                            backgroundColor: 'rgb(var(--color-primary-500))',
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Border Radius */}
        {activeTab === 'radii' && (
          <div className="space-y-6">
            <p className="text-gray-600">Consistent border radius values for UI elements.</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(radiiTokens).map(([key, value]) => (
                <div key={key} className="text-center space-y-3">
                  <div
                    className="mx-auto h-24 w-24 border-2"
                    style={{
                      borderRadius: value,
                      backgroundColor: 'rgb(var(--color-primary-100))',
                      borderColor: 'rgb(var(--color-primary-500))',
                    }}
                  />
                  <div>
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                      {key}
                    </code>
                    <p className="mt-1 text-sm text-gray-500">{value}</p>
                    <div className="flex items-center justify-center">
                      <CopyButton text={`var(--radius-${key})`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shadows */}
        {activeTab === 'shadows' && (
          <div className="space-y-6">
            <p className="text-gray-600">Elevation levels for depth and hierarchy.</p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(shadowTokens).map(([key, value]) => (
                <div key={key} className="space-y-3">
                  <div
                    className="h-32 rounded-xl bg-white border border-gray-100"
                    style={{ boxShadow: value }}
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                        shadow-{key}
                      </code>
                      <CopyButton text={`var(--shadow-${key})`} />
                    </div>
                    <p className="mt-1 text-xs text-gray-500 font-mono break-all">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Typography */}
        {activeTab === 'typography' && (
          <div className="space-y-12">
            {/* Font Families */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Font Families</h3>
              <div className="space-y-4">
                {Object.entries(typographyTokens.fontFamily).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                          font-{key}
                        </code>
                        <code className="text-xs text-gray-400">--font-{key}</code>
                      </div>
                      <p className="mt-2 text-2xl" style={{ fontFamily: value }}>
                        The quick brown fox jumps over the lazy dog
                      </p>
                    </div>
                    <CopyButton text={`var(--font-${key})`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Font Sizes */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Font Sizes</h3>
              <div className="space-y-4">
                {Object.entries(typographyTokens.fontSize).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 shrink-0 w-40">
                      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                        text-{key}
                      </code>
                      <CopyButton text={`var(--text-${key})`} />
                    </div>
                    <span className="shrink-0 w-20 text-sm text-gray-500">{value}</span>
                    <span style={{ fontSize: value }} className="text-gray-900 truncate">
                      Signal3 Design System
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Font Weights */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Font Weights</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(typographyTokens.fontWeight).map(([key, value]) => (
                  <div key={key} className="p-4 rounded-lg border border-gray-200 text-center">
                    <p className="text-2xl text-gray-900" style={{ fontWeight: value }}>
                      Aa
                    </p>
                    <code className="mt-2 inline-block rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                      {key}
                    </code>
                    <p className="mt-1 text-sm text-gray-500">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
