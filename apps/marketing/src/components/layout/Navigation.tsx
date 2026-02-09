'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ShoppingCart,
  Bell,
  Grid3X3,
  User,
} from 'lucide-react';

const navigation = [
  { name: 'Components', href: '/components' },
  { name: 'Foundations', href: '/foundations' },
  { name: 'Patterns', href: '/patterns' },
  { name: 'Use Cases', href: '/patterns/use-cases' },
];

function IconWithBadge({
  children,
  count,
  showBadge = true,
}: {
  children: React.ReactNode;
  count?: number;
  showBadge?: boolean;
}) {
  return (
    <span className="relative inline-flex">
      {children}
      {showBadge && (
        <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-orange-500 text-[9px] font-bold text-white">
          {count !== undefined ? (count > 9 ? '9+' : count) : ''}
        </span>
      )}
    </span>
  );
}

function UserAvatar({ initials = 'JD', imageUrl }: { initials?: string; imageUrl?: string }) {
  return (
    <div className="relative h-7 w-7 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
      {imageUrl ? (
        <Image src={imageUrl} alt="User avatar" fill className="object-cover" />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-[10px] font-semibold text-white">
          {initials}
        </span>
      )}
    </div>
  );
}

// Account dropdown menu items
const accountMenuItems = [
  { name: 'My Profile', href: '#' },
  { name: 'Account Settings', href: '#' },
  { name: 'Billing & Subscription', href: '#' },
  { name: 'API Keys', href: '#' },
  { name: 'Team Members', href: '#' },
  { divider: true },
  { name: 'Help Center', href: '#' },
  { name: 'Documentation', href: '#' },
  { divider: true },
  { name: 'Sign Out', href: '#', danger: true },
];

function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="flex items-center gap-1.5 rounded p-1 hover:bg-gray-800"
      >
        <UserAvatar initials="S3" />
        <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
          {/* User Info Header */}
          <div className="border-b border-gray-100 px-4 pb-3 pt-1">
            <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
            <p className="text-xs text-gray-500">sarah.johnson@equifax.com</p>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            {accountMenuItems.map((item, index) =>
              item.divider ? (
                <div key={index} className="my-1 border-t border-gray-100" />
              ) : (
                <Link
                  key={item.name}
                  href={item.href || '#'}
                  className={`block px-4 py-2 text-sm ${
                    item.danger
                      ? 'text-red-600 hover:bg-red-50'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    // Use Cases is a special case - check it first
    if (href === '/patterns/use-cases') {
      return pathname.startsWith('/patterns/use-cases');
    }
    // For /patterns, exclude use-cases subpaths
    if (href === '/patterns') {
      return pathname === '/patterns' || (pathname.startsWith('/patterns/') && !pathname.startsWith('/patterns/use-cases'));
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top dark bar for developer context */}
      <div className="bg-gray-900">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-white">Signal3</span>
            <span className="text-gray-600">|</span>
            <Link href="/getting-started" className="text-sm text-gray-400 hover:text-white">
              Documentation
            </Link>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            {/* App Switcher */}
            <button className="flex items-center justify-center rounded p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
              <Grid3X3 className="h-4 w-4" />
            </button>
            {/* Notifications with badge */}
            <button className="flex items-center justify-center rounded p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
              <IconWithBadge count={3}>
                <Bell className="h-4 w-4" />
              </IconWithBadge>
            </button>
            {/* Cart with badge */}
            <button className="flex items-center justify-center rounded p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
              <IconWithBadge count={2}>
                <ShoppingCart className="h-4 w-4" />
              </IconWithBadge>
            </button>
            {/* User Account Dropdown */}
            <AccountDropdown />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/EFXlogo_red.svg"
              alt="Equifax"
              width={140}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Blue themed links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-blue-600 hover:text-blue-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/getting-started"
              className="px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
            >
              Get Started
            </Link>
            <Link
              href="/components"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Explore
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    isActive(item.href)
                      ? 'bg-blue-50 font-medium text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-100 pt-4">
                <Link
                  href="/getting-started"
                  className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
                <Link
                  href="/components"
                  className="mt-2 block rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
