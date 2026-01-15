'use client';

import { motion } from 'framer-motion';
import {
  Palette,
  Code2,
  Smartphone,
  Accessibility,
  Zap,
  RefreshCw,
} from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Design Tokens',
    description:
      'Consistent colors, typography, spacing, and shadows across all platforms. Automatically synced from Figma.',
  },
  {
    icon: Code2,
    title: 'Developer Experience',
    description:
      'Copy-paste ready code snippets, TypeScript support, and comprehensive API documentation.',
  },
  {
    icon: Smartphone,
    title: 'Multi-Platform',
    description:
      'Components for web, React Native mobile, and desktop applications—all sharing the same design language.',
  },
  {
    icon: Accessibility,
    title: 'Accessible by Default',
    description:
      'WCAG 2.1 AA compliant components with proper ARIA attributes, keyboard navigation, and screen reader support.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description:
      'Tree-shakeable exports, lazy loading support, and optimized bundle sizes for production.',
  },
  {
    icon: RefreshCw,
    title: 'Figma Sync',
    description:
      'Design tokens automatically sync from Figma. Update styles once, see changes everywhere.',
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-marketing">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build faster
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Signal3 provides all the building blocks for creating consistent,
            beautiful experiences across Equifax products.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
