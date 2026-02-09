'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Check, ChevronDown, Search, Menu, X, CreditCard, DollarSign, Car, Shield, FileText, Lock, AlertTriangle, HelpCircle, ExternalLink, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';

// ============================================
// NAVIGATION COMPONENT
// ============================================
function EquifaxNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="border-b border-gray-100">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm font-medium text-primary-600">
              Personal
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-sm text-gray-600 hover:text-primary-600">
              Business
            </button>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <Link href="#" className="text-sm text-gray-600 hover:text-primary-600">About Us</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary-600">Credit Report Help</Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary-600">Support</Link>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-600">USA</span>
              <ChevronDown className="h-3 w-3 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#" className="flex-shrink-0">
          <Image
            src="/logos/EFXlogo_red.svg"
            alt="Equifax"
            width={140}
            height={36}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              Products & Services
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <Link href="#" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
            Learn
          </Link>
          <Link href="#" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600">
            Credit Offers & More
          </Link>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="hidden p-2 text-gray-600 hover:text-primary-600 lg:block">
            <Search className="h-5 w-5" />
          </button>
          <Link
            href="#"
            className="hidden rounded-lg border border-primary-600 px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 lg:block"
          >
            Sign In
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link href="#" className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700">
              Products & Services
            </Link>
            <Link href="#" className="block rounded-lg px-3 py-2 text-sm text-gray-600">
              Learn
            </Link>
            <Link href="#" className="block rounded-lg px-3 py-2 text-sm text-gray-600">
              Credit Offers & More
            </Link>
            <div className="border-t border-gray-100 pt-4">
              <Link href="#" className="block rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/use-cases/equifax-homepage/hero-dots.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your Credit.<br />
              <span className="text-primary-600">Your Identity.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              We monitor your Equifax credit report, provide you with alerts, and help you recover from ID theft so you can focus on living your financial best.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <span className="font-semibold text-primary-600">$9.95 / month</span>
              <span>Cancel at any time; no partial month refunds.</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#"
                className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700"
              >
                Sign Up Now
              </Link>
              <Link
                href="#"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Learn More
              </Link>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-green-600">
              <Check className="h-4 w-4" />
              Checking your own credit will NOT harm it.
            </p>
          </div>

          {/* Right - Hero image */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/use-cases/equifax-homepage/hero-background.png"
              alt="Credit score dashboard showing 810 score"
              width={600}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PRODUCT COMPARISON SECTION
// ============================================
function ProductComparisonSection() {
  const products = [
    {
      name: 'Equifax Complete',
      trademark: '™',
      icon: '/images/use-cases/equifax-homepage/efx-complete.svg',
      price: '$9.95',
      period: '/mo',
      annual: 'or $99.95/yr',
      color: 'border-blue-500',
      features: [
        'Equifax credit report monitoring',
        'Equifax credit report lock',
        'Identity restoration services',
        'Up to $1MM ID theft insurance',
      ],
      cta: 'Sign Up',
      popular: false,
    },
    {
      name: 'Equifax Complete',
      trademark: '™',
      subtitle: 'Premier',
      icon: '/images/use-cases/equifax-homepage/efx-complete-premier.svg',
      price: '$19.95',
      period: '/mo',
      annual: 'or $199.95/yr',
      color: 'border-primary-600',
      features: [
        'Everything in Complete, plus:',
        '3-Bureau credit report monitoring',
        '3-Bureau credit report lock',
        'Up to $2MM ID theft insurance',
        'Social Security number monitoring',
      ],
      cta: 'Sign Up',
      popular: true,
    },
    {
      name: 'Equifax Complete',
      trademark: '™',
      subtitle: 'Family Plan',
      icon: '/images/use-cases/equifax-homepage/efx-complete-family.svg',
      price: '$29.95',
      period: '/mo',
      annual: 'or $299.95/yr',
      color: 'border-green-500',
      features: [
        'Premier features for 2 adults',
        'Credit monitoring for up to 4 children',
        'Child identity protection',
        'Family identity restoration',
      ],
      cta: 'Sign Up',
      popular: false,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose Your Protection Plan
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Credit monitoring and identity protection for you and your family
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name + (product.subtitle || '')}
              className={`relative rounded-2xl border-2 bg-white p-8 shadow-sm ${product.color} ${
                product.popular ? 'ring-2 ring-primary-600 ring-offset-2' : ''
              }`}
            >
              {product.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <div className="text-center">
                <Image
                  src={product.icon}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="mx-auto h-20 w-20"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {product.name}<sup className="text-xs">{product.trademark}</sup>
                  {product.subtitle && (
                    <span className="block text-primary-600">{product.subtitle}</span>
                  )}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-gray-600">{product.period}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.annual}</p>
              </div>

              <ul className="mt-8 space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#"
                className={`mt-8 block rounded-lg px-6 py-3 text-center text-sm font-semibold ${
                  product.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'border border-primary-600 text-primary-600 hover:bg-primary-50'
                }`}
              >
                {product.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          All plans include a 7-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

// ============================================
// CREDIT OFFERS SECTION
// ============================================
function CreditOffersSection() {
  const offers = [
    {
      icon: CreditCard,
      title: 'Credit Card Offers',
      description: 'Compare credit cards tailored to your credit profile',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: DollarSign,
      title: 'Personal Loan Rates',
      description: 'Find competitive rates for personal loans',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Car,
      title: 'Auto Loans',
      description: 'Get pre-qualified for auto financing',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Shield,
      title: 'Insurance Quotes',
      description: 'Compare insurance options and save',
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Credit Offers Matched to You
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See personalized offers without impacting your credit score
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <Link
              key={offer.title}
              href="#"
              className="group rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-primary-200 hover:shadow-lg"
            >
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${offer.color}`}>
                <offer.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-primary-600">
                {offer.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{offer.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600">
                View Offers
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// EDUCATIONAL CONTENT SECTION
// ============================================
function EducationalSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Plan your next big purchase */}
          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/use-cases/equifax-homepage/edu-purchase.jpg"
                alt="Woman planning a purchase on laptop"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Plan Your Next Big Purchase
              </h3>
              <p className="mt-4 text-gray-600">
                Whether you&apos;re buying a home, car, or making another major purchase,
                understanding your credit can help you get better rates and terms.
              </p>
              <Link
                href="#"
                className="mt-6 inline-flex items-center font-semibold text-primary-600 hover:text-primary-700"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Learn more about protection */}
          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/use-cases/equifax-homepage/edu-identity.jpg"
                alt="Person reviewing identity protection options"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Learn More About Protection
              </h3>
              <p className="mt-4 text-gray-600">
                Identity theft can happen to anyone. Learn how to protect yourself
                and your family from fraud and recover quickly if it happens.
              </p>
              <Link
                href="#"
                className="mt-6 inline-flex items-center font-semibold text-primary-600 hover:text-primary-700"
              >
                Explore Resources
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MOBILE APP SECTION
// ============================================
function MobileAppSection() {
  return (
    <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Image
              src="/images/use-cases/equifax-homepage/myequifax-logo.svg"
              alt="myEquifax"
              width={200}
              height={50}
              className="mx-auto h-12 w-auto lg:mx-0"
            />
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Navigate Your Credit Journey
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Download the myEquifax app to monitor your credit, lock your Equifax credit report,
              and get alerts on the go.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link href="#">
                <Image
                  src="/images/use-cases/equifax-homepage/apple-store.png"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/use-cases/equifax-homepage/google-store.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <Image
              src="/images/use-cases/equifax-homepage/phone-app.png"
              alt="myEquifax mobile app"
              width={300}
              height={400}
              className="w-64 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONSUMER SERVICES CENTER
// ============================================
function ConsumerServicesSection() {
  const services = [
    {
      icon: FileText,
      title: 'Get Free Credit Report',
      description: 'Request your free annual credit report',
      href: '#',
    },
    {
      icon: Lock,
      title: 'Place/Manage Freeze',
      description: 'Freeze or unfreeze your credit file',
      href: '#',
    },
    {
      icon: AlertTriangle,
      title: 'Add Fraud Alert',
      description: 'Place a fraud alert on your credit file',
      href: '#',
    },
    {
      icon: HelpCircle,
      title: 'Submit Dispute',
      description: 'Dispute information on your credit report',
      href: '#',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Consumer Services Center
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Quick access to manage your credit information
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-primary-200 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-primary-600">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================
function EquifaxFooter() {
  const footerLinks = {
    'Credit Help': [
      'Free Annual Credit Report',
      'Dispute on Your Credit Report',
      'Place or Manage a Freeze',
      'Fraud Alerts',
      'Active Duty Military',
      'Compare Products',
    ],
    'Learn': [
      'Credit Scores',
      'Credit Reports',
      'Fraud & Identity Theft',
      'Debt Management',
      'Credit Cards',
      'Personal Finance',
    ],
    'Business': [
      'Ignite Marketplace',
      'Market Pulse',
      'Business Blog',
      'Resources',
      'Developer Portal',
    ],
    'Company': [
      'Our Story',
      'Careers',
      'Newsroom',
      'Investor Relations',
      'Contact Us',
    ],
  };

  return (
    <footer className="bg-gray-900">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo column */}
          <div className="lg:col-span-1">
            <Image
              src="/logos/EFXlogo_white.svg"
              alt="Equifax"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <p className="mt-4 text-sm text-gray-400">
              Powering the world with knowledge
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-4">
              {['Twitter', 'YouTube', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label={social}
                >
                  <div className="h-5 w-5 rounded bg-gray-700" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {title}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link href="#" className="text-xs text-gray-400 hover:text-white">
                Accessibility
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-white">
                Terms of Use
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-white">
                Ad Choices
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-white">
                Sitemap
              </Link>
            </div>
            <p className="text-xs text-gray-500">
              Copyright 2026 Equifax Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function EquifaxHomepagePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Pattern page header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-marketing py-8">
          <Link
            href="/patterns/use-cases"
            className="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Use Cases
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                Consumer Website
              </span>
              <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Equifax.com Homepage
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-600">
                A complete rebuild of the Equifax consumer homepage using Signal3 design patterns,
                demonstrating how to create a cohesive brand experience with our component library.
              </p>
            </div>
            <Link
              href="https://www.equifax.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:inline-flex"
            >
              View Original
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Preview frame */}
      <div className="bg-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Live Preview</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Built with Signal3
            </div>
          </div>
        </div>
      </div>

      {/* Rebuilt Equifax Homepage */}
      <div className="border-y border-gray-200">
        <EquifaxNav />
        <HeroSection />
        <ProductComparisonSection />
        <CreditOffersSection />
        <EducationalSection />
        <MobileAppSection />
        <ConsumerServicesSection />
        <EquifaxFooter />
      </div>

      {/* Pattern documentation */}
      <div className="bg-white py-12">
        <div className="container-marketing">
          <h2 className="text-2xl font-bold text-gray-900">Patterns Used</h2>
          <p className="mt-2 text-gray-600">
            This page demonstrates the following Signal3 patterns and components:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Global Navigation',
                description: 'Multi-level navigation with utility bar, main nav, and mobile menu',
                link: '/patterns/navigation',
              },
              {
                name: 'Hero Section',
                description: 'Split hero with headline, description, CTAs, and featured image',
                link: '/patterns/hero',
              },
              {
                name: 'Pricing Cards',
                description: 'Product comparison cards with features, pricing, and CTAs',
                link: '/patterns/pricing',
              },
              {
                name: 'Feature Grid',
                description: 'Icon-based feature cards with hover interactions',
                link: '/patterns/sections',
              },
              {
                name: 'Split Content',
                description: 'Two-column educational content with images',
                link: '/patterns/split-content',
              },
              {
                name: 'App Promotion',
                description: 'Mobile app showcase with store badges',
                link: '/patterns/sections',
              },
            ].map((pattern) => (
              <Link
                key={pattern.name}
                href={pattern.link}
                className="rounded-xl border border-gray-200 p-6 transition-all hover:border-primary-200 hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-900">{pattern.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{pattern.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600">
                  View Pattern
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
