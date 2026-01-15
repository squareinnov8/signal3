'use client';

import Link from 'next/link';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const colorPalettes = [
  {
    name: 'Primary (Equifax Red)',
    description: 'Our primary brand color. Use for key actions, links, and brand elements.',
    baseColor: '#9E1B32',
    colors: [
      { shade: '25', hex: '#FEF5F6' },
      { shade: '50', hex: '#FDF2F4' },
      { shade: '100', hex: '#FCE4E8' },
      { shade: '200', hex: '#F9C8D0' },
      { shade: '300', hex: '#F4A1AE' },
      { shade: '400', hex: '#EC7085' },
      { shade: '500', hex: '#D84560' },
      { shade: '600', hex: '#9E1B32', isBase: true },
      { shade: '700', hex: '#8A1729' },
      { shade: '800', hex: '#6E1221' },
      { shade: '900', hex: '#520D18' },
      { shade: '950', hex: '#3A0911' },
    ],
  },
  {
    name: 'Blue',
    description: 'Secondary brand color. Use for informational elements and links.',
    baseColor: '#007298',
    colors: [
      { shade: '25', hex: '#F0FAFD' },
      { shade: '50', hex: '#E5F6FB' },
      { shade: '100', hex: '#C7EDF7' },
      { shade: '200', hex: '#94DCEF' },
      { shade: '300', hex: '#5CC5E3' },
      { shade: '400', hex: '#2AADD4' },
      { shade: '500', hex: '#0890B8' },
      { shade: '600', hex: '#007298', isBase: true },
      { shade: '700', hex: '#004D66' },
      { shade: '800', hex: '#003D52' },
      { shade: '900', hex: '#002D3D' },
      { shade: '950', hex: '#001E29' },
    ],
  },
  {
    name: 'Green (Success)',
    description: 'Use for success states, positive actions, and confirmations.',
    baseColor: '#45842A',
    colors: [
      { shade: '25', hex: '#F5FBF3' },
      { shade: '50', hex: '#EDF8E9' },
      { shade: '100', hex: '#D9F0D1' },
      { shade: '200', hex: '#B5E1A6' },
      { shade: '300', hex: '#8BCC76' },
      { shade: '400', hex: '#64B34D' },
      { shade: '500', hex: '#4A993A' },
      { shade: '600', hex: '#45842A', isBase: true },
      { shade: '700', hex: '#294D19' },
      { shade: '800', hex: '#223F15' },
      { shade: '900', hex: '#1A3010' },
      { shade: '950', hex: '#12210B' },
    ],
  },
  {
    name: 'Orange (Warning)',
    description: 'Use for warning states and elements requiring attention.',
    baseColor: '#E77204',
    colors: [
      { shade: '25', hex: '#FFFAF5' },
      { shade: '50', hex: '#FFF5EB' },
      { shade: '100', hex: '#FFEBD4' },
      { shade: '200', hex: '#FFD4A8' },
      { shade: '300', hex: '#FFB871' },
      { shade: '400', hex: '#FF983A' },
      { shade: '500', hex: '#F5820F' },
      { shade: '600', hex: '#E77204', isBase: true },
      { shade: '700', hex: '#994A00' },
      { shade: '800', hex: '#7A3B00' },
      { shade: '900', hex: '#5C2C00' },
      { shade: '950', hex: '#3D1D00' },
    ],
  },
  {
    name: 'Yellow',
    description: 'Use sparingly for highlights and emphasis.',
    baseColor: '#F1C319',
    colors: [
      { shade: '25', hex: '#FFFDF5' },
      { shade: '50', hex: '#FFFBEB' },
      { shade: '100', hex: '#FFF5CC' },
      { shade: '200', hex: '#FFEC99' },
      { shade: '300', hex: '#FFDF5C' },
      { shade: '400', hex: '#F7D033' },
      { shade: '500', hex: '#F1C319', isBase: true },
      { shade: '600', hex: '#98700C' },
      { shade: '700', hex: '#7A5909' },
      { shade: '800', hex: '#5C4307' },
      { shade: '900', hex: '#3D2D05' },
      { shade: '950', hex: '#291E03' },
    ],
  },
  {
    name: 'Purple',
    description: 'Use for accent elements and special features.',
    baseColor: '#652F6C',
    colors: [
      { shade: '25', hex: '#FAF5FB' },
      { shade: '50', hex: '#F6EDF7' },
      { shade: '100', hex: '#EDDAEF' },
      { shade: '200', hex: '#DBB5DF' },
      { shade: '300', hex: '#C48BCA' },
      { shade: '400', hex: '#A95EB0' },
      { shade: '500', hex: '#873A90' },
      { shade: '600', hex: '#652F6C', isBase: true },
      { shade: '700', hex: '#431F47' },
      { shade: '800', hex: '#36193A' },
      { shade: '900', hex: '#28132B' },
      { shade: '950', hex: '#1B0D1D' },
    ],
  },
  {
    name: 'Gray',
    description: 'Neutral colors for text, backgrounds, and borders.',
    baseColor: '#5B6771',
    colors: [
      { shade: '25', hex: '#FCFCFD' },
      { shade: '50', hex: '#F9FAFB' },
      { shade: '100', hex: '#F2F4F6' },
      { shade: '200', hex: '#E7E7E7' },
      { shade: '300', hex: '#D0D4D8' },
      { shade: '400', hex: '#A3AAAD' },
      { shade: '500', hex: '#5B6771', isBase: true },
      { shade: '600', hex: '#4A545D' },
      { shade: '700', hex: '#3A424A' },
      { shade: '800', hex: '#2A3037' },
      { shade: '900', hex: '#1A1E24' },
      { shade: '950', hex: '#0D0F11' },
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
      title="Copy to clipboard"
    >
      {copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
    </button>
  );
}

function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#1A1E24' : '#FFFFFF';
}

export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-marketing py-12">
          <Link
            href="/foundations"
            className="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Foundations
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Colors</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            The official Equifax color palette. These colors are designed for accessibility
            and consistent brand representation across all platforms.
          </p>
        </div>
      </div>

      <div className="container-marketing py-12">
        {/* Brand Colors Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Brand Colors</h2>
          <p className="mt-2 text-gray-600">
            Primary brand colors from the official Equifax brand guidelines.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Equifax Red', hex: '#9E1B32', usage: 'Primary brand, CTAs' },
              { name: 'Blue', hex: '#007298', usage: 'Links, info states' },
              { name: 'Green', hex: '#45842A', usage: 'Success states' },
              { name: 'Orange', hex: '#E77204', usage: 'Warning states' },
              { name: 'Yellow', hex: '#F1C319', usage: 'Highlights' },
              { name: 'Purple', hex: '#652F6C', usage: 'Accents' },
              { name: 'Gray', hex: '#5B6771', usage: 'Text, borders' },
              { name: 'Light Gray', hex: '#E7E7E7', usage: 'Backgrounds' },
            ].map((color) => (
              <div
                key={color.name}
                className="overflow-hidden rounded-xl border border-gray-200"
              >
                <div
                  className="flex h-24 items-end p-4"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: getContrastColor(color.hex) }}
                  >
                    {color.name}
                  </span>
                </div>
                <div className="bg-white p-4">
                  <div className="flex items-center justify-between">
                    <code className="text-sm text-gray-600">{color.hex}</code>
                    <CopyButton text={color.hex} />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full Palettes */}
        {colorPalettes.map((palette) => (
          <section key={palette.name} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900">{palette.name}</h2>
            <p className="mt-2 text-gray-600">{palette.description}</p>

            <div className="mt-8">
              <div className="flex overflow-hidden rounded-xl border border-gray-200">
                {palette.colors.map((color) => (
                  <div
                    key={color.shade}
                    className="group relative flex-1"
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="flex h-20 items-end justify-center pb-2">
                      <span
                        className="text-xs font-medium"
                        style={{ color: getContrastColor(color.hex) }}
                      >
                        {color.shade}
                      </span>
                    </div>
                    {color.isBase && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-gray-900 px-2 py-0.5 text-xs font-medium text-white">
                          Base
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Color table */}
              <div className="mt-4 rounded-xl border border-gray-200 bg-white">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Shade</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Hex</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Swatch</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">CSS Variable</th>
                      <th className="px-4 py-3 text-right text-sm font-medium text-gray-500"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {palette.colors.map((color) => (
                      <tr key={color.shade} className={color.isBase ? 'bg-gray-50' : ''}>
                        <td className="px-4 py-3">
                          <span className="font-medium text-gray-900">{color.shade}</span>
                          {color.isBase && (
                            <span className="ml-2 text-xs text-primary-600">(Base)</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-sm text-gray-600">{color.hex}</code>
                        </td>
                        <td className="px-4 py-3">
                          <div
                            className="h-6 w-12 rounded border border-gray-200"
                            style={{ backgroundColor: color.hex }}
                          />
                        </td>
                        <td className="px-4 py-3">
                          <code className="text-xs text-gray-500">
                            --color-{palette.name.toLowerCase().split(' ')[0]}-{color.shade}
                          </code>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <CopyButton text={color.hex} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        ))}

        {/* Usage Guidelines */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Usage Guidelines</h2>
          <p className="mt-2 text-gray-600">
            Follow these guidelines for consistent color usage.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-semibold text-green-800">Do</h3>
              <ul className="mt-4 space-y-2 text-green-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use Equifax Red for primary CTAs and key brand elements
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Ensure text has at least 4.5:1 contrast ratio
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use semantic colors for their intended purpose
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use lighter shades (25-100) for backgrounds
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
              <h3 className="font-semibold text-red-800">Don&apos;t</h3>
              <ul className="mt-4 space-y-2 text-red-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Use colors outside the approved palette
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Use red for success states or green for errors
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Rely solely on color to convey information
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Use light text on light backgrounds
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
