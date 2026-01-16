import Link from 'next/link';
import { ArrowRight, FileText, Building2, Briefcase } from 'lucide-react';

const useCases = [
  {
    title: 'AT&T Garnishments Service',
    description: 'A reference page for proper service of legal garnishments to AT&T entities through CT Corporation.',
    href: '/patterns/use-cases/att-garnishments',
    icon: Building2,
    tags: ['Legal', 'Data Table', 'Search'],
    sourceUrl: 'https://www.attgarnishments.com/',
  },
  {
    title: "Employer's Edge",
    description: 'Workforce solutions landing page showcasing unemployment cost control, I-9 management, and verification services.',
    href: '/patterns/use-cases/employers-edge',
    icon: Briefcase,
    tags: ['Landing Page', 'Cards', 'CTA'],
    sourceUrl: 'https://employersedge.com/',
  },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-marketing py-16">
          <Link
            href="/patterns"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowRight className="mr-1 h-4 w-4 rotate-180" />
            Back to Patterns
          </Link>
          <div className="mt-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Use Cases
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Real-World Use Cases
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Complete page recreations demonstrating how Signal3 components work together
            in production scenarios. Each use case includes source attribution.
          </p>
        </div>
      </div>

      <div className="container-marketing py-12">
        {/* Use Case Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Link
              key={useCase.title}
              href={useCase.href}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <useCase.icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
              </div>

              <h2 className="mt-6 text-xl font-semibold text-gray-900">
                {useCase.title}
              </h2>
              <p className="mt-2 text-gray-600">
                {useCase.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {useCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs text-gray-500">
                <FileText className="h-3 w-3" />
                <span>Source available</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <section className="mt-16 rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold text-gray-900">About Use Cases</h2>
          <p className="mt-2 text-gray-600">
            Use cases demonstrate how Signal3 patterns combine to create complete,
            functional pages. Each example is inspired by a real-world website and
            rebuilt using our design system.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">Attribution</h3>
              <p className="mt-1 text-sm text-gray-600">
                Each use case links to its original source for reference.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">Components</h3>
              <p className="mt-1 text-sm text-gray-600">
                Built entirely with Signal3 components and patterns.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900">Copy-Ready</h3>
              <p className="mt-1 text-sm text-gray-600">
                All code is available to copy and adapt for your projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
