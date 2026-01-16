'use client';

import Link from 'next/link';
import {
  ExternalLink,
  Building2,
  ArrowRight,
  Shield,
  FileCheck,
  UserCheck,
  Briefcase,
} from 'lucide-react';

// ============================================================================
// COMPONENTS
// ============================================================================

function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#c41230]/5 to-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/patterns/use-cases"
            className="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Back to Use Cases
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c41230]/10 px-4 py-2 text-sm font-medium text-[#c41230]">
            <Briefcase className="h-4 w-4" />
            Workforce Solutions
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Thank You from the Employer&apos;s Edge Team
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We&apos;ve fully integrated into Equifax Workforce Solutions. Continue to access the same
            great services you know and trust, now with enhanced capabilities.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://workforce.equifax.com/solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#c41230] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#a00f28]"
            >
              Explore Workforce Solutions
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://employersedge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Visit Original Site
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: 'Unemployment Cost Control',
      description:
        'Protect your organization from unwarranted unemployment costs with comprehensive claims management and cost control services.',
      href: 'https://workforce.equifax.com/control-unemployment-costs',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: FileCheck,
      title: 'I-9 Management',
      description:
        'I-9 HQ is an industry-leading electronic I-9 management platform that helps you stay compliant and reduce risk.',
      href: 'https://workforce.equifax.com/solutions/i9-hq',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: UserCheck,
      title: 'Verification Services',
      description:
        'Safer, more secure, and faster information verification for employment and income data.',
      href: 'https://workforce.equifax.com/verify-information',
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Unemployment Cost Control Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Organizations lose funds through unwarranted unemployment costs. We provide unemployment
            claims management, employment and income verification, electronic I-9s, and unemployment
            tax planning to help businesses redirect resources.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-[#c41230]/30 hover:shadow-lg"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.color}`}
              >
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#c41230] group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThankYouSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-[#c41230]/10">
            <Building2 className="h-8 w-8 text-[#c41230]" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Thank You for Your Support
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We sincerely thank you for being a customer. We remain committed to serving you through
            Equifax Workforce Solutions with the same dedication and quality you&apos;ve come to expect.
          </p>
          <div className="mt-8">
            <a
              href="https://workforce.equifax.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#c41230] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#a00f28]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationNotice() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-900">
                Now Part of Equifax Workforce Solutions
              </h3>
              <p className="mt-2 text-blue-800">
                Employer&apos;s Edge has fully integrated into Equifax Workforce Solutions. Access all your
                familiar services with enhanced capabilities and continued support.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="https://workforce.equifax.com/solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Go to Workforce Solutions
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoNotice() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-8">
          <h3 className="text-lg font-semibold text-amber-900">Signal3 Demonstration</h3>
          <p className="mt-2 text-amber-800">
            This page is a demonstration of Signal3 design system components, recreating the
            Employer&apos;s Edge website structure using our component library.
          </p>
          <p className="mt-4 text-sm text-amber-700">
            <a
              href="https://employersedge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
            >
              View the original Employer&apos;s Edge website
            </a>{' '}
            for official information about workforce solutions.
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
      <HeroSection />
      <IntegrationNotice />
      <ServicesSection />
      <ThankYouSection />
      <DemoNotice />
    </div>
  );
}
