'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const showcaseComponents = [
  {
    name: 'Buttons',
    description: 'Primary, secondary, and tertiary button styles',
    preview: (
      <div className="flex flex-wrap gap-3">
        <button className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700">
          Primary
        </button>
        <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
          Secondary
        </button>
        <button className="rounded-lg px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50">
          Tertiary
        </button>
      </div>
    ),
  },
  {
    name: 'Badges',
    description: 'Status indicators and labels',
    preview: (
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-md bg-primary-50 px-2.5 py-0.5 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-200">
          New
        </span>
        <span className="inline-flex items-center rounded-md bg-success-50 px-2.5 py-0.5 text-sm font-medium text-success-700 ring-1 ring-inset ring-success-200">
          Active
        </span>
        <span className="inline-flex items-center rounded-md bg-warning-50 px-2.5 py-0.5 text-sm font-medium text-warning-700 ring-1 ring-inset ring-warning-200">
          Pending
        </span>
        <span className="inline-flex items-center rounded-md bg-error-50 px-2.5 py-0.5 text-sm font-medium text-error-700 ring-1 ring-inset ring-error-200">
          Error
        </span>
      </div>
    ),
  },
  {
    name: 'Inputs',
    description: 'Form inputs with validation states',
    preview: (
      <div className="w-full max-w-sm space-y-3">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm shadow-sm placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
        </div>
      </div>
    ),
  },
  {
    name: 'Cards',
    description: 'Content containers with multiple styles',
    preview: (
      <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="font-semibold text-gray-900">Card Title</h4>
        <p className="mt-2 text-sm text-gray-600">
          Cards can contain any content and come in multiple variants.
        </p>
        <button className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700">
          Learn more →
        </button>
      </div>
    ),
  },
];

export function ComponentShowcase() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-marketing">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built-in components
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              A growing library of production-ready components, thoroughly
              tested and optimized for accessibility.
            </p>
          </div>
          <Link
            href="/components"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            View all components
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {showcaseComponents.map((component, index) => (
            <motion.div
              key={component.name}
              className="rounded-2xl border border-gray-200 bg-white p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex min-h-[120px] items-center justify-center rounded-lg bg-gray-50 p-6">
                {component.preview}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">
                {component.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {component.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
