'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

// Hero Pattern: Single CTA
function HeroSingleCTA() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-marketing py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            New Feature Available
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Take control of your
            <span className="text-primary-600"> financial future</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Get personalized insights, monitor your credit score, and protect your identity
            with our comprehensive financial tools.
          </p>
          <div className="mt-10">
            <button className="rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
              Get Started Free
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required · Cancel anytime
          </p>
        </div>
      </div>
      {/* Decorative dot pattern */}
      <div className="absolute right-0 top-0 -z-10 h-full w-1/2 opacity-50">
        <Image
          src="/patterns/circledots_lightgray.png"
          alt=""
          fill
          className="object-contain object-right"
        />
      </div>
    </section>
  );
}

// Hero Pattern: Dual CTA
function HeroDualCTA() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="container-marketing py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Protect what matters most
          </h1>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Monitor your credit, detect fraud early, and get peace of mind with
            comprehensive identity protection services.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 sm:w-auto">
              Start Free Trial
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50 sm:w-auto">
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero Pattern: Image Right
function HeroImageRight() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-marketing py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
              Trusted by millions
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Your credit score, simplified
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Get instant access to your credit score and personalized recommendations
              to improve your financial health. Track changes over time and understand
              what impacts your score.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-700">
                Check Your Score
              </button>
              <button className="flex items-center justify-center gap-2 text-base font-semibold text-primary-600 hover:text-primary-700">
                Learn more
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 lg:aspect-[4/3]">
              {/* Placeholder for hero image */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-32 w-32 rounded-full bg-primary-200" />
                  <p className="mt-4 text-sm text-primary-600">Hero Image</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-primary-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero Pattern: Image Left
function HeroImageLeft() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="container-marketing py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 lg:aspect-[4/3]">
              {/* Placeholder for hero image */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-32 w-32 rounded-full bg-blue-200" />
                  <p className="mt-4 text-sm text-blue-600">Hero Image</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl bg-blue-100" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              Identity Protection
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Guard your identity 24/7
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Our advanced monitoring systems scan the dark web, social media, and
              public records to alert you of potential threats before they become problems.
            </p>
            <ul className="mt-8 space-y-4">
              {['Real-time alerts', 'Dark web monitoring', '$1M identity theft insurance'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <button className="rounded-lg bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-700">
                Start Protection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero Pattern: Centered with Background
function HeroCenteredBrand() {
  return (
    <section className="relative overflow-hidden bg-primary-600">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/patterns/circledots_white.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="container-marketing relative py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Financial confidence starts here
          </h1>
          <p className="mt-6 text-lg text-primary-100 sm:text-xl">
            Join millions of people who trust Equifax to help them understand,
            protect, and improve their financial lives.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-sm transition-colors hover:bg-gray-50 sm:w-auto">
              Get Started
            </button>
            <button className="w-full rounded-lg border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const heroVariants = [
  { id: 'single-cta', name: 'Single CTA', component: HeroSingleCTA },
  { id: 'dual-cta', name: 'Dual CTA', component: HeroDualCTA },
  { id: 'image-right', name: 'Image Right', component: HeroImageRight },
  { id: 'image-left', name: 'Image Left', component: HeroImageLeft },
  { id: 'centered-brand', name: 'Centered (Brand)', component: HeroCenteredBrand },
];

export default function HeroPatternsPage() {
  const [activeVariant, setActiveVariant] = useState('single-cta');
  const ActiveComponent = heroVariants.find(v => v.id === activeVariant)?.component || HeroSingleCTA;

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
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Hero Sections</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Full-width hero patterns for landing pages and marketing sites.
            Choose from single CTA, dual CTA, or image-based layouts.
          </p>
        </div>
      </div>

      {/* Variant Selector */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white">
        <div className="container-marketing">
          <div className="flex gap-2 overflow-x-auto py-4">
            {heroVariants.map((variant) => (
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

      {/* Code Example */}
      <div className="container-marketing py-12">
        <h2 className="text-2xl font-bold text-gray-900">Usage</h2>
        <p className="mt-2 text-gray-600">
          Copy the pattern code and customize the content for your needs.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-gray-900">
          <div className="flex items-center justify-between border-b border-gray-700 px-4 py-3">
            <span className="text-sm text-gray-400">hero-{activeVariant}.tsx</span>
            <button className="rounded bg-gray-700 px-3 py-1 text-xs text-gray-300 hover:bg-gray-600">
              Copy
            </button>
          </div>
          <pre className="overflow-x-auto p-4 text-sm text-gray-300">
            <code>{`// ${heroVariants.find(v => v.id === activeVariant)?.name} Hero Pattern
// Uses: Tailwind CSS, Next.js Image

<section className="relative overflow-hidden bg-white">
  <div className="container-marketing py-20 lg:py-28">
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center rounded-full
        bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
        Badge Text
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight
        text-gray-900 sm:text-5xl lg:text-6xl">
        Your headline here
      </h1>
      <p className="mt-6 text-lg text-gray-600 sm:text-xl">
        Your description text goes here.
      </p>
      <div className="mt-10">
        <button className="rounded-lg bg-primary-600 px-8 py-4
          text-base font-semibold text-white hover:bg-primary-700">
          Call to Action
        </button>
      </div>
    </div>
  </div>
</section>`}</code>
          </pre>
        </div>

        {/* Guidelines */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h3 className="font-semibold text-green-800">Best Practices</h3>
            <ul className="mt-4 space-y-2 text-green-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Keep headlines concise and action-oriented
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Use a single primary CTA when possible
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Include social proof or trust indicators
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Ensure images are optimized and relevant
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <h3 className="font-semibold text-red-800">Avoid</h3>
            <ul className="mt-4 space-y-2 text-red-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Too many competing CTAs
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Walls of text in the hero
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Generic stock photos
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Autoplaying videos with sound
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
