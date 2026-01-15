'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  ArrowLeft,
  ChevronDown,
  ShoppingCart,
  Bell,
  Grid3X3,
  User,
  Menu,
  X,
  Home,
  ChevronRight,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from 'lucide-react';

// ============================================
// MARKETPLACE HEADER - Primary Navigation
// ============================================
function MarketplaceHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSolutionsDropdown, setActiveSolutionsDropdown] = useState(false);

  const solutionItems = [
    { name: 'Credit Risk', href: '#' },
    { name: 'Consumer Engagement', href: '#' },
    { name: 'Identity & Fraud', href: '#' },
    { name: 'Workforce Management', href: '#' },
    { name: 'Data-driven Marketing', href: '#' },
    { name: 'Verification', href: '#' },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="text-2xl font-bold tracking-tight text-primary-600">
            EQUIFAX<span className="align-super text-xs">&reg;</span>
          </span>
        </Link>

        {/* Desktop Navigation - Blue themed links */}
        <div className="hidden items-center gap-1 lg:flex">
          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => setActiveSolutionsDropdown(!activeSolutionsDropdown)}
              onBlur={() => setTimeout(() => setActiveSolutionsDropdown(false), 200)}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
            >
              Solutions
              <ChevronDown className={`h-4 w-4 transition-transform ${activeSolutionsDropdown ? 'rotate-180' : ''}`} />
            </button>

            {activeSolutionsDropdown && (
              <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                {solutionItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Static Links - Blue with blue underline for active */}
          <Link
            href="#"
            className="border-b-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-600"
          >
            Products
          </Link>
          <Link
            href="#"
            className="px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
          >
            Get Started
          </Link>
          <Link
            href="#"
            className="px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <Link
            href="#"
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            <div className="border-b border-gray-100 pb-2">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Solutions
              </p>
              {solutionItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link href="#" className="block rounded-lg px-3 py-2 text-sm font-medium text-blue-600">
              Products
            </Link>
            <Link href="#" className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Get Started
            </Link>
            <Link href="#" className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Contact Us
            </Link>
            <div className="border-t border-gray-100 pt-4">
              <Link
                href="#"
                className="block rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ============================================
// BREADCRUMB NAVIGATION
// ============================================
function Breadcrumb() {
  return (
    <nav className="border-b border-gray-200 bg-gray-50">
      <div className="mx-auto flex h-10 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              <Home className="h-4 w-4" />
            </Link>
          </li>
          <li className="text-gray-400">
            <ChevronRight className="h-4 w-4" />
          </li>
          <li>
            <span className="font-medium text-gray-900">Current Page</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

// ============================================
// MARKETPLACE FOOTER
// ============================================
function MarketplaceFooter() {
  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Use', href: '#' },
    { name: 'FCRA Summary of Rights', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'About Us', href: '#' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-gray-900">
      {/* Top section with links and social */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Legal Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section with copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
              <span className="text-lg font-bold tracking-tight text-white">
                EFX<span className="align-super text-xs">&reg;</span>
              </span>
              <p className="text-xs text-gray-500">
                Copyright 2024 Equifax Inc. All rights reserved. Equifax and the Equifax marks used herein are
                trademarks of Equifax Inc. Other product and company names mentioned herein are the property of
                their respective owners.
              </p>
            </div>

            {/* Tagline */}
            <p className="whitespace-nowrap text-sm italic text-gray-400">
              powering the world with knowledge<sup>&trade;</sup>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// ICON WITH BADGE COMPONENT
// ============================================
function IconWithBadge({
  children,
  count,
  showBadge = true
}: {
  children: React.ReactNode;
  count?: number;
  showBadge?: boolean;
}) {
  return (
    <span className="relative inline-flex">
      {children}
      {showBadge && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
          {count !== undefined ? (count > 9 ? '9+' : count) : ''}
        </span>
      )}
    </span>
  );
}

// ============================================
// USER AVATAR COMPONENT
// ============================================
function UserAvatar({ initials = 'JD', imageUrl }: { initials?: string; imageUrl?: string }) {
  return (
    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
      {imageUrl ? (
        <Image src={imageUrl} alt="User avatar" fill className="object-cover" />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-white">
          {initials}
        </span>
      )}
    </div>
  );
}

// ============================================
// DEVELOPER HEADER VARIANT (with sub-navigation)
// ============================================
function DeveloperHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSolutionsDropdown, setActiveSolutionsDropdown] = useState(false);

  const solutionItems = [
    { name: 'Credit Risk', href: '#' },
    { name: 'Consumer Engagement', href: '#' },
    { name: 'Identity & Fraud', href: '#' },
    { name: 'Workforce Management', href: '#' },
    { name: 'Data-driven Marketing', href: '#' },
    { name: 'Verification', href: '#' },
  ];

  return (
    <div className="w-full">
      {/* Top dark bar for developer context */}
      <div className="bg-gray-900">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-white">Developers</span>
            <span className="text-gray-600">|</span>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              API Documentation
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {/* App Switcher */}
            <button className="rounded p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white">
              <Grid3X3 className="h-5 w-5" />
            </button>
            {/* Notifications with badge */}
            <button className="rounded p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white">
              <IconWithBadge count={3}>
                <Bell className="h-5 w-5" />
              </IconWithBadge>
            </button>
            {/* Cart with badge */}
            <button className="rounded p-1.5 text-gray-400 hover:bg-gray-800 hover:text-white">
              <IconWithBadge count={2}>
                <ShoppingCart className="h-5 w-5" />
              </IconWithBadge>
            </button>
            {/* User Avatar */}
            <button className="ml-1">
              <UserAvatar initials="JD" />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="w-full bg-white shadow-sm">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight text-primary-600">
              EQUIFAX<span className="align-super text-xs">&reg;</span>
            </span>
          </Link>

          {/* Desktop Navigation - Blue themed links */}
          <div className="hidden items-center gap-1 lg:flex">
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveSolutionsDropdown(!activeSolutionsDropdown)}
                onBlur={() => setTimeout(() => setActiveSolutionsDropdown(false), 200)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${activeSolutionsDropdown ? 'rotate-180' : ''}`} />
              </button>

              {activeSolutionsDropdown && (
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                  {solutionItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Static Links - Blue with blue underline for active */}
            <Link
              href="#"
              className="border-b-2 border-blue-600 px-4 py-2 text-sm font-medium text-blue-600"
            >
              Products
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
            >
              Contact Us
            </Link>
          </div>

          {/* Empty div for spacing on desktop (icons are in top bar) */}
          <div className="hidden lg:block" />

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <div className="space-y-1 px-4 py-4">
              <div className="border-b border-gray-100 pb-2">
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Solutions
                </p>
                {solutionItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link href="#" className="block rounded-lg px-3 py-2 text-sm font-medium text-blue-600">
                Products
              </Link>
              <Link href="#" className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Get Started
              </Link>
              <Link href="#" className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Contact Us
              </Link>
              <div className="border-t border-gray-100 pt-4">
                <Link
                  href="#"
                  className="block rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

// ============================================
// HERO SECTION (Marketplace Style)
// ============================================
function MarketplaceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-primary-900 py-16 lg:py-24">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/patterns/circledots_white.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Unlock the Power of Data with Equifax APIs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Whether you&apos;re looking to assess credit risk, verify identities, or understand consumer
            behavior, our catalog of Solutions offers the tools you need to stay ahead in an ever-changing
            marketplace.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full rounded-lg border-0 bg-white/10 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-primary-600 px-6 py-2 text-sm font-semibold text-white hover:bg-primary-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PATTERN VARIANTS
// ============================================
const navigationVariants = [
  { id: 'marketplace', name: 'Marketplace Header', description: 'Standard marketplace navigation with dropdown' },
  { id: 'developer', name: 'Developer Portal', description: 'Header with top utility bar for logged-in users' },
  { id: 'hero', name: 'Hero Section', description: 'Marketplace hero with gradient and search' },
  { id: 'footer', name: 'Footer', description: 'Dark footer with legal links and social icons' },
];

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function NavigationPatternsPage() {
  const [activeVariant, setActiveVariant] = useState('marketplace');

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
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Global Navigation</h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Marketplace-style navigation components based on Equifax developer portal designs.
            Use these for consistent navigation across applications.
          </p>
        </div>
      </div>

      {/* Variant Selector */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white">
        <div className="container-marketing">
          <div className="flex gap-2 overflow-x-auto py-4">
            {navigationVariants.map((variant) => (
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
        {activeVariant === 'marketplace' && (
          <div className="bg-gray-100">
            <MarketplaceHeader />
            <Breadcrumb />
            <div className="h-64 bg-gray-50" />
          </div>
        )}
        {activeVariant === 'developer' && (
          <div className="bg-gray-100">
            <DeveloperHeader />
            <Breadcrumb />
            <div className="h-64 bg-gray-50" />
          </div>
        )}
        {activeVariant === 'hero' && (
          <div className="bg-gray-100">
            <MarketplaceHeader />
            <MarketplaceHero />
          </div>
        )}
        {activeVariant === 'footer' && (
          <div className="bg-gray-100">
            <div className="h-64 bg-gray-50" />
            <MarketplaceFooter />
          </div>
        )}
      </div>

      {/* Usage Guidelines */}
      <div className="container-marketing py-12">
        <h2 className="text-2xl font-bold text-gray-900">Navigation Anatomy</h2>
        <p className="mt-2 text-gray-600">
          The global navigation follows Equifax marketplace design patterns.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
              <span className="text-lg font-bold text-primary-600">1</span>
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Logo</h3>
            <p className="mt-2 text-sm text-gray-600">
              Equifax wordmark in primary red, positioned on the left. Links to homepage.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
              <span className="text-lg font-bold text-primary-600">2</span>
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Primary Nav</h3>
            <p className="mt-2 text-sm text-gray-600">
              Solutions dropdown, Products, Get Started, Contact Us. Active state uses bottom border.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
              <span className="text-lg font-bold text-primary-600">3</span>
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Actions</h3>
            <p className="mt-2 text-sm text-gray-600">
              Cart icon and Sign up button on the right. Developer variant adds utility icons.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
              <span className="text-lg font-bold text-primary-600">4</span>
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Breadcrumb</h3>
            <p className="mt-2 text-sm text-gray-600">
              Compact secondary navigation showing current location. Uses home icon and chevron separators.
            </p>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Implementation</h2>
          <p className="mt-2 text-gray-600">
            Copy these components into your application and customize as needed.
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Header Structure</span>
              <button className="rounded bg-gray-700 px-3 py-1 text-xs text-gray-300 hover:bg-gray-600">
                Copy
              </button>
            </div>
            <pre className="mt-4 overflow-x-auto text-sm text-gray-300">
              <code>{`<header className="w-full bg-white shadow-sm">
  <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
    {/* Logo */}
    <Link href="/" className="flex-shrink-0">
      <span className="text-2xl font-bold text-primary-600">
        EQUIFAX<span className="align-super text-xs">&reg;</span>
      </span>
    </Link>

    {/* Navigation Links */}
    <div className="hidden lg:flex items-center gap-1">
      {/* Solutions Dropdown */}
      <DropdownMenu />

      {/* Static Links with active state */}
      <Link className="border-b-2 border-primary-600 ...">Products</Link>
      <Link>Get Started</Link>
      <Link>Contact Us</Link>
    </div>

    {/* Actions */}
    <div className="hidden lg:flex items-center gap-2">
      <ShoppingCart />
      <Link className="bg-primary-600 ...">Sign up</Link>
    </div>
  </nav>
</header>`}</code>
            </pre>
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-900 p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Footer Structure</span>
              <button className="rounded bg-gray-700 px-3 py-1 text-xs text-gray-300 hover:bg-gray-600">
                Copy
              </button>
            </div>
            <pre className="mt-4 overflow-x-auto text-sm text-gray-300">
              <code>{`<footer className="bg-gray-900">
  {/* Top section */}
  <div className="mx-auto max-w-7xl px-4 py-8">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Legal Links */}
      <nav className="flex flex-wrap gap-x-6 gap-y-2">
        <Link className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
        <Link>Terms of Use</Link>
        {/* ... more links */}
      </nav>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <Link><Facebook /></Link>
        <Link><Twitter /></Link>
        {/* ... more icons */}
      </div>
    </div>
  </div>

  {/* Bottom section */}
  <div className="border-t border-gray-800">
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-white">EFX&reg;</span>
          <p className="text-xs text-gray-500">Copyright 2024...</p>
        </div>
        <p className="text-sm italic text-gray-400">
          powering the world with knowledge&trade;
        </p>
      </div>
    </div>
  </div>
</footer>`}</code>
            </pre>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Best Practices</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-semibold text-green-900">Do</h3>
              <ul className="mt-4 space-y-2 text-sm text-green-800">
                <li>Use the primary red color (#9e1b32) for the Equifax logo</li>
                <li>Use blue (#007298) for navigation link text</li>
                <li>Show active nav state with blue bottom border</li>
                <li>Add orange notification badges to cart/bell icons</li>
                <li>Use circular avatar for logged-in user profile</li>
                <li>Include app switcher (grid icon) in developer portal</li>
                <li>Keep navigation items to 4-5 primary links maximum</li>
                <li>Use dark footer with gray-900 background</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
              <h3 className="font-semibold text-red-900">Don&apos;t</h3>
              <ul className="mt-4 space-y-2 text-sm text-red-800">
                <li>Don&apos;t use custom colors for the logo</li>
                <li>Don&apos;t use gray text for main navigation links</li>
                <li>Don&apos;t omit notification badges when counts exist</li>
                <li>Don&apos;t overcrowd the navigation with too many items</li>
                <li>Don&apos;t use multi-level nested dropdowns</li>
                <li>Don&apos;t hide the Sign up CTA on desktop</li>
                <li>Don&apos;t omit the breadcrumb on interior pages</li>
                <li>Don&apos;t use light footer backgrounds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
