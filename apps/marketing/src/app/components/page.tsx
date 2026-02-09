import Link from 'next/link';
import { Search } from 'lucide-react';

const componentCategories = [
  {
    name: 'Actions',
    description: 'Interactive elements that trigger actions',
    components: [
      { name: 'Button', status: 'stable', description: 'Trigger actions and submit forms' },
      { name: 'IconButton', status: 'stable', description: 'Compact buttons with icons' },
      { name: 'ButtonGroup', status: 'beta', description: 'Group related buttons together' },
    ],
  },
  {
    name: 'Forms',
    description: 'Input components for collecting data',
    components: [
      { name: 'Input', status: 'stable', description: 'Single-line text input field' },
      { name: 'Textarea', status: 'stable', description: 'Multi-line text input' },
      { name: 'Select', status: 'stable', description: 'Dropdown selection' },
      { name: 'Checkbox', status: 'stable', description: 'Boolean selection control' },
      { name: 'Radio', status: 'stable', description: 'Single selection from options' },
      { name: 'Switch', status: 'stable', description: 'Toggle on/off states' },
    ],
  },
  {
    name: 'Data Display',
    description: 'Components for presenting information',
    components: [
      { name: 'Badge', status: 'stable', description: 'Status indicators and labels' },
      { name: 'Avatar', status: 'stable', description: 'User profile images' },
      { name: 'Card', status: 'stable', description: 'Content containers' },
      { name: 'Table', status: 'beta', description: 'Tabular data display' },
      { name: 'List', status: 'stable', description: 'Ordered and unordered lists' },
    ],
  },
  {
    name: 'Feedback',
    description: 'Communicate status and messages',
    components: [
      { name: 'Alert', status: 'stable', description: 'Important messages and warnings' },
      { name: 'Toast', status: 'beta', description: 'Temporary notifications' },
      { name: 'Progress', status: 'stable', description: 'Loading and progress indicators' },
      { name: 'Skeleton', status: 'stable', description: 'Loading placeholder' },
    ],
  },
  {
    name: 'Navigation',
    description: 'Help users move through the application',
    components: [
      { name: 'Tabs', status: 'stable', description: 'Switch between views' },
      { name: 'Breadcrumb', status: 'stable', description: 'Show navigation hierarchy' },
      { name: 'Pagination', status: 'stable', description: 'Navigate through pages' },
      { name: 'Navbar', status: 'beta', description: 'Top navigation bar' },
    ],
  },
  {
    name: 'Overlay',
    description: 'Content that appears above the page',
    components: [
      { name: 'Modal', status: 'stable', description: 'Dialog windows' },
      { name: 'Dropdown', status: 'stable', description: 'Contextual menus' },
      { name: 'Tooltip', status: 'stable', description: 'Helpful hints on hover' },
      { name: 'Popover', status: 'stable', description: 'Rich content popovers' },
    ],
  },
  {
    name: 'Communication',
    description: 'Enable real-time messaging and conversations',
    components: [
      { name: 'Chat', status: 'beta', description: 'Interactive messaging interface' },
    ],
  },
];

const statusColors = {
  stable: 'bg-success-50 text-success-700 ring-success-200',
  beta: 'bg-warning-50 text-warning-700 ring-warning-200',
  alpha: 'bg-gray-50 text-gray-600 ring-gray-200',
  deprecated: 'bg-error-50 text-error-700 ring-error-200',
};

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-marketing py-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Components
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            A comprehensive library of accessible, customizable components built
            with Untitled UI and themed for Equifax.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search components..."
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm shadow-sm placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Component Grid */}
      <div className="container-marketing py-12">
        <div className="space-y-16">
          {componentCategories.map((category) => (
            <section key={category.name}>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {category.name}
                </h2>
                <p className="mt-1 text-gray-600">{category.description}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.components.map((component) => (
                  <Link
                    key={component.name}
                    href={`/components/${component.name.toLowerCase()}`}
                    className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary-200 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600">
                        {component.name}
                      </h3>
                      <span
                        className={`inline-flex rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${statusColors[component.status as keyof typeof statusColors]}`}
                      >
                        {component.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {component.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
