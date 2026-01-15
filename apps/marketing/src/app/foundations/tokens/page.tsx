'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

// Import tokens directly for display
const tokens = {
  colors: {
    primary: {
      25: '#F5F8FF',
      50: '#EFF4FF',
      100: '#D1E0FF',
      200: '#B2CCFF',
      300: '#84ADFF',
      400: '#528BFF',
      500: '#2970FF',
      600: '#1849A9',
      700: '#155EEF',
      800: '#0C2B5E',
      900: '#0A1D3D',
      950: '#051024',
    },
    secondary: {
      25: '#FFF5F6',
      50: '#FEF3F2',
      100: '#FEE4E2',
      200: '#FECDCA',
      300: '#FDA29B',
      400: '#F97066',
      500: '#F04438',
      600: '#E31837',
      700: '#B42318',
      800: '#912018',
      900: '#7A271A',
      950: '#55160C',
    },
    gray: {
      25: '#FCFCFD',
      50: '#F9FAFB',
      100: '#F2F4F7',
      200: '#EAECF0',
      300: '#D0D5DD',
      400: '#98A2B3',
      500: '#667085',
      600: '#475467',
      700: '#344054',
      800: '#182230',
      900: '#101828',
      950: '#0C111D',
    },
    success: {
      25: '#F6FEF9',
      50: '#ECFDF3',
      100: '#DCFAE6',
      200: '#ABEFC6',
      300: '#75E0A7',
      400: '#47CD89',
      500: '#17B26A',
      600: '#079455',
      700: '#067647',
      800: '#085D3A',
      900: '#074D31',
      950: '#053321',
    },
    warning: {
      25: '#FFFCF5',
      50: '#FFFAEB',
      100: '#FEF0C7',
      200: '#FEDF89',
      300: '#FEC84B',
      400: '#FDB022',
      500: '#F79009',
      600: '#DC6803',
      700: '#B54708',
      800: '#93370D',
      900: '#7A2E0E',
      950: '#4E1D09',
    },
    error: {
      25: '#FFFBFA',
      50: '#FEF3F2',
      100: '#FEE4E2',
      200: '#FECDCA',
      300: '#FDA29B',
      400: '#F97066',
      500: '#F04438',
      600: '#D92D20',
      700: '#B42318',
      800: '#912018',
      900: '#7A271A',
      950: '#55160C',
    },
  },
  spacing: {
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    64: '16rem',
  },
  radii: {
    none: '0',
    xxs: '2px',
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '10px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '20px',
    '4xl': '24px',
    full: '9999px',
  },
  shadows: {
    xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    sm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
    md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
    lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
    xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
    '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
    '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
  },
  typography: {
    fontFamily: {
      display: 'Equifax Sans, system-ui, sans-serif',
      body: 'Equifax Sans, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
};

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
    >
      {copied ? <Check className="h-3.5 w-3.5 text-success-500" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

function ColorSwatch({ name, shades }: { name: string; shades: Record<string, string> }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-900 capitalize">{name}</h3>
      <div className="grid grid-cols-6 gap-2 sm:grid-cols-12">
        {Object.entries(shades).map(([shade, color]) => (
          <div key={shade} className="space-y-1.5">
            <div
              className="aspect-square rounded-lg ring-1 ring-inset ring-black/10"
              style={{ backgroundColor: color }}
            />
            <div className="text-center">
              <p className="text-xs font-medium text-gray-700">{shade}</p>
              <div className="flex items-center justify-center gap-0.5">
                <p className="text-[10px] text-gray-500 font-mono">{color}</p>
                <CopyButton text={color} />
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
            All the foundational values that power Signal3 components.
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
            {Object.entries(tokens.colors).map(([name, shades]) => (
              <ColorSwatch key={name} name={name} shades={shades} />
            ))}
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
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">Value</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">Pixels</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">Preview</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {Object.entries(tokens.spacing).map(([key, value]) => (
                    <tr key={key}>
                      <td className="px-4 py-3">
                        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                          spacing.{key}
                        </code>
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-gray-600">{value}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {parseFloat(value) * 16}px
                      </td>
                      <td className="px-4 py-3">
                        <div
                          className="h-4 bg-primary-500 rounded"
                          style={{ width: value }}
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
              {Object.entries(tokens.radii).map(([key, value]) => (
                <div key={key} className="text-center space-y-3">
                  <div
                    className="mx-auto h-24 w-24 bg-primary-100 border-2 border-primary-500"
                    style={{ borderRadius: value }}
                  />
                  <div>
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                      {key}
                    </code>
                    <p className="mt-1 text-sm text-gray-500">{value}</p>
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
              {Object.entries(tokens.shadows).map(([key, value]) => (
                <div key={key} className="space-y-3">
                  <div
                    className="h-32 rounded-xl bg-white border border-gray-100"
                    style={{ boxShadow: value }}
                  />
                  <div>
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                      shadow-{key}
                    </code>
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
                {Object.entries(tokens.typography.fontFamily).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                    <div>
                      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                        font-{key}
                      </code>
                      <p className="mt-2 text-2xl" style={{ fontFamily: value }}>
                        The quick brown fox jumps over the lazy dog
                      </p>
                    </div>
                    <CopyButton text={value} />
                  </div>
                ))}
              </div>
            </div>

            {/* Font Sizes */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Font Sizes</h3>
              <div className="space-y-4">
                {Object.entries(tokens.typography.fontSize).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-4 p-4 rounded-lg border border-gray-200">
                    <code className="shrink-0 w-20 rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-primary-700">
                      text-{key}
                    </code>
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
                {Object.entries(tokens.typography.fontWeight).map(([key, value]) => (
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
