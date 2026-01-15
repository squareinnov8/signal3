'use client';

import Link from 'next/link';
import { ArrowLeft, Zap, Users, Brain, Sparkles, Check, X } from 'lucide-react';

const voiceAttributes = [
  {
    icon: Zap,
    name: 'Confident',
    description: 'We speak with authority and expertise. Our content reflects deep knowledge and instills trust.',
    examples: [
      { good: 'Equifax helps you understand your credit.', bad: 'Maybe we can help with your credit questions.' },
    ],
  },
  {
    icon: Sparkles,
    name: 'Dynamic',
    description: 'We are forward-thinking and innovative. Our content reflects progress and momentum.',
    examples: [
      { good: 'Transform your financial future today.', bad: 'You might want to think about your finances.' },
    ],
  },
  {
    icon: Users,
    name: 'Human',
    description: 'We connect on a personal level. Our content is warm, approachable, and empathetic.',
    examples: [
      { good: 'We understand financial decisions can feel overwhelming.', bad: 'Users often experience confusion regarding financial matters.' },
    ],
  },
  {
    icon: Brain,
    name: 'Smart',
    description: 'We provide intelligent insights. Our content is clear, informed, and valuable.',
    examples: [
      { good: 'Here\'s what your credit score means for you.', bad: 'Credit scores are numbers used by lenders.' },
    ],
  },
];

const toneGuidelines = [
  { name: 'Objective', description: 'Present facts without bias. Let data speak for itself.' },
  { name: 'Logical', description: 'Structure information clearly. Guide users through complex topics step by step.' },
  { name: 'Empathetic', description: 'Acknowledge user concerns and emotions. Show understanding.' },
  { name: 'Sincere', description: 'Be genuine and honest. Avoid marketing speak and hyperbole.' },
];

const capitalizationRules = [
  { type: 'Title Case', usage: 'Page titles, Navigation items, Button labels, Tab labels', example: 'View Credit Report' },
  { type: 'Sentence case', usage: 'Headings, Subheadings, Body text, Field labels, Tooltips', example: 'Your credit score summary' },
];

export default function ContentPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Content Style Guide</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Our voice and tone guidelines ensure consistent, on-brand communication
            across all Equifax products and touchpoints.
          </p>
        </div>
      </div>

      <div className="container-marketing py-12">
        {/* Voice Attributes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Brand Voice</h2>
          <p className="mt-2 text-gray-600">
            The Equifax voice is defined by four core attributes that should be present
            in all our communications.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {voiceAttributes.map((attr) => (
              <div
                key={attr.name}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                  <attr.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{attr.name}</h3>
                <p className="mt-2 text-gray-600">{attr.description}</p>

                {attr.examples.map((example, i) => (
                  <div key={i} className="mt-4 space-y-2">
                    <div className="flex items-start gap-2 rounded-lg bg-green-50 p-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span className="text-sm text-green-800">{example.good}</span>
                    </div>
                    <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                      <span className="text-sm text-red-800">{example.bad}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Tone Guidelines */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Tone</h2>
          <p className="mt-2 text-gray-600">
            While our voice stays consistent, our tone adapts to context and audience needs.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {toneGuidelines.map((tone) => (
              <div
                key={tone.name}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-semibold text-gray-900">{tone.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{tone.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capitalization */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Capitalization</h2>
          <p className="mt-2 text-gray-600">
            Consistent capitalization improves readability and maintains brand consistency.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white">
            <div className="border-b border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900">Capitalization Rules</h3>
            </div>
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="pb-3 text-left text-sm font-medium text-gray-500">Style</th>
                    <th className="pb-3 text-left text-sm font-medium text-gray-500">Usage</th>
                    <th className="pb-3 text-left text-sm font-medium text-gray-500">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {capitalizationRules.map((rule) => (
                    <tr key={rule.type}>
                      <td className="py-3 font-medium text-gray-900">{rule.type}</td>
                      <td className="py-3 text-gray-600">{rule.usage}</td>
                      <td className="py-3">
                        <span className="rounded bg-gray-100 px-2 py-1 font-mono text-sm">
                          {rule.example}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Writing Guidelines */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Writing Guidelines</h2>
          <p className="mt-2 text-gray-600">
            Follow these guidelines for clear, effective communication.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-semibold text-green-800">Do</h3>
              <ul className="mt-4 space-y-3 text-green-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use active voice: &quot;You can view your report&quot;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Be concise: Get to the point quickly
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use simple language: Avoid jargon when possible
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Focus on benefits: Tell users what they&apos;ll gain
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                  Use contractions: &quot;You&apos;re&quot; instead of &quot;You are&quot;
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
              <h3 className="font-semibold text-red-800">Don&apos;t</h3>
              <ul className="mt-4 space-y-3 text-red-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Use passive voice: &quot;Your report can be viewed&quot;
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Be wordy: Avoid unnecessary filler words
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Use technical jargon without explanation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Use negative framing when positive works
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  Make promises we can&apos;t keep
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* UI Text Patterns */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">UI Text Patterns</h2>
          <p className="mt-2 text-gray-600">
            Common patterns for interface text elements.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Buttons</h3>
              <p className="mt-2 text-gray-600">Use action verbs. Be specific about what will happen.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="rounded-lg bg-primary-600 px-4 py-2 text-white">Save Changes</button>
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700">Cancel</button>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">Download Report</button>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Error Messages</h3>
              <p className="mt-2 text-gray-600">Be helpful, not blame-placing. Offer a solution.</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <p className="font-medium text-red-800">Unable to save changes</p>
                  <p className="mt-1 text-sm text-red-600">Please check your internet connection and try again.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Success Messages</h3>
              <p className="mt-2 text-gray-600">Confirm the action and suggest next steps when relevant.</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <p className="font-medium text-green-800">Changes saved successfully</p>
                  <p className="mt-1 text-sm text-green-600">Your profile has been updated.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Empty States</h3>
              <p className="mt-2 text-gray-600">Explain what the user can do to populate the area.</p>
              <div className="mt-4 rounded-lg border-2 border-dashed border-gray-200 p-8 text-center">
                <p className="font-medium text-gray-900">No reports yet</p>
                <p className="mt-1 text-sm text-gray-500">Generate your first credit report to see it here.</p>
                <button className="mt-4 rounded-lg bg-primary-600 px-4 py-2 text-sm text-white">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Numbers and Dates */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Numbers and Dates</h2>
          <p className="mt-2 text-gray-600">
            Formatting guidelines for numerical content.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-3 text-left text-sm font-medium text-gray-500">Type</th>
                  <th className="pb-3 text-left text-sm font-medium text-gray-500">Format</th>
                  <th className="pb-3 text-left text-sm font-medium text-gray-500">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 font-medium text-gray-900">Currency</td>
                  <td className="py-3 text-gray-600">Symbol, commas, two decimals</td>
                  <td className="py-3 font-mono text-sm">$1,234.56</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-gray-900">Percentages</td>
                  <td className="py-3 text-gray-600">Number followed by %</td>
                  <td className="py-3 font-mono text-sm">25%</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-gray-900">Dates</td>
                  <td className="py-3 text-gray-600">Month Day, Year</td>
                  <td className="py-3 font-mono text-sm">January 15, 2024</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-gray-900">Short dates</td>
                  <td className="py-3 text-gray-600">MM/DD/YYYY</td>
                  <td className="py-3 font-mono text-sm">01/15/2024</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-gray-900">Phone numbers</td>
                  <td className="py-3 text-gray-600">Area code in parentheses</td>
                  <td className="py-3 font-mono text-sm">(800) 555-1234</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-gray-900">Credit scores</td>
                  <td className="py-3 text-gray-600">Three digits, no formatting</td>
                  <td className="py-3 font-mono text-sm">750</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
