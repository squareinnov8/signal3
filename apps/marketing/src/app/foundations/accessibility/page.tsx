'use client';

import Link from 'next/link';
import { ArrowLeft, Eye, Keyboard, Monitor, Cog, Check, X } from 'lucide-react';

const pourPrinciples = [
  {
    icon: Eye,
    name: 'Perceivable',
    description: 'Information and user interface components must be presentable to users in ways they can perceive.',
    guidelines: [
      'Provide text alternatives for non-text content',
      'Provide captions and alternatives for multimedia',
      'Create content that can be presented in different ways',
      'Make it easier for users to see and hear content',
    ],
  },
  {
    icon: Keyboard,
    name: 'Operable',
    description: 'User interface components and navigation must be operable by all users.',
    guidelines: [
      'Make all functionality available from a keyboard',
      'Give users enough time to read and use content',
      'Do not use content that causes seizures or physical reactions',
      'Help users navigate, find content, and determine where they are',
    ],
  },
  {
    icon: Monitor,
    name: 'Understandable',
    description: 'Information and operation of user interface must be understandable.',
    guidelines: [
      'Make text content readable and understandable',
      'Make content appear and operate in predictable ways',
      'Help users avoid and correct mistakes',
    ],
  },
  {
    icon: Cog,
    name: 'Robust',
    description: 'Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.',
    guidelines: [
      'Maximize compatibility with current and future tools',
      'Use semantic HTML elements correctly',
      'Ensure ARIA attributes are used properly',
    ],
  },
];

// Contrast examples — rendered via CSS variables, hex shown for reference
const contrastExamples = [
  {
    bgVar: '--color-white', textVar: '--color-gray-900',
    ratio: '16.5:1', passes: true, label: 'Gray 900 on White',
  },
  {
    bgVar: '--color-white', textVar: '--color-gray-500',
    ratio: '5.2:1', passes: true, label: 'Gray 500 on White',
  },
  {
    bgVar: '--color-white', textVar: '--color-primary-600',
    ratio: '7.3:1', passes: true, label: 'Equifax Red on White',
  },
  {
    bgVar: '--color-primary-600', textVar: '--color-white',
    ratio: '7.3:1', passes: true, label: 'White on Equifax Red',
  },
  {
    bgVar: '--color-white', textVar: '--color-gray-400',
    ratio: '2.5:1', passes: false, label: 'Gray 400 on White',
  },
  {
    bgVar: '--color-gray-50', textVar: '--color-gray-300',
    ratio: '1.4:1', passes: false, label: 'Gray 300 on Gray 50',
  },
];

export default function AccessibilityPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Accessibility</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            All Equifax digital products must meet WCAG 2.1 AA standards. Accessibility
            is not optional&mdash;it&apos;s a requirement for creating inclusive experiences.
          </p>
        </div>
      </div>

      <div className="container-marketing py-12">
        {/* WCAG Compliance Badge */}
        <section className="mb-16">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <Check className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-blue-900">WCAG 2.1 Level AA</h2>
                <p className="mt-2 text-blue-700">
                  Signal3 components are designed and tested to meet Web Content
                  Accessibility Guidelines (WCAG) 2.1 Level AA success criteria.
                  This ensures our products are usable by people with disabilities
                  including visual, auditory, motor, and cognitive impairments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* POUR Principles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">POUR Principles</h2>
          <p className="mt-2 text-gray-600">
            WCAG is organized around four principles that provide the foundation for web accessibility.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {pourPrinciples.map((principle) => (
              <div
                key={principle.name}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                  <principle.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{principle.name}</h3>
                <p className="mt-2 text-gray-600">{principle.description}</p>
                <ul className="mt-4 space-y-2">
                  {principle.guidelines.map((guideline, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                      {guideline}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Color Contrast */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Color Contrast</h2>
          <p className="mt-2 text-gray-600">
            Text must have a contrast ratio of at least 4.5:1 against its background
            (3:1 for large text). Here are examples from our color palette, rendered
            using CSS custom properties.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contrastExamples.map((example, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-200"
              >
                <div
                  className="flex h-24 items-center justify-center p-4"
                  style={{ backgroundColor: `rgb(var(${example.bgVar}))` }}
                >
                  <span
                    className="text-lg font-semibold"
                    style={{ color: `rgb(var(${example.textVar}))` }}
                  >
                    Sample Text
                  </span>
                </div>
                <div className="bg-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{example.label}</span>
                    {example.passes ? (
                      <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                        <Check className="h-3 w-3" />
                        Pass
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                        <X className="h-3 w-3" />
                        Fail
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Contrast ratio: {example.ratio}</p>
                    <code className="text-[10px] text-gray-400">
                      {example.textVar.replace('--color-', '')} / {example.bgVar.replace('--color-', '')}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Keyboard Navigation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Keyboard Navigation</h2>
          <p className="mt-2 text-gray-600">
            All interactive elements must be accessible via keyboard.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">Essential Keyboard Interactions</h3>
            </div>
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="pb-3 text-left text-sm font-medium text-gray-500">Key</th>
                    <th className="pb-3 text-left text-sm font-medium text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3">
                      <kbd className="rounded bg-gray-100 px-2 py-1 text-sm font-mono">Tab</kbd>
                    </td>
                    <td className="py-3 text-gray-600">Move focus to next interactive element</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <kbd className="rounded bg-gray-100 px-2 py-1 text-sm font-mono">Shift + Tab</kbd>
                    </td>
                    <td className="py-3 text-gray-600">Move focus to previous interactive element</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <kbd className="rounded bg-gray-100 px-2 py-1 text-sm font-mono">Enter</kbd>
                    </td>
                    <td className="py-3 text-gray-600">Activate buttons and links</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <kbd className="rounded bg-gray-100 px-2 py-1 text-sm font-mono">Space</kbd>
                    </td>
                    <td className="py-3 text-gray-600">Activate buttons, toggle checkboxes</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <kbd className="rounded bg-gray-100 px-2 py-1 text-sm font-mono">Escape</kbd>
                    </td>
                    <td className="py-3 text-gray-600">Close modals, dropdowns, and overlays</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <kbd className="rounded bg-gray-100 px-2 py-1 text-sm font-mono">Arrow Keys</kbd>
                    </td>
                    <td className="py-3 text-gray-600">Navigate within components (menus, tabs, etc.)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Focus States */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Focus States</h2>
          <p className="mt-2 text-gray-600">
            All interactive elements must have visible focus indicators.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8">
            <div className="flex flex-wrap gap-4">
              <button className="rounded-lg bg-primary-600 px-4 py-2 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Primary Button
              </button>
              <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Secondary Button
              </button>
              <a
                href="#"
                className="text-primary-600 underline hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Link Example
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Press Tab to see focus states. Focus rings should be visible and have
              sufficient contrast.
            </p>
          </div>
        </section>

        {/* Screen Reader Guidelines */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Screen Reader Support</h2>
          <p className="mt-2 text-gray-600">
            Content must be accessible to screen reader users.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-semibold text-green-800">Do</h3>
              <ul className="mt-4 space-y-2 text-green-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use semantic HTML elements (button, nav, main, etc.)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Add alt text to all meaningful images
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use ARIA labels when semantic HTML isn&apos;t sufficient
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Provide skip links for navigation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Announce dynamic content changes with aria-live
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
              <h3 className="font-semibold text-red-800">Don&apos;t</h3>
              <ul className="mt-4 space-y-2 text-red-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Use div or span for interactive elements
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Hide content that screen reader users need
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Rely solely on color to convey information
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Use empty alt attributes for informative images
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Auto-play audio or video content
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testing Tools */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Testing Tools</h2>
          <p className="mt-2 text-gray-600">
            Use these tools to test accessibility compliance.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'axe DevTools', description: 'Browser extension for automated testing' },
              { name: 'WAVE', description: 'Web accessibility evaluation tool' },
              { name: 'Lighthouse', description: 'Chrome DevTools accessibility audit' },
              { name: 'VoiceOver', description: 'macOS built-in screen reader' },
              { name: 'NVDA', description: 'Free Windows screen reader' },
              { name: 'Contrast Checker', description: 'WebAIM color contrast analyzer' },
            ].map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border border-gray-200 bg-white p-4"
              >
                <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
