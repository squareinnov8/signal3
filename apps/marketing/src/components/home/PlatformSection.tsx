'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor } from 'lucide-react';

const platforms = [
  {
    icon: Globe,
    name: 'Signal3 Web',
    package: '@signal3/web',
    description:
      'React components optimized for web applications. Built with Tailwind CSS and fully tree-shakeable.',
    features: ['React 18+', 'Tailwind CSS', 'TypeScript', 'SSR Ready'],
  },
  {
    icon: Smartphone,
    name: 'Signal3 Mobile',
    package: '@signal3/mobile',
    description:
      'React Native components for iOS and Android. Native performance with a consistent design language.',
    features: ['React Native', 'iOS & Android', 'Expo Compatible', 'TypeScript'],
  },
  {
    icon: Monitor,
    name: 'Signal3 App',
    package: '@signal3/app',
    description:
      'Desktop application components for Electron and Tauri. Native-feeling experiences for desktop.',
    features: ['Electron', 'Tauri', 'Cross-Platform', 'Native Menus'],
  },
];

export function PlatformSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-marketing">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            One design system, every platform
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Signal3 provides dedicated packages for web, mobile, and desktop
            applications—all sharing the same design tokens and visual language.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="relative rounded-2xl border border-gray-200 bg-white p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                <platform.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {platform.name}
              </h3>
              <code className="mt-2 inline-block rounded bg-gray-100 px-2 py-1 font-mono text-sm text-gray-700">
                {platform.package}
              </code>
              <p className="mt-4 text-gray-600">{platform.description}</p>
              <ul className="mt-6 space-y-2">
                {platform.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <svg
                      className="h-4 w-4 text-success-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
