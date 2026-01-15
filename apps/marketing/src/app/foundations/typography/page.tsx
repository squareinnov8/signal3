'use client';

import Link from 'next/link';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const fontWeights = [
  { name: 'Regular', weight: 400, class: 'font-normal' },
  { name: 'Medium', weight: 500, class: 'font-medium' },
  { name: 'Semi Bold', weight: 600, class: 'font-semibold' },
  { name: 'Bold', weight: 700, class: 'font-bold' },
];

const typeScale = [
  { name: 'Display 2XL', size: '72px', lineHeight: '90px', class: 'text-7xl', tracking: '-2%' },
  { name: 'Display XL', size: '60px', lineHeight: '72px', class: 'text-6xl', tracking: '-2%' },
  { name: 'Display LG', size: '48px', lineHeight: '60px', class: 'text-5xl', tracking: '-2%' },
  { name: 'Display MD', size: '36px', lineHeight: '44px', class: 'text-4xl', tracking: '-2%' },
  { name: 'Display SM', size: '30px', lineHeight: '38px', class: 'text-3xl', tracking: '0' },
  { name: 'Display XS', size: '24px', lineHeight: '32px', class: 'text-2xl', tracking: '0' },
  { name: 'Text XL', size: '20px', lineHeight: '30px', class: 'text-xl', tracking: '0' },
  { name: 'Text LG', size: '18px', lineHeight: '28px', class: 'text-lg', tracking: '0' },
  { name: 'Text MD', size: '16px', lineHeight: '24px', class: 'text-base', tracking: '0' },
  { name: 'Text SM', size: '14px', lineHeight: '20px', class: 'text-sm', tracking: '0' },
  { name: 'Text XS', size: '12px', lineHeight: '18px', class: 'text-xs', tracking: '0' },
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
      {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

export default function TypographyPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Typography</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Open Sans is the official Equifax typeface. It provides excellent readability
            across all platforms and screen sizes while maintaining a modern, professional appearance.
          </p>
        </div>
      </div>

      <div className="container-marketing py-12">
        {/* Font Family */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Font Family</h2>
          <p className="mt-2 text-gray-600">
            Open Sans is our primary typeface for all digital products. It&apos;s available
            through Google Fonts and supports a wide range of languages.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8">
            <div className="mb-6">
              <span className="text-8xl font-semibold tracking-tight text-gray-900">Aa</span>
            </div>
            <div className="flex flex-wrap gap-4 text-2xl text-gray-700">
              <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-2xl text-gray-700">
              <span>abcdefghijklmnopqrstuvwxyz</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-2xl text-gray-700">
              <span>0123456789</span>
            </div>

            <div className="mt-8 rounded-lg bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <code className="text-sm text-gray-800">
                  font-family: &apos;Open Sans&apos;, Arial, sans-serif;
                </code>
                <CopyButton text="font-family: 'Open Sans', Arial, sans-serif;" />
              </div>
            </div>
          </div>
        </section>

        {/* Font Weights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Font Weights</h2>
          <p className="mt-2 text-gray-600">
            We use four font weights to establish visual hierarchy and emphasis.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fontWeights.map((weight) => (
              <div
                key={weight.weight}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <span className={`text-4xl text-gray-900 ${weight.class}`}>Aa</span>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">{weight.name}</p>
                  <p className="text-sm text-gray-500">Weight: {weight.weight}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Type Scale */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Type Scale</h2>
          <p className="mt-2 text-gray-600">
            Our type scale provides a harmonious progression of sizes for clear hierarchy.
          </p>

          <div className="mt-8 space-y-4">
            {typeScale.map((type) => (
              <div
                key={type.name}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <span className={`${type.class} font-semibold text-gray-900`}>
                      The quick brown fox jumps over the lazy dog
                    </span>
                  </div>
                  <div className="flex shrink-0 gap-6 text-sm text-gray-500">
                    <div>
                      <span className="font-medium text-gray-700">{type.name}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Size:</span> {type.size}
                    </div>
                    <div>
                      <span className="text-gray-400">Line:</span> {type.lineHeight}
                    </div>
                    <div>
                      <span className="text-gray-400">Tracking:</span> {type.tracking}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Usage Guidelines</h2>
          <p className="mt-2 text-gray-600">
            Follow these guidelines to maintain consistency across all Equifax products.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-semibold text-green-800">Do</h3>
              <ul className="mt-4 space-y-2 text-green-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use Open Sans for all body text and UI elements
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Maintain consistent line heights for readability
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use font weights to create visual hierarchy
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Ensure text contrast meets WCAG 2.1 AA standards (4.5:1)
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
              <h3 className="font-semibold text-red-800">Don&apos;t</h3>
              <ul className="mt-4 space-y-2 text-red-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Use fonts other than Open Sans for primary content
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Set body text smaller than 14px
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Use all caps for body text or long passages
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Stretch, compress, or distort the typeface
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Implementation</h2>
          <p className="mt-2 text-gray-600">
            Add Open Sans to your project using Google Fonts or npm packages.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 font-semibold text-gray-900">Google Fonts (HTML)</h3>
              <div className="rounded-lg bg-gray-900 p-4">
                <code className="text-sm text-gray-100">
                  &lt;link href=&quot;https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&amp;display=swap&quot; rel=&quot;stylesheet&quot;&gt;
                </code>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 font-semibold text-gray-900">Next.js</h3>
              <div className="rounded-lg bg-gray-900 p-4">
                <pre className="text-sm text-gray-100">
{`import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});`}
                </pre>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 font-semibold text-gray-900">CSS Variable</h3>
              <div className="rounded-lg bg-gray-900 p-4">
                <code className="text-sm text-gray-100">
                  --font-family-open-sans: &apos;Open Sans&apos;, Arial, sans-serif;
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
