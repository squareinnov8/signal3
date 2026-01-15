'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Check, Star } from 'lucide-react';
import { useState } from 'react';

// Split Content Pattern: Text Left, Image Right
function SplitTextLeft() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-marketing">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
              Credit Monitoring
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Know your credit score, anytime, anywhere
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get instant access to your credit score and receive personalized tips
              to help you improve it. Track your progress over time with easy-to-understand
              visualizations and alerts.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Free credit score updates',
                'Score simulator tool',
                'Credit factor breakdown',
                'Personalized improvement tips',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-700">
                Check Your Score
              </button>
              <button className="flex items-center justify-center gap-2 text-base font-semibold text-primary-600 hover:text-primary-700">
                Learn more
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-green-50">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-2xl bg-green-200" />
                  <p className="mt-4 text-sm text-green-600">Feature Image</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-green-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Split Content Pattern: Image Left, Text Right
function SplitTextRight() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="container-marketing">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-2xl bg-blue-200" />
                  <p className="mt-4 text-sm text-blue-600">Feature Image</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl bg-blue-100" />
          </div>

          <div>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              Identity Protection
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advanced protection against identity theft
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our comprehensive monitoring scans the dark web, public records, and
              financial accounts to alert you of potential threats before they become problems.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Dark web monitoring',
                'Social Security number alerts',
                'Bank account monitoring',
                '$1M identity theft insurance',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <button className="rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-700">
                Start Protection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Split Content Pattern: With Stats
function SplitWithStats() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-marketing">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by millions of Americans
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;ve been helping people understand and protect their credit for over
              a century. Our expertise, combined with cutting-edge technology, provides
              you with the most comprehensive protection available.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">
              {[
                { value: '100M+', label: 'People protected' },
                { value: '120+', label: 'Years of experience' },
                { value: '99.9%', label: 'Uptime' },
                { value: '4.8/5', label: 'Customer rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                  <div className="mt-1 text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-700">
                Get Started
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-32 w-32 rounded-full bg-primary-200" />
                  <p className="mt-4 text-sm text-primary-600">Trust Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Split Content Pattern: With Testimonial
function SplitWithTestimonial() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="container-marketing">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mt-6">
                <p className="text-lg text-gray-700">
                  &quot;I was skeptical at first, but after seeing my credit score improve
                  by 85 points in just 6 months, I&apos;m a believer. The insights and
                  recommendations are spot-on.&quot;
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200" />
                <div>
                  <div className="font-semibold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-600">Software Engineer</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-primary-100" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center rounded-full bg-yellow-50 px-4 py-1.5 text-sm font-medium text-yellow-700">
              Success Stories
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Real results from real customers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of satisfied customers who have improved their credit
              scores and gained financial peace of mind with our services.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Average 50+ point score increase',
                'Early fraud detection saves thousands',
                '24/7 dedicated support team',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-700">
                Start Your Journey
              </button>
              <button className="flex items-center justify-center gap-2 text-base font-semibold text-primary-600 hover:text-primary-700">
                Read more stories
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Split Content Pattern: Video/Media
function SplitWithVideo() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-marketing">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700">
              How It Works
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              See how easy it is to get started
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Watch our quick overview to see how our platform helps you monitor,
              protect, and improve your financial health in just minutes.
            </p>

            <div className="mt-8 space-y-6">
              {[
                { step: '1', title: 'Create your account', description: 'Sign up in under 2 minutes with basic information.' },
                { step: '2', title: 'Connect your data', description: 'Securely link your accounts for comprehensive monitoring.' },
                { step: '3', title: 'Get protected', description: 'Start receiving alerts and insights immediately.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-600">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-700">
                Get Started Now
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-2xl bg-gray-900">
              <div className="flex h-full items-center justify-center">
                <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-lg transition-transform hover:scale-110">
                  <svg className="ml-1 h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="absolute -bottom-4 left-4 right-4 rounded-xl bg-white p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-900">Product Overview</div>
                  <div className="text-xs text-gray-500">2:34 min</div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>12.5K views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Split Content Pattern: Alternating (Multiple)
function SplitAlternating() {
  const features = [
    {
      badge: 'Feature 1',
      badgeColor: 'primary',
      title: 'Real-time credit monitoring',
      description: 'Track your credit score changes as they happen with instant notifications and detailed breakdowns.',
      image: 'primary',
    },
    {
      badge: 'Feature 2',
      badgeColor: 'blue',
      title: 'Comprehensive identity protection',
      description: 'Monitor the dark web, social media, and public records for signs of identity theft.',
      image: 'blue',
    },
    {
      badge: 'Feature 3',
      badgeColor: 'green',
      title: 'Financial insights and tools',
      description: 'Get personalized recommendations and use our simulators to see how actions affect your score.',
      image: 'green',
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-marketing">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in one place
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our comprehensive platform gives you all the tools to monitor, protect, and improve your financial health.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {features.map((feature, index) => (
            <div key={feature.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ${
                  feature.badgeColor === 'primary' ? 'bg-primary-50 text-primary-700' :
                  feature.badgeColor === 'blue' ? 'bg-blue-50 text-blue-700' :
                  'bg-green-50 text-green-700'
                }`}>
                  {feature.badge}
                </span>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  {feature.description}
                </p>
                <div className="mt-8">
                  <button className="flex items-center gap-2 text-base font-semibold text-primary-600 hover:text-primary-700">
                    Learn more
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${
                  feature.image === 'primary' ? 'from-primary-100 to-primary-50' :
                  feature.image === 'blue' ? 'from-blue-100 to-blue-50' :
                  'from-green-100 to-green-50'
                }`}>
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className={`mx-auto h-20 w-20 rounded-2xl ${
                        feature.image === 'primary' ? 'bg-primary-200' :
                        feature.image === 'blue' ? 'bg-blue-200' :
                        'bg-green-200'
                      }`} />
                      <p className={`mt-4 text-sm ${
                        feature.image === 'primary' ? 'text-primary-600' :
                        feature.image === 'blue' ? 'text-blue-600' :
                        'text-green-600'
                      }`}>Feature Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const splitVariants = [
  { id: 'text-left', name: 'Text Left', component: SplitTextLeft },
  { id: 'text-right', name: 'Text Right', component: SplitTextRight },
  { id: 'with-stats', name: 'With Stats', component: SplitWithStats },
  { id: 'with-testimonial', name: 'With Testimonial', component: SplitWithTestimonial },
  { id: 'with-video', name: 'With Video', component: SplitWithVideo },
  { id: 'alternating', name: 'Alternating', component: SplitAlternating },
];

export default function SplitContentPatternsPage() {
  const [activeVariant, setActiveVariant] = useState('text-left');
  const ActiveComponent = splitVariants.find(v => v.id === activeVariant)?.component || SplitTextLeft;

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
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Split Content Sections</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Two-column layouts combining text, CTAs, images, and other elements.
            Perfect for feature highlights, testimonials, and product showcases.
          </p>
        </div>
      </div>

      {/* Variant Selector */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white">
        <div className="container-marketing">
          <div className="flex gap-2 overflow-x-auto py-4">
            {splitVariants.map((variant) => (
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
        <h2 className="text-2xl font-bold text-gray-900">Layout Guidelines</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50 p-6">
            <h3 className="font-semibold text-green-800">Best Practices</h3>
            <ul className="mt-4 space-y-2 text-green-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Alternate image position for visual variety
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Use consistent image aspect ratios
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Include a clear call-to-action
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                Use bullet points for scannable content
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <h3 className="font-semibold text-red-800">Avoid</h3>
            <ul className="mt-4 space-y-2 text-red-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Placing image on same side repeatedly
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Using more than 4-5 bullet points
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Multiple competing CTAs
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                Low-quality or irrelevant images
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
