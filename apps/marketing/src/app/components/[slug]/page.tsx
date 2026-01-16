import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ExternalLink, Figma, Bot, Sparkles } from 'lucide-react';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { PropsTable } from '@/components/docs/PropsTable';
import { CopyButton } from '@/components/docs/CopyButton';

// ============================================================================
// AI BUILDER DIRECTIVE TYPES
// ============================================================================

interface AIDirective {
  componentId: string;
  semanticRole: string;
  description: string;
  useWhen: string[];
  doNotUseWhen: string[];
  contextPatterns: string[];
  commonPairings: string[];
  variantGuidance: Record<string, string>;
  accessibilityRequirements: string[];
  contentGuidelines: string[];
  layoutConstraints: string[];
}

// ============================================================================
// SIGNAL3 COMPONENT DATA WITH AI DIRECTIVES
// ============================================================================

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
    aiDirectives: {
      componentId: 's3-button',
      semanticRole: 'action-trigger',
      description: 'Interactive element that triggers an action when clicked. Primary UI control for user-initiated operations.',
      useWhen: [
        'User needs to submit a form',
        'User needs to trigger a state change (save, delete, update)',
        'User needs to navigate to complete an action (checkout, signup)',
        'User needs to open a modal or dialog',
        'User needs to confirm or cancel an operation',
        'Call-to-action is needed in hero sections or cards',
      ],
      doNotUseWhen: [
        'Navigation without action side-effects (use Link component)',
        'Toggling between two states (use Switch or Toggle)',
        'Selecting from options (use Radio, Checkbox, or Select)',
        'Space is severely limited (use IconButton)',
        'Action is purely informational (use Badge or text)',
      ],
      contextPatterns: [
        'Hero sections: Use primary variant with size lg or xl',
        'Forms: Use primary for submit, secondary/tertiary for cancel',
        'Cards: Use secondary or ghost variant, size sm or md',
        'Dialogs: Primary for confirm, tertiary for cancel/dismiss',
        'Tables: Use ghost or link variant, size sm',
        'Toolbars: Use icon size with ghost variant',
      ],
      commonPairings: [
        'Input: Button submits form containing inputs',
        'Card: Button in CardFooter for card actions',
        'Modal: Primary + tertiary button pair for confirm/cancel',
        'Badge: Badge next to button to show status of action',
        'Avatar: Button triggers profile-related actions',
      ],
      variantGuidance: {
        primary: 'Main action on page. Limit to ONE per viewport. Use for: Sign up, Submit, Get Started, Buy Now.',
        secondary: 'Supporting actions. Pairs with primary. Use for: Learn More, View Details, Save Draft.',
        tertiary: 'De-emphasized actions. Use for: Cancel, Skip, Back, Reset.',
        destructive: 'Irreversible/dangerous actions. Use for: Delete, Remove, Revoke. Always require confirmation.',
        ghost: 'Minimal emphasis. Use in toolbars, tables, or dense UIs where buttons should not compete for attention.',
        link: 'Text-styled action. Use when action should look like navigation but triggers side-effects.',
      },
      accessibilityRequirements: [
        'Must have visible focus indicator (built-in)',
        'Must have minimum touch target of 44x44px for mobile (use size md or larger)',
        'Loading state must announce to screen readers',
        'Disabled buttons must not be focusable',
        'Button text must clearly describe the action',
      ],
      contentGuidelines: [
        'Use action verbs: "Save", "Delete", "Submit" not "Okay" or "Yes"',
        'Keep text concise: 1-3 words ideal, max 5 words',
        'Use sentence case: "Get started" not "GET STARTED"',
        'Avoid ambiguous text like "Click here" or "Submit"',
        'Icon-only buttons must have aria-label',
      ],
      layoutConstraints: [
        'Minimum width: content + 32px horizontal padding',
        'Button groups: max 3 buttons, primary always rightmost',
        'Spacing between buttons: 12px (gap-3)',
        'Full-width only in mobile viewports or card footers',
      ],
    } as AIDirective,
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
    aiDirectives: {
      componentId: 's3-badge',
      semanticRole: 'status-indicator',
      description: 'Non-interactive label that communicates status, category, or metadata about an item.',
      useWhen: [
        'Displaying item status (Active, Pending, Archived)',
        'Showing counts or quantities (3 items, 99+ notifications)',
        'Categorizing content (New, Featured, Beta)',
        'Indicating data types or tags (PDF, Image, Required)',
        'Highlighting important metadata inline with text',
        'Showing notification counts on icons or avatars',
      ],
      doNotUseWhen: [
        'User needs to take action (use Button)',
        'Content is the main message (use Alert or Banner)',
        'Status needs detailed explanation (use Tooltip with Badge)',
        'Filtering content (use Chip or Tag with remove action)',
        'Showing progress (use Progress component)',
      ],
      contextPatterns: [
        'Tables: Show row status in dedicated column',
        'Cards: Position in top-right or after title',
        'Lists: Align right or after item name',
        'Navigation: Notification count on menu items',
        'Avatars: Overlay for online/offline status',
        'Headers: Next to page title for beta/new features',
      ],
      commonPairings: [
        'Avatar: Status badge overlay (online/offline)',
        'Card: Category or status badge in header',
        'Table: Status column with colored badges',
        'Button: Badge count on icon buttons',
        'Input: Required/optional badge near label',
      ],
      variantGuidance: {
        gray: 'Neutral status. Use for: Draft, Inactive, Archived, default category.',
        primary: 'Brand-related status. Use for: Featured, Promoted, Selected.',
        error: 'Negative status. Use for: Failed, Error, Rejected, Overdue.',
        warning: 'Cautionary status. Use for: Pending, Review, Expiring Soon.',
        success: 'Positive status. Use for: Active, Approved, Complete, Published.',
      },
      accessibilityRequirements: [
        'Color must not be only indicator - include text or icon',
        'Sufficient contrast between badge and background',
        'Screen readers should announce badge content',
        'Avoid using badge for critical-only information',
      ],
      contentGuidelines: [
        'Keep text to 1-2 words maximum',
        'Use consistent terminology across the app',
        'Use sentence case: "In progress" not "IN PROGRESS"',
        'Numbers over 99 should show as "99+"',
        'Use dot variant when text would be redundant',
      ],
      layoutConstraints: [
        'Do not stack more than 3 badges horizontally',
        'Maintain 4-8px spacing between badges',
        'Align badges consistently within lists/tables',
        'Size sm for dense UIs, md for standard, lg for emphasis',
      ],
    } as AIDirective,
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
    aiDirectives: {
      componentId: 's3-input',
      semanticRole: 'text-entry',
      description: 'Form control that accepts single-line text input from users.',
      useWhen: [
        'Collecting short text data (name, email, phone)',
        'Search functionality',
        'Filtering or querying data',
        'Single-line user input in forms',
        'URL or code entry',
        'Numeric input with text formatting',
      ],
      doNotUseWhen: [
        'Multi-line text needed (use Textarea)',
        'Selecting from predefined options (use Select)',
        'Yes/no or on/off input (use Checkbox or Switch)',
        'Date or time input (use DatePicker)',
        'File upload (use FileUpload)',
        'Rich text formatting needed (use RichTextEditor)',
      ],
      contextPatterns: [
        'Forms: Always include label, use hint for format guidance',
        'Search: Use leftElement for search icon, omit label',
        'Filters: Size sm, inline with other controls',
        'Login: Size lg for prominence, clear labels',
        'Tables: Size sm for inline editing',
        'Settings: Grouped with related inputs, consistent sizing',
      ],
      commonPairings: [
        'Button: Submit button follows input or input group',
        'Badge: Required/optional badge near label',
        'Select: Often paired in forms for related data',
        'Card: Input inside card for focused data entry',
        'Avatar: Profile forms with avatar and name input',
      ],
      variantGuidance: {
        default: 'Standard state. Use for normal input with no validation issues.',
        error: 'Validation failed. Always pair with error message explaining the issue.',
      },
      accessibilityRequirements: [
        'Must have associated label (visible or aria-label)',
        'Error messages must be programmatically associated',
        'Placeholder is NOT a replacement for label',
        'Focus must be clearly visible',
        'Required fields must be indicated',
      ],
      contentGuidelines: [
        'Labels: Clear, concise noun phrases ("Email address" not "Enter your email")',
        'Placeholders: Example format only ("john@example.com")',
        'Hints: Format requirements or helpful context',
        'Errors: Specific, actionable ("Enter a valid email" not "Invalid")',
        'Never put instructions only in placeholder',
      ],
      layoutConstraints: [
        'Minimum width: 200px for usability',
        'Maximum width: 400px for single fields, full-width in narrow containers',
        'Stack labels above inputs, not inline (except very short labels)',
        'Spacing between form fields: 16-24px',
        'Group related inputs with consistent alignment',
      ],
    } as AIDirective,
  },
  card: {
    name: 'Card',
    description: 'Cards group related content and actions about a single subject.',
    status: 'stable',
    package: '@signal3/web',
    version: '0.0.1',
    category: 'Data Display',
    props: [
      { name: 'variant', type: "'default' | 'outlined' | 'elevated'", default: "'default'", description: 'The visual style of the card' },
      { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Internal padding of the card' },
      { name: 'className', type: 'string', default: 'undefined', description: 'Additional CSS classes' },
    ],
    aiDirectives: {
      componentId: 's3-card',
      semanticRole: 'content-container',
      description: 'Container that groups related information and actions into a cohesive unit with visual boundaries.',
      useWhen: [
        'Grouping related content about a single topic',
        'Displaying items in a grid or list layout',
        'Creating clickable content blocks',
        'Separating content sections visually',
        'Presenting summary information with optional actions',
        'Dashboard widgets or metrics',
      ],
      doNotUseWhen: [
        'Simple text content without actions (use plain text)',
        'Full-page content (cards are for contained units)',
        'Navigation items (use NavItem or Link)',
        'Alerts or notifications (use Alert component)',
        'Modal content (use Modal component)',
      ],
      contextPatterns: [
        'Grids: 2-4 column layouts, equal height cards',
        'Lists: Full-width cards with consistent structure',
        'Dashboards: Mixed sizes for hierarchy',
        'Product displays: Image, title, description, action pattern',
        'Settings: Grouped options within cards',
        'Profiles: User info with avatar and details',
      ],
      commonPairings: [
        'Button: Action buttons in CardFooter',
        'Badge: Status or category in CardHeader',
        'Avatar: User representation in profile cards',
        'Input: Form fields within card for data entry',
        'Image: Media content at top or side of card',
      ],
      variantGuidance: {
        default: 'Standard card with subtle background. Use for most content grouping.',
        outlined: 'Border emphasis, no background. Use when cards are on colored backgrounds.',
        elevated: 'Shadow for depth. Use for interactive or clickable cards, or to show hierarchy.',
      },
      accessibilityRequirements: [
        'Clickable cards must have appropriate role and keyboard support',
        'Card content should have logical heading hierarchy',
        'Interactive elements inside card must be individually focusable',
        'Sufficient contrast between card and page background',
      ],
      contentGuidelines: [
        'Use CardHeader for title and optional actions',
        'Use CardContent for main body content',
        'Use CardFooter for actions (buttons) or metadata',
        'Keep titles concise: 3-8 words',
        'Limit actions to 2-3 buttons maximum',
      ],
      layoutConstraints: [
        'Minimum width: 280px for readability',
        'Maximum width: 600px unless full-width layout',
        'Consistent padding within card: 16-24px',
        'Card grids: 16-24px gap between cards',
        'Equal heights in grid rows for visual consistency',
      ],
    } as AIDirective,
  },
  avatar: {
    name: 'Avatar',
    description: 'Avatars represent a user or entity with an image or initials.',
    status: 'stable',
    package: '@signal3/web',
    version: '0.0.1',
    category: 'Data Display',
    props: [
      { name: 'src', type: 'string', default: 'undefined', description: 'Image source URL' },
      { name: 'alt', type: 'string', default: 'undefined', description: 'Alt text for the image' },
      { name: 'fallback', type: 'string', default: 'undefined', description: 'Initials to show when no image' },
      { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'", default: "'md'", description: 'Size of the avatar' },
      { name: 'status', type: "'online' | 'offline' | 'away' | 'busy'", default: 'undefined', description: 'Status indicator' },
    ],
    aiDirectives: {
      componentId: 's3-avatar',
      semanticRole: 'identity-representation',
      description: 'Visual representation of a user, team, or entity using a photo, initials, or icon.',
      useWhen: [
        'Displaying user profile images',
        'Showing comment or message authors',
        'Team member lists or directories',
        'Navigation header user menu',
        'Activity feeds or timelines',
        'Representing entities (companies, teams, projects)',
      ],
      doNotUseWhen: [
        'Product or content images (use Image component)',
        'Icons or logos (use Icon or Logo components)',
        'Decorative images (use standard img)',
        'Thumbnails of content (use Thumbnail component)',
      ],
      contextPatterns: [
        'Headers: Size md-lg with dropdown menu',
        'Comments: Size sm-md with name and timestamp',
        'Lists: Size sm for compact views, md for standard',
        'Profiles: Size xl-2xl as primary visual',
        'Activity feeds: Size sm with inline content',
        'Cards: Size md-lg in profile cards',
      ],
      commonPairings: [
        'Badge: Status overlay or notification count',
        'Button: Profile actions near avatar',
        'Card: Avatar in profile or team cards',
        'Input: Author avatar in comment forms',
        'Text: Name and role text beside avatar',
      ],
      variantGuidance: {
        'with-image': 'Preferred when user has profile photo. Provides personal connection.',
        'with-initials': 'Fallback when no image. Use first letter of first and last name.',
        'with-icon': 'Use for generic or anonymous users. User icon as fallback.',
      },
      accessibilityRequirements: [
        'Must have meaningful alt text describing the person',
        'Status indicators need text alternative (not just color)',
        'Clickable avatars need appropriate role and label',
        'Group avatars should indicate total count accessibly',
      ],
      contentGuidelines: [
        'Alt text should be person\'s name or "User avatar"',
        'Initials: Max 2 characters, uppercase',
        'Status should match actual user state',
        'Consistent sizing within same context',
      ],
      layoutConstraints: [
        'xs: 24px - inline text, dense lists',
        'sm: 32px - comments, compact lists',
        'md: 40px - standard UI, cards',
        'lg: 48px - emphasis, headers',
        'xl: 64px - profile sections',
        '2xl: 96px - profile pages, hero',
        'Avatar groups: overlap by 25%, show +N for overflow',
      ],
    } as AIDirective,
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
                  {component.aiDirectives?.accessibilityRequirements ? (
                    component.aiDirectives.accessibilityRequirements.map((req: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                        {req}
                      </li>
                    ))
                  ) : (
                    <>
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
                    </>
                  )}
                </ul>
              </div>
            </section>

            {/* AI Builder Directives */}
            {component.aiDirectives && (
              <section id="ai-directives" className="mb-12">
                <div className="mb-4 flex items-center gap-2">
                  <Bot className="h-5 w-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">AI Builder Directives</h2>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                    Signal3 Signed
                  </span>
                </div>
                <p className="mb-6 text-gray-600">
                  Metadata for AI design tools (like Figma Make) to understand when and how to use this component.
                </p>

                <div className="space-y-6">
                  {/* Component ID */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <Sparkles className="h-4 w-4 text-blue-500" />
                      Component ID
                    </div>
                    <code className="mt-2 block rounded bg-gray-900 px-3 py-2 font-mono text-sm text-green-400">
                      {component.aiDirectives.componentId}
                    </code>
                  </div>

                  {/* Semantic Role & Description */}
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-900">Semantic Role</h3>
                    <p className="mt-1 text-sm text-blue-600 font-medium">{component.aiDirectives.semanticRole}</p>
                    <p className="mt-2 text-sm text-gray-600">{component.aiDirectives.description}</p>
                  </div>

                  {/* Use When / Do Not Use When */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                      <h3 className="font-semibold text-green-900">Use When</h3>
                      <ul className="mt-3 space-y-2">
                        {component.aiDirectives.useWhen.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                            <span className="mt-1 text-green-600">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                      <h3 className="font-semibold text-red-900">Do Not Use When</h3>
                      <ul className="mt-3 space-y-2">
                        {component.aiDirectives.doNotUseWhen.map((item: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                            <span className="mt-1 text-red-600">✗</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Variant Guidance */}
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-900">Variant Guidance</h3>
                    <div className="mt-3 space-y-3">
                      {Object.entries(component.aiDirectives.variantGuidance).map(([variant, guidance]) => (
                        <div key={variant} className="flex gap-3">
                          <code className="shrink-0 rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                            {variant}
                          </code>
                          <p className="text-sm text-gray-600">{guidance as string}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Context Patterns */}
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-900">Context Patterns</h3>
                    <ul className="mt-3 space-y-2">
                      {component.aiDirectives.contextPatterns.map((pattern: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          {pattern}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Pairings */}
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-900">Common Pairings</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {component.aiDirectives.commonPairings.map((pairing: string, i: number) => {
                        const [componentName, ...rest] = pairing.split(':');
                        return (
                          <div key={i} className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                            <span className="font-medium text-gray-900">{componentName}:</span>
                            <span className="text-sm text-gray-600">{rest.join(':')}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Content Guidelines */}
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-900">Content Guidelines</h3>
                    <ul className="mt-3 space-y-2">
                      {component.aiDirectives.contentGuidelines.map((guideline: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                          {guideline}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Layout Constraints */}
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-900">Layout Constraints</h3>
                    <ul className="mt-3 space-y-2">
                      {component.aiDirectives.layoutConstraints.map((constraint: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                          {constraint}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Raw JSON for AI consumption */}
                  <div className="rounded-lg border border-gray-200 bg-gray-900 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white">Raw Directive (JSON)</h3>
                      <CopyButton text={JSON.stringify(component.aiDirectives, null, 2)} />
                    </div>
                    <pre className="mt-3 overflow-x-auto text-xs text-gray-300">
                      <code>{JSON.stringify(component.aiDirectives, null, 2)}</code>
                    </pre>
                  </div>
                </div>
              </section>
            )}
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
                  {component.aiDirectives && (
                    <a href="#ai-directives" className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                      <Bot className="h-3 w-3" />
                      AI Builder Directives
                    </a>
                  )}
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
