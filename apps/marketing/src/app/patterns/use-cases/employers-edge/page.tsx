'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ExternalLink,
  ArrowRight,
  DollarSign,
  Monitor,
  CheckCircle,
} from 'lucide-react';

// ============================================================================
// HERO: Split layout with image left, branded right with dots
// Pattern: Based on Signal3 split hero with brand background
// ============================================================================

function HeroSplitBrand() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative h-64 lg:h-auto lg:min-h-[400px]">
          <Image
            src="/images/use-cases/employers-edge/header.jpg"
            alt="Professional team in meeting"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Content with brand background and dots */}
        <div className="relative overflow-hidden bg-blue-600 px-8 py-16 lg:px-16 lg:py-24">
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/patterns/circledots_white.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative">
            <Link
              href="/patterns/use-cases"
              className="mb-6 inline-flex items-center text-sm text-white/80 hover:text-white"
            >
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Back to Use Cases
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Thank You from the Employer&apos;s Edge Team
            </h1>
            <p className="mt-6 text-lg text-white/90">
              We&apos;ve fully integrated into Equifax Workforce Solutions.
            </p>
            <div className="mt-8">
              <a
                href="https://workforce.equifax.com/solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
              >
                Equifax Workforce Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION: Unemployment Cost Control Services
// Pattern: Section header with decorative line, centered 3-up feature cards
// Uses Signal3 theme colors: primary-600 for CTAs, gray-900 for headings
// ============================================================================

function ServicesSection() {
  const services = [
    {
      icon: DollarSign,
      title: 'Control Unemployment Costs',
      description:
        'A more comprehensive approach to managing your employer unemployment costs & workflows.',
      href: 'https://workforce.equifax.com/control-unemployment-costs',
    },
    {
      icon: Monitor,
      title: 'A Platform Designed to Manage Form I-9',
      description:
        'I-9 HQ is an industry-leading electronic I-9 management platform designed with the needs of you and your people at the center.',
      href: 'https://workforce.equifax.com/solutions/i9-hq',
    },
    {
      icon: CheckCircle,
      title: 'Verify Information & Inform Decisions',
      description:
        "Safer, more secure and faster. Help ease the burden on your HR team. Reduce tedious HR tasks and help keep employees' lives moving.",
      href: 'https://workforce.equifax.com/verify-information',
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with decorative lines */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Unemployment Cost Control Services
            </h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="mx-auto mt-2 h-1 w-48 bg-primary-600" />
          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600">
            Your business could be losing a lot of money due to unwarranted unemployment tax costs.
            At Equifax Workforce Solutions, we provide unemployment claims management, employment and
            income verification, electronic I-9s, and unemployment tax planning, so your business
            can focus its resources on other pressing matters.
          </p>
        </div>

        {/* Feature cards - 3-up centered layout using Signal3 colors */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center"
            >
              {/* Icon with primary color */}
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-50">
                <service.icon className="h-8 w-8 text-primary-600" />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600">
                {service.description}
              </p>

              {/* CTA Button using primary color */}
              <div className="mt-6">
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION: Thank You - Split content with image left
// Pattern: Based on Signal3 split content pattern
// ============================================================================

function ThankYouSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/use-cases/employers-edge/woman-smiling.jpg"
                alt="Professional working on laptop"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element - Signal3 pattern */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl bg-blue-100" />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Thank You for Your Support
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              We sincerely thank you for being a customer and look forward to serving you as part of
              Equifax Workforce Solutions.
            </p>
            <div className="mt-8">
              <a
                href="https://workforce.equifax.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION: Still Giving You The Edge - Full width CTA
// Pattern: Full-width hero with gradient background
// ============================================================================

function StillGivingEdgeSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#2c4a5e] to-[#1a3444] py-24 lg:py-32">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/patterns/circledots_white.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Still Giving You The Edge
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          For questions or more information, please contact us on the Equifax Workforce Solutions website.
        </p>
        <div className="mt-10">
          <a
            href="https://workforce.equifax.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-none border-2 border-white bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-colors hover:bg-transparent hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// NOTICE: Signal3 demonstration attribution
// ============================================================================

function DemoNotice() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-warning-200 bg-warning-50 p-8">
          <h3 className="text-lg font-semibold text-warning-700">Signal3 Demonstration</h3>
          <p className="mt-2 text-warning-600">
            This page demonstrates Signal3 design patterns applied to the Employer&apos;s Edge website
            structure. It uses the split hero pattern with brand background and dots, centered
            feature cards with primary colors, and split content sections.
          </p>
          <p className="mt-4 text-sm text-warning-600">
            <a
              href="https://employersedge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium underline"
            >
              View the original Employer&apos;s Edge website
              <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function EmployersEdgePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSplitBrand />
      <ServicesSection />
      <ThankYouSection />
      <StillGivingEdgeSection />
      <DemoNotice />
    </div>
  );
}
