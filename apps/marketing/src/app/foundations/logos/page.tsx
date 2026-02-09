'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Download, Check, X } from 'lucide-react';

const logoVariants = [
  {
    name: 'Primary Logo',
    description: 'The standard Equifax logo for use on light backgrounds.',
    src: '/logos/EFXlogo_red.svg',
    background: 'light',
    downloadName: 'EFXlogo_red.svg',
  },
  {
    name: 'Reversed Logo',
    description: 'White logo for use on dark or colored backgrounds.',
    src: '/logos/EFXlogo_white.svg',
    background: 'dark',
    downloadName: 'EFXlogo_white.svg',
  },
];

const tickerVariants = [
  {
    name: 'Ticker Red',
    description: 'Stock ticker symbol for light backgrounds.',
    src: '/logos/ticker-red.svg',
    background: 'light',
  },
  {
    name: 'Ticker White',
    description: 'Stock ticker symbol for dark backgrounds.',
    src: '/logos/ticker-white.svg',
    background: 'dark',
  },
  {
    name: 'Ticker Gray',
    description: 'Stock ticker symbol for subtle applications.',
    src: '/logos/ticker-gray.svg',
    background: 'light',
  },
];

const taglineVariants = [
  {
    name: 'English - One Line',
    description: 'Horizontal tagline for wide spaces.',
    src: '/logos/tagline-en-color-one-line.svg',
    background: 'light',
  },
  {
    name: 'English - Two Lines',
    description: 'Stacked tagline for narrow spaces.',
    src: '/logos/tagline-en-color-two-lines.svg',
    background: 'light',
  },
  {
    name: 'French - One Line',
    description: 'French horizontal tagline.',
    src: '/logos/tagline-fr-color-one-line.svg',
    background: 'light',
  },
  {
    name: 'French - Two Lines',
    description: 'French stacked tagline.',
    src: '/logos/tagline-fr-color-two-lines.svg',
    background: 'light',
  },
];

export default function LogosPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Logos</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Official Equifax logo assets and usage guidelines. Download the correct logo
            treatment for your application context.
          </p>
        </div>
      </div>

      <div className="container-marketing py-12">
        {/* Primary Logos */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Primary Logos</h2>
          <p className="mt-2 text-gray-600">
            The main Equifax logo in standard and reversed colorways.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {logoVariants.map((logo) => (
              <div
                key={logo.name}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <div
                  className={`flex h-40 items-center justify-center p-8 ${
                    logo.background === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
                  }`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={200}
                    height={60}
                    className="h-auto max-h-16 w-auto"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900">{logo.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{logo.description}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={logo.src}
                      download={logo.downloadName}
                      className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200"
                    >
                      <Download className="h-4 w-4" />
                      Download SVG
                    </a>
                    <span className="text-xs text-gray-500">
                      Use on {logo.background} backgrounds
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ticker Symbols */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Ticker Symbol</h2>
          <p className="mt-2 text-gray-600">
            The EFX stock ticker symbol for financial contexts and compact spaces.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {tickerVariants.map((ticker) => (
              <div
                key={ticker.name}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <div
                  className={`flex h-28 items-center justify-center p-6 ${
                    ticker.background === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
                  }`}
                >
                  <Image
                    src={ticker.src}
                    alt={ticker.name}
                    width={80}
                    height={32}
                    className="h-auto max-h-8 w-auto"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{ticker.name}</h3>
                  <p className="mt-1 text-xs text-gray-600">{ticker.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Taglines */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Logo with Tagline</h2>
          <p className="mt-2 text-gray-600">
            Full logo lockups including the Equifax tagline in English and French.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {taglineVariants.map((tagline) => (
              <div
                key={tagline.name}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <div className="flex h-32 items-center justify-center bg-gray-50 p-6">
                  <Image
                    src={tagline.src}
                    alt={tagline.name}
                    width={280}
                    height={80}
                    className="h-auto max-h-20 w-auto"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{tagline.name}</h3>
                  <p className="mt-1 text-xs text-gray-600">{tagline.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clear Space */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Clear Space</h2>
          <p className="mt-2 text-gray-600">
            Always maintain minimum clear space around the logo equal to the height of the &quot;E&quot; in Equifax.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8">
            <div className="relative mx-auto w-fit">
              {/* Clear space indicators */}
              <div className="absolute -inset-8 border-2 border-dashed border-blue-300 rounded-lg" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-blue-600 bg-white px-2">
                Clear space
              </div>

              {/* Logo */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <Image
                  src="/logos/EFXlogo_red.svg"
                  alt="Equifax Logo with clear space"
                  width={200}
                  height={60}
                  className="h-auto w-48"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Minimum Size */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Minimum Size</h2>
          <p className="mt-2 text-gray-600">
            To ensure legibility, never display the logo smaller than these minimum sizes.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-medium text-gray-900">Digital</h3>
              <p className="mt-1 text-sm text-gray-600">Minimum width: 100px</p>
              <div className="mt-4 flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                <Image
                  src="/logos/EFXlogo_red.svg"
                  alt="Minimum digital size"
                  width={100}
                  height={30}
                  className="h-auto w-[100px]"
                />
                <span className="text-xs text-gray-500">100px width</span>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-medium text-gray-900">Print</h3>
              <p className="mt-1 text-sm text-gray-600">Minimum width: 1 inch (25mm)</p>
              <div className="mt-4 flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                <Image
                  src="/logos/EFXlogo_red.svg"
                  alt="Minimum print size"
                  width={96}
                  height={30}
                  className="h-auto w-24"
                />
                <span className="text-xs text-gray-500">1 inch / 25mm</span>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Usage Guidelines</h2>
          <p className="mt-2 text-gray-600">
            Follow these guidelines to maintain brand consistency.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-green-800">
                <Check className="h-5 w-5" />
                Do
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use the red logo on white or light gray backgrounds
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use the white logo on dark backgrounds with sufficient contrast
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Maintain the required clear space around the logo
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use official logo files without modification
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Scale the logo proportionally
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-red-800">
                <X className="h-5 w-5" />
                Don&apos;t
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-red-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Alter the logo colors or apply gradients
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Stretch, skew, or rotate the logo
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Add effects like shadows, outlines, or glows
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Place the logo on busy or low-contrast backgrounds
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Display the logo smaller than minimum size
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
