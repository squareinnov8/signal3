'use client';

import Link from 'next/link';
import { ArrowLeft, Check, X } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Basic',
    description: 'Essential credit monitoring for individuals.',
    monthlyPrice: 9.99,
    annualPrice: 99.99,
    features: [
      { name: 'Credit score tracking', included: true },
      { name: 'Monthly credit reports', included: true },
      { name: 'Score change alerts', included: true },
      { name: 'Identity monitoring', included: false },
      { name: 'Dark web scanning', included: false },
      { name: '$1M identity theft insurance', included: false },
      { name: 'Family protection', included: false },
    ],
    cta: 'Start Basic',
    popular: false,
  },
  {
    name: 'Premium',
    description: 'Complete protection for peace of mind.',
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    features: [
      { name: 'Credit score tracking', included: true },
      { name: 'Monthly credit reports', included: true },
      { name: 'Score change alerts', included: true },
      { name: 'Identity monitoring', included: true },
      { name: 'Dark web scanning', included: true },
      { name: '$1M identity theft insurance', included: true },
      { name: 'Family protection', included: false },
    ],
    cta: 'Start Premium',
    popular: true,
  },
  {
    name: 'Family',
    description: 'Protect your entire household.',
    monthlyPrice: 29.99,
    annualPrice: 299.99,
    features: [
      { name: 'Credit score tracking', included: true },
      { name: 'Monthly credit reports', included: true },
      { name: 'Score change alerts', included: true },
      { name: 'Identity monitoring', included: true },
      { name: 'Dark web scanning', included: true },
      { name: '$1M identity theft insurance', included: true },
      { name: 'Family protection', included: true },
    ],
    cta: 'Start Family',
    popular: false,
  },
];

// Pricing Pattern: 3-Column with Toggle
function PricingWithToggle() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-marketing">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose your protection level
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Select a plan that fits your needs. All plans include a 30-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative h-7 w-14 rounded-full transition-colors ${
                isAnnual ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.popular
                  ? 'border-primary-600 shadow-xl'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                {isAnnual && (
                  <p className="mt-1 text-sm text-gray-500">
                    ${(plan.annualPrice / 12).toFixed(2)}/month billed annually
                  </p>
                )}
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                    ) : (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100">
                        <X className="h-3 w-3 text-gray-400" />
                      </div>
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-lg py-3 text-base font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            All plans include: 30-day money-back guarantee · 24/7 customer support · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

// Pricing Pattern: Comparison Table
function PricingComparisonTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  const allFeatures = [
    'Credit score tracking',
    'Monthly credit reports',
    'Score change alerts',
    'Identity monitoring',
    'Dark web scanning',
    '$1M identity theft insurance',
    'Family protection',
    'Priority support',
  ];

  const planFeatures: Record<string, Record<string, boolean | string>> = {
    Basic: {
      'Credit score tracking': true,
      'Monthly credit reports': true,
      'Score change alerts': true,
      'Identity monitoring': false,
      'Dark web scanning': false,
      '$1M identity theft insurance': false,
      'Family protection': false,
      'Priority support': false,
    },
    Premium: {
      'Credit score tracking': true,
      'Monthly credit reports': true,
      'Score change alerts': true,
      'Identity monitoring': true,
      'Dark web scanning': true,
      '$1M identity theft insurance': true,
      'Family protection': false,
      'Priority support': true,
    },
    Family: {
      'Credit score tracking': true,
      'Monthly credit reports': true,
      'Score change alerts': true,
      'Identity monitoring': true,
      'Dark web scanning': true,
      '$1M identity theft insurance': true,
      'Family protection': 'Up to 5 members',
      'Priority support': true,
    },
  };

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="container-marketing">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compare plans
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See all features side-by-side to find the right plan for you.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative h-7 w-14 rounded-full transition-colors ${
                isAnnual ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Features
                </th>
                {plans.map((plan) => (
                  <th key={plan.name} className="px-6 py-4 text-center">
                    <div className="text-sm font-semibold text-gray-900">{plan.name}</div>
                    <div className="mt-1 text-2xl font-bold text-gray-900">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      <span className="text-sm font-normal text-gray-500">
                        /{isAnnual ? 'yr' : 'mo'}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {allFeatures.map((feature) => (
                <tr key={feature}>
                  <td className="px-6 py-4 text-sm text-gray-700">{feature}</td>
                  {plans.map((plan) => {
                    const value = planFeatures[plan.name][feature];
                    return (
                      <td key={plan.name} className="px-6 py-4 text-center">
                        {typeof value === 'string' ? (
                          <span className="text-sm text-gray-700">{value}</span>
                        ) : value ? (
                          <Check className="mx-auto h-5 w-5 text-green-600" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-gray-300" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="px-6 py-4" />
                {plans.map((plan) => (
                  <td key={plan.name} className="px-6 py-4 text-center">
                    <button
                      className={`rounded-lg px-6 py-2 text-sm font-semibold transition-colors ${
                        plan.popular
                          ? 'bg-primary-600 text-white hover:bg-primary-700'
                          : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

// Pricing Pattern: Horizontal Cards
function PricingHorizontal() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-marketing">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              No hidden fees. No surprises. Cancel anytime.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center gap-4 rounded-full bg-gray-100 p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Annual (Save 17%)
            </button>
          </div>
        </div>

        {/* Horizontal Cards */}
        <div className="mt-12 space-y-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col items-start justify-between gap-6 rounded-2xl border-2 p-6 lg:flex-row lg:items-center ${
                plan.popular ? 'border-primary-600 bg-primary-50' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  {plan.popular && (
                    <span className="rounded-full bg-primary-600 px-3 py-1 text-xs font-medium text-white">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-1 text-gray-600">{plan.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {plan.features.slice(0, 4).map((feature) =>
                  feature.included ? (
                    <span key={feature.name} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-600" />
                      {feature.name}
                    </span>
                  ) : null
                )}
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </div>
                  <div className="text-sm text-gray-500">
                    per {isAnnual ? 'year' : 'month'}
                  </div>
                </div>
                <button
                  className={`shrink-0 rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const pricingVariants = [
  { id: 'toggle', name: 'With Toggle', component: PricingWithToggle },
  { id: 'table', name: 'Comparison Table', component: PricingComparisonTable },
  { id: 'horizontal', name: 'Horizontal Cards', component: PricingHorizontal },
];

export default function PricingPatternsPage() {
  const [activeVariant, setActiveVariant] = useState('toggle');
  const ActiveComponent = pricingVariants.find(v => v.id === activeVariant)?.component || PricingWithToggle;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-marketing py-12">
          <Link
            href="/patterns"
            className="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Patterns
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Pricing Comparison</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Product comparison patterns with monthly/annual pricing toggle.
            Perfect for SaaS products and subscription services.
          </p>
        </div>
      </div>

      {/* Variant Selector */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white">
        <div className="container-marketing">
          <div className="flex gap-2 overflow-x-auto py-4">
            {pricingVariants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setActiveVariant(variant.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeVariant === variant.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="border-b border-gray-200">
        <ActiveComponent />
      </div>

      {/* Usage Guidelines */}
      <div className="container-marketing py-12">
        <h2 className="text-2xl font-bold text-gray-900">Best Practices</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h3 className="font-semibold text-green-800">Do</h3>
            <ul className="mt-4 space-y-2 text-green-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Highlight the most popular or recommended plan
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Show annual savings prominently
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Use clear feature differentiation
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Include trust indicators (money-back guarantee, etc.)
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <h3 className="font-semibold text-red-800">Avoid</h3>
            <ul className="mt-4 space-y-2 text-red-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Too many pricing tiers (3-4 is ideal)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Hidden fees or confusing pricing
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Overwhelming feature lists
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Making the cheapest option look bad
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
