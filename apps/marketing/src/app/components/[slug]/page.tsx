import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Copy, ExternalLink, Figma } from 'lucide-react';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { PropsTable } from '@/components/docs/PropsTable';

// This would typically come from a CMS or MDX files
const componentData: Record<string, any> = {
  button: {
    name: 'Button',
    description: 'Buttons trigger actions and communicate what action will occur when the user interacts with them.',
    status: 'stable',
    package: '@signal3/web',
    version: '0.0.1',
    figmaLink: 'https://figma.com/file/...',
    category: 'Actions',
    props: [
      { name: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'destructive' | 'ghost' | 'link'", default: "'primary'", description: 'The visual style of the button' },
      { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'icon'", default: "'md'", description: 'The size of the button' },
      { name: 'isLoading', type: 'boolean', default: 'false', description: 'Shows a loading spinner and disables the button' },
      { name: 'leftIcon', type: 'ReactNode', default: 'undefined', description: 'Icon to display before the button text' },
      { name: 'rightIcon', type: 'ReactNode', default: 'undefined', description: 'Icon to display after the button text' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button' },
    ],
  },
  badge: {
    name: 'Badge',
    description: 'Badges are used to highlight an item\'s status for quick recognition.',
    status: 'stable',
    package: '@signal3/web',
    version: '0.0.1',
    category: 'Data Display',
    props: [
      { name: 'variant', type: "'gray' | 'primary' | 'error' | 'warning' | 'success'", default: "'gray'", description: 'The color variant of the badge' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'The size of the badge' },
      { name: 'dot', type: 'boolean', default: 'false', description: 'Show a dot indicator' },
      { name: 'icon', type: 'ReactNode', default: 'undefined', description: 'Icon to display before the badge text' },
    ],
  },
  input: {
    name: 'Input',
    description: 'Input fields allow users to enter and edit text.',
    status: 'stable',
    package: '@signal3/web',
    version: '0.0.1',
    category: 'Forms',
    props: [
      { name: 'variant', type: "'default' | 'error'", default: "'default'", description: 'The visual state of the input' },
      { name: 'inputSize', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'The size of the input' },
      { name: 'label', type: 'string', default: 'undefined', description: 'Label text above the input' },
      { name: 'hint', type: 'string', default: 'undefined', description: 'Helper text below the input' },
      { name: 'error', type: 'string', default: 'undefined', description: 'Error message (also sets variant to error)' },
      { name: 'leftElement', type: 'ReactNode', default: 'undefined', description: 'Element to display on the left' },
      { name: 'rightElement', type: 'ReactNode', default: 'undefined', description: 'Element to display on the right' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(componentData).map((slug) => ({ slug }));
}

export default function ComponentPage({ params }: { params: { slug: string } }) {
  const component = componentData[params.slug];

  if (!component) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container-marketing py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/components" className="text-gray-500 hover:text-gray-700">
              Components
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900">{component.name}</span>
          </nav>
        </div>
      </div>

      <div className="container-marketing py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          {/* Main Content */}
          <div className="min-w-0">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {component.name}
                  </h1>
                  <p className="mt-2 text-lg text-gray-600">
                    {component.description}
                  </p>
                </div>
                <span className="inline-flex shrink-0 rounded-md bg-success-50 px-2.5 py-0.5 text-sm font-medium text-success-700 ring-1 ring-inset ring-success-200">
                  {component.status}
                </span>
              </div>

              {/* Quick actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <code className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 font-mono text-sm text-gray-700">
                  {component.package}
                </code>
                {component.figmaLink && (
                  <a
                    href={component.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Figma className="h-4 w-4" />
                    View in Figma
                  </a>
                )}
              </div>
            </div>

            {/* Preview */}
            <section className="mb-12">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Preview</h2>
              <ComponentPreview componentName={component.name} />
            </section>

            {/* Installation */}
            <section className="mb-12">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Installation</h2>
              <CodeBlock
                code={`pnpm add ${component.package}`}
                language="bash"
              />
            </section>

            {/* Usage */}
            <section className="mb-12">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Usage</h2>
              <CodeBlock
                code={`import { ${component.name} } from '${component.package}';

export function Example() {
  return (
    <${component.name}>
      Content
    </${component.name}>
  );
}`}
                language="tsx"
              />
            </section>

            {/* Props */}
            <section className="mb-12">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Props</h2>
              <PropsTable props={component.props} />
            </section>

            {/* Accessibility */}
            <section className="mb-12">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">Accessibility</h2>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                    Follows WAI-ARIA design patterns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                    Keyboard navigation support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                    Screen reader compatible
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                    Focus management
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900">On this page</h3>
                <nav className="mt-4 space-y-2 text-sm">
                  <a href="#preview" className="block text-gray-600 hover:text-gray-900">
                    Preview
                  </a>
                  <a href="#installation" className="block text-gray-600 hover:text-gray-900">
                    Installation
                  </a>
                  <a href="#usage" className="block text-gray-600 hover:text-gray-900">
                    Usage
                  </a>
                  <a href="#props" className="block text-gray-600 hover:text-gray-900">
                    Props
                  </a>
                  <a href="#accessibility" className="block text-gray-600 hover:text-gray-900">
                    Accessibility
                  </a>
                </nav>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900">Resources</h3>
                <nav className="mt-4 space-y-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Source code
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Figma className="h-4 w-4" />
                    Figma design
                  </a>
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
