import Link from 'next/link';
import { Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Use', href: '#' },
  { name: 'FCRA Summary of Rights', href: '#' },
  { name: 'Accessibility', href: '#' },
  { name: 'About Us', href: '/about' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

const footerLinks = {
  product: [
    { name: 'Components', href: '/components' },
    { name: 'Foundations', href: '/foundations' },
    { name: 'Patterns', href: '/patterns' },
    { name: 'Use Cases', href: '/patterns/use-cases' },
  ],
  developers: [
    { name: 'Documentation', href: '/getting-started' },
    { name: 'API Reference', href: '/docs/api' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'Contributing', href: '/contributing' },
  ],
  platforms: [
    { name: 'Signal3 Web', href: '/platforms/web' },
    { name: 'Signal3 Mobile', href: '/platforms/mobile' },
    { name: 'Signal3 App', href: '/platforms/app' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Equifax', href: 'https://www.equifax.com' },
    { name: 'Careers', href: 'https://www.equifax.com/careers' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Developers</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Platforms</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.platforms.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal links and social */}
      <div className="border-t border-gray-800">
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
      </div>

      {/* Bottom section with copyright */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center gap-3 text-center md:flex-row md:text-left">
              <span className="text-lg font-bold tracking-tight text-white">
                EFX<span className="align-super text-xs">&reg;</span>
              </span>
              <p className="text-xs text-gray-500">
                Copyright {new Date().getFullYear()} Equifax Inc. All rights reserved. Equifax and the Equifax marks used herein are
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
