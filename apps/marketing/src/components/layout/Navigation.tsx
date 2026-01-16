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
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
          {count !== undefined ? (count > 9 ? '9+' : count) : ''}
        </span>
      )}
    </span>
  );
}

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

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/patterns/use-cases') {
      return pathname.startsWith('/patterns/use-cases');
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top dark bar for developer context */}
      <div className="bg-gray-900">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-white">Signal3</span>
            <span className="text-gray-600">|</span>
            <Link href="/getting-started" className="text-sm text-gray-400 hover:text-white">
              Documentation
            </Link>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
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
              <UserAvatar initials="S3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight text-primary-600">
              EQUIFAX<span className="align-super text-xs">&reg;</span>
            </span>
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
