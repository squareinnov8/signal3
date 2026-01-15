'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Shield, TrendingUp, Lock, Users } from 'lucide-react';
import { useState } from 'react';

// Section Pattern: Light Background with Dots
function SectionLightDots() {
  const features = [
    {
      icon: Shield,
      title: 'Identity Protection',
      description: 'Monitor your personal information across the web and get alerts when suspicious activity is detected.',
    },
    {
      icon: TrendingUp,
      title: 'Credit Monitoring',
      description: 'Track your credit score changes and understand what factors impact your financial health.',
    },
    {
      icon: Lock,
      title: 'Secure Data',
      description: 'Your information is protected with bank-level encryption and security protocols.',
    },
    {
      icon: Users,
      title: 'Family Coverage',
      description: 'Extend protection to your entire household with our comprehensive family plans.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-28">
      {/* Dot pattern - positioned in corner */}
      <div className="absolute -right-32 -top-32 h-96 w-96 opacity-60">
        <Image
          src="/patterns/circledots_lightgray.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute -bottom-32 -left-32 h-96 w-96 opacity-40">
        <Image
          src="/patterns/circledots_lightgray.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="container-marketing relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            Why Choose Us
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to protect your financial future
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive tools and services designed to give you peace of mind.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section Pattern: Dark/Brand Background with Dots
function SectionDarkDots() {
  return (
    <section className="relative overflow-hidden bg-primary-600 py-20 lg:py-28">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/patterns/circledots_white.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      {/* Additional dot accent */}
      <div className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 opacity-20">
        <Image
          src="/patterns/circledots_white.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="container-marketing relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join over 100 million people who trust us
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              We&apos;ve been helping people understand and protect their credit for over 100 years.
              Our expertise and technology work together to give you the best possible protection.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary-600 transition-colors hover:bg-gray-50">
                Get Started
              </button>
              <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10">
                Learn More
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '100M+', label: 'People Protected' },
              { value: '120+', label: 'Years of Experience' },
              { value: '24/7', label: 'Monitoring' },
              { value: '$1M', label: 'Identity Insurance' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Section Pattern: Centered CTA with Dots
function SectionCenteredCTA() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 lg:py-28">
      {/* Dot patterns */}
      <div className="absolute left-0 top-0 h-full w-1/3 opacity-10">
        <Image
          src="/patterns/circledots_white.png"
          alt=""
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-10">
        <Image
          src="/patterns/circledots_white.png"
          alt=""
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="container-marketing relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to take control of your credit?
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Start your free trial today and see why millions of people trust us
            with their financial security.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-700 sm:w-auto">
              Start Free Trial
            </button>
            <button className="w-full rounded-lg border border-gray-600 bg-transparent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/5 sm:w-auto">
              Contact Sales
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            No credit card required · 30-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

// Section Pattern: Testimonial with Dots
function SectionTestimonialDots() {
  return (
    <section className="relative overflow-hidden bg-primary-50 py-20 lg:py-28">
      {/* Dot pattern */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-30">
        <Image
          src="/patterns/circledots_lightgray.png"
          alt=""
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="container-marketing relative">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="mt-8">
              <p className="text-2xl font-medium text-gray-900 sm:text-3xl">
                &quot;This service has completely changed how I manage my finances.
                The real-time alerts and detailed insights have helped me improve
                my credit score by over 100 points.&quot;
              </p>
            </blockquote>
            <div className="mt-8">
              <div className="flex items-center justify-center gap-4">
                <div className="h-14 w-14 rounded-full bg-primary-200" />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-600">Small Business Owner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust logos */}
          <div className="mt-16 border-t border-primary-200 pt-12">
            <p className="text-center text-sm font-medium text-gray-600">
              Trusted by leading organizations
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company) => (
                <div key={company} className="h-8 w-24 rounded bg-primary-200/50" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section Pattern: Stats Banner with Dots
function SectionStatsBanner() {
  const stats = [
    { value: '100M+', label: 'Credit reports accessed' },
    { value: '99.9%', label: 'Uptime guarantee' },
    { value: '4.8/5', label: 'Customer rating' },
    { value: '24/7', label: 'Customer support' },
  ];

  return (
    <section className="relative overflow-hidden bg-blue-600 py-16">
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/patterns/circledots_white.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container-marketing relative">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white">{stat.value}</div>
              <div className="mt-2 text-blue-100">{stat.label}</div>
              {index < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-blue-400 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionVariants = [
  { id: 'light-dots', name: 'Light + Dots', component: SectionLightDots },
  { id: 'dark-dots', name: 'Brand + Dots', component: SectionDarkDots },
  { id: 'centered-cta', name: 'Centered CTA', component: SectionCenteredCTA },
  { id: 'testimonial', name: 'Testimonial', component: SectionTestimonialDots },
  { id: 'stats-banner', name: 'Stats Banner', component: SectionStatsBanner },
];

export default function SectionsPatternsPage() {
  const [activeVariant, setActiveVariant] = useState('light-dots');
  const ActiveComponent = sectionVariants.find(v => v.id === activeVariant)?.component || SectionLightDots;

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
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Full-Width Sections</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Branded full-width sections featuring the Equifax circular dot pattern.
            Use these for feature highlights, CTAs, testimonials, and stats.
          </p>
        </div>
      </div>

      {/* Variant Selector */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white">
        <div className="container-marketing">
          <div className="flex gap-2 overflow-x-auto py-4">
            {sectionVariants.map((variant) => (
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
        <h2 className="text-2xl font-bold text-gray-900">Using the Dot Pattern</h2>
        <p className="mt-2 text-gray-600">
          The circular dot pattern is a key Equifax brand element. Use it thoughtfully.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">Light Backgrounds</h3>
            <p className="mt-2 text-sm text-gray-600">
              Use <code className="rounded bg-gray-100 px-1">circledots_lightgray.png</code> with
              30-60% opacity on white or light gray backgrounds.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">Dark Backgrounds</h3>
            <p className="mt-2 text-sm text-gray-600">
              Use <code className="rounded bg-gray-100 px-1">circledots_white.png</code> with
              10-20% opacity on brand or dark backgrounds.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">Positioning</h3>
            <p className="mt-2 text-sm text-gray-600">
              Position dots in corners or as subtle overlays. Avoid placing them
              where they interfere with text readability.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-900 p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">CSS Example</span>
            <button className="rounded bg-gray-700 px-3 py-1 text-xs text-gray-300 hover:bg-gray-600">
              Copy
            </button>
          </div>
          <pre className="mt-4 overflow-x-auto text-sm text-gray-300">
            <code>{`{/* Dot pattern positioned in corner */}
<div className="absolute -right-32 -top-32 h-96 w-96 opacity-60">
  <Image
    src="/patterns/circledots_lightgray.png"
    alt=""
    fill
    className="object-contain"
  />
</div>

{/* Dot pattern as full overlay */}
<div className="absolute inset-0 opacity-10">
  <Image
    src="/patterns/circledots_white.png"
    alt=""
    fill
    className="object-cover"
  />
</div>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
