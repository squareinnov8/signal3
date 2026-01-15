'use client';

import { useState } from 'react';

interface ComponentPreviewProps {
  componentName: string;
}

export function ComponentPreview({ componentName }: ComponentPreviewProps) {
  const [variant, setVariant] = useState('primary');

  // Render different previews based on component name
  const renderPreview = () => {
    switch (componentName.toLowerCase()) {
      case 'button':
        return (
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700">
              Primary
            </button>
            <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
              Secondary
            </button>
            <button className="rounded-lg px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50">
              Tertiary
            </button>
            <button className="rounded-lg bg-error-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-error-700">
              Destructive
            </button>
          </div>
        );

      case 'badge':
        return (
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
              Default
            </span>
            <span className="inline-flex items-center rounded-md bg-primary-50 px-2.5 py-0.5 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-200">
              Primary
            </span>
            <span className="inline-flex items-center rounded-md bg-success-50 px-2.5 py-0.5 text-sm font-medium text-success-700 ring-1 ring-inset ring-success-200">
              Success
            </span>
            <span className="inline-flex items-center rounded-md bg-warning-50 px-2.5 py-0.5 text-sm font-medium text-warning-700 ring-1 ring-inset ring-warning-200">
              Warning
            </span>
            <span className="inline-flex items-center rounded-md bg-error-50 px-2.5 py-0.5 text-sm font-medium text-error-700 ring-1 ring-inset ring-error-200">
              Error
            </span>
          </div>
        );

      case 'input':
        return (
          <div className="w-full max-w-sm space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm shadow-sm placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
              <p className="mt-1.5 text-sm text-gray-500">
                We&apos;ll never share your email.
              </p>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full rounded-lg border border-error-300 px-3.5 py-2.5 text-sm shadow-sm placeholder:text-gray-400 focus:border-error-500 focus:outline-none focus:ring-2 focus:ring-error-100"
              />
              <p className="mt-1.5 text-sm text-error-600">
                Password must be at least 8 characters.
              </p>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-gray-500">
            Preview not available for this component.
          </div>
        );
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="flex min-h-[200px] items-center justify-center p-8">
        {renderPreview()}
      </div>
      <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 rounded-b-xl">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Interactive preview</span>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            View code
          </button>
        </div>
      </div>
    </div>
  );
}
