import Link from 'next/link';

const footerLinks = {
  product: [
    { name: 'Components', href: '/components' },
    { name: 'Foundations', href: '/foundations' },
    { name: 'Patterns', href: '/patterns' },
    { name: 'Resources', href: '/resources' },
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
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-marketing py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Developers</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.developers.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Platforms</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.platforms.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
              <span className="text-lg font-bold text-white">S3</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Signal3</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Equifax Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
