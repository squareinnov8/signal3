'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Github } from 'lucide-react';

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden bg-primary-600">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary-500/50 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-primary-700/50 blur-3xl" />
      </div>

      <div className="container-marketing">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to build with Signal3?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-100">
            Start creating consistent, beautiful experiences across all Equifax
            products. Get started in minutes with our comprehensive documentation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/getting-started"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-lg transition-all hover:bg-gray-50"
            >
              <BookOpen className="h-5 w-5" />
              Read Documentation
            </Link>
            <Link
              href="/components"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Browse Components
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Quick install */}
          <div className="mt-12">
            <p className="text-sm font-medium text-primary-200">Quick install</p>
            <div className="mt-3 inline-flex items-center rounded-lg bg-primary-700/50 px-4 py-3 font-mono text-sm text-white backdrop-blur">
              <code>pnpm add @signal3/web @signal3/core</code>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
