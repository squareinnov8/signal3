import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ExternalLink, Figma, Bot, Sparkles, Diamond } from 'lucide-react';
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
    sitecoreUsage: {
      templateFields: [
        { name: 'Label', type: 'Single-Line Text', notes: 'Button display text' },
        { name: 'Link', type: 'General Link', notes: 'Target URL and link attributes' },
        { name: 'Variant', type: 'Single-Line Text', notes: 'primary | secondary | tertiary | destructive | ghost | link' },
        { name: 'Size', type: 'Single-Line Text', notes: 'sm | md | lg | xl | 2xl' },
        { name: 'Icon', type: 'Single-Line Text', notes: 'Lucide icon name (optional)' },
      ],
      code: `import { Text, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { Button } from '@signal3/web';

type ButtonFields = {
  Label: Field<string>;
  Link: LinkField;
  Variant: Field<string>;
  Size: Field<string>;
  Icon: Field<string>;
};

type ButtonProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: ButtonFields;
};

export const Signal3Button = ({ fields }: ButtonProps): JSX.Element => {
  const variant = fields.Variant?.value || 'primary';
  const size = fields.Size?.value || 'md';

  return (
    <JssLink field={fields.Link}>
      <Button variant={variant} size={size}>
        <Text field={fields.Label} />
      </Button>
    </JssLink>
  );
};`,
      notes: 'Wrap Button in <JssLink> so authors control the destination URL. Use <Text> for editable label text in Experience Editor.',
    },
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
    sitecoreUsage: {
      templateFields: [
        { name: 'Label', type: 'Single-Line Text', notes: 'Badge display text' },
        { name: 'Variant', type: 'Single-Line Text', notes: 'gray | primary | error | warning | success' },
        { name: 'Size', type: 'Single-Line Text', notes: 'sm | md | lg' },
        { name: 'ShowDot', type: 'Checkbox', notes: 'Show dot indicator' },
      ],
      code: `import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { Badge } from '@signal3/web';

type BadgeFields = {
  Label: Field<string>;
  Variant: Field<string>;
  Size: Field<string>;
  ShowDot: Field<boolean>;
};

type BadgeProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: BadgeFields;
};

export const Signal3Badge = ({ fields }: BadgeProps): JSX.Element => {
  return (
    <Badge
      variant={fields.Variant?.value || 'gray'}
      size={fields.Size?.value || 'md'}
      dot={fields.ShowDot?.value}
    >
      <Text field={fields.Label} />
    </Badge>
  );
};`,
      notes: 'Badge content is typically short (1-2 words). Variant values should be constrained via Sitecore field validation or a Droplist field.',
    },
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
    sitecoreUsage: {
      templateFields: [
        { name: 'Label', type: 'Single-Line Text', notes: 'Label text above the input' },
        { name: 'Placeholder', type: 'Single-Line Text', notes: 'Placeholder hint (e.g. "john@example.com")' },
        { name: 'HintText', type: 'Single-Line Text', notes: 'Helper text below the input' },
        { name: 'FieldName', type: 'Single-Line Text', notes: 'HTML name attribute for form submission' },
        { name: 'IsRequired', type: 'Checkbox', notes: 'Marks the field as required' },
      ],
      code: `import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { Input } from '@signal3/web';

type InputFields = {
  Label: Field<string>;
  Placeholder: Field<string>;
  HintText: Field<string>;
  FieldName: Field<string>;
  IsRequired: Field<boolean>;
};

type InputProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: InputFields;
};

export const Signal3Input = ({ fields }: InputProps): JSX.Element => {
  return (
    <Input
      label={fields.Label?.value}
      placeholder={fields.Placeholder?.value}
      hint={fields.HintText?.value}
      name={fields.FieldName?.value}
      required={fields.IsRequired?.value}
    />
  );
};`,
      notes: 'For complex forms, consider Sitecore Forms module instead of individual Input components. Use this approach for simple CMS-driven fields like search bars or newsletter signups.',
    },
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
    sitecoreUsage: {
      templateFields: [
        { name: 'Title', type: 'Single-Line Text', notes: 'Card heading' },
        { name: 'Description', type: 'Rich Text', notes: 'Card body content (supports HTML)' },
        { name: 'Image', type: 'Image', notes: 'Card hero/thumbnail image' },
        { name: 'Link', type: 'General Link', notes: 'Card CTA or clickable target' },
        { name: 'Variant', type: 'Single-Line Text', notes: 'default | outlined | elevated' },
      ],
      code: `import { Text, RichText, JssImage, JssLink } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { Card } from '@signal3/web';

type CardFields = {
  Title: Field<string>;
  Description: Field<string>;
  Image: ImageField;
  Link: LinkField;
  Variant: Field<string>;
};

type CardProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: CardFields;
};

export const Signal3Card = ({ fields }: CardProps): JSX.Element => {
  return (
    <Card variant={fields.Variant?.value || 'default'}>
      {fields.Image?.value?.src && (
        <JssImage field={fields.Image} className="w-full rounded-t-lg" />
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold">
          <Text field={fields.Title} />
        </h3>
        <div className="mt-2 text-gray-600">
          <RichText field={fields.Description} />
        </div>
        {fields.Link?.value?.href && (
          <JssLink field={fields.Link} className="mt-4 inline-block text-primary-600 hover:underline">
            Learn more
          </JssLink>
        )}
      </div>
    </Card>
  );
};`,
      notes: 'Use <RichText> for the description to allow content authors to format text in Experience Editor. <JssImage> supports responsive image parameters from Sitecore media library.',
    },
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
    sitecoreUsage: {
      templateFields: [
        { name: 'Image', type: 'Image', notes: 'Avatar photo from Sitecore media library' },
        { name: 'Name', type: 'Single-Line Text', notes: 'Full name (used for alt text)' },
        { name: 'Initials', type: 'Single-Line Text', notes: 'Fallback initials when no image (e.g. "JD")' },
        { name: 'Size', type: 'Single-Line Text', notes: 'xs | sm | md | lg | xl | 2xl' },
      ],
      code: `import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { Avatar } from '@signal3/web';

type AvatarFields = {
  Image: ImageField;
  Name: Field<string>;
  Initials: Field<string>;
  Size: Field<string>;
};

type AvatarProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: AvatarFields;
};

export const Signal3Avatar = ({ fields }: AvatarProps): JSX.Element => {
  const imageSrc = fields.Image?.value?.src;
  const name = fields.Name?.value || '';

  return (
    <Avatar
      src={imageSrc}
      alt={name}
      fallback={fields.Initials?.value || name.charAt(0)}
      size={fields.Size?.value || 'md'}
    />
  );
};`,
      notes: 'Extract the image src from fields.Image.value.src — Sitecore ImageField wraps the URL in a value object. Provide initials as fallback for when the media library image is not yet uploaded.',
    },
  },
  navbar: {
    name: 'Navbar',
    description: 'Top navigation bar with support for logos, links, dropdowns, megamenus, and user actions. Built on Untitled UI\'s navigation primitives.',
    status: 'beta',
    package: '@signal3/web',
    version: '0.0.1',
    figmaLink: 'https://figma.com/file/...',
    category: 'Navigation',
    props: [
      { name: 'variant', type: "'simple' | 'megamenu' | 'developer'", default: "'simple'", description: 'The navigation style variant' },
      { name: 'logo', type: 'ReactNode', default: 'undefined', description: 'Logo element to display on the left' },
      { name: 'items', type: 'NavItem[]', default: '[]', description: 'Array of navigation items' },
      { name: 'actions', type: 'ReactNode', default: 'undefined', description: 'Right-side actions (buttons, user menu)' },
      { name: 'sticky', type: 'boolean', default: 'true', description: 'Whether the navbar sticks to the top on scroll' },
      { name: 'transparent', type: 'boolean', default: 'false', description: 'Transparent background (for hero overlays)' },
      { name: 'topBar', type: 'ReactNode', default: 'undefined', description: 'Optional top utility bar content' },
      { name: 'mobileBreakpoint', type: "'sm' | 'md' | 'lg'", default: "'lg'", description: 'Breakpoint for mobile menu toggle' },
    ],
    examples: {
      simpleNavbar: `import { Navbar, NavItem, NavLink } from '@signal3/web';

export function SimpleNavbar() {
  return (
    <Navbar
      variant="simple"
      logo={<Logo />}
      items={[
        { label: 'Products', href: '/products' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Resources', href: '/resources' },
      ]}
      actions={
        <>
          <Button variant="ghost">Sign in</Button>
          <Button variant="primary">Get Started</Button>
        </>
      }
    />
  );
}`,
      megamenuNavbar: `import { Navbar, NavItem, MegaMenu, MegaMenuColumn } from '@signal3/web';

export function MegamenuNavbar() {
  return (
    <Navbar
      variant="megamenu"
      logo={<Logo />}
      items={[
        {
          label: 'Products',
          megamenu: (
            <MegaMenu>
              <MegaMenuColumn title="Platform">
                <MegaMenuItem
                  icon={<DatabaseIcon />}
                  title="Data Hub"
                  description="Centralized data management"
                  href="/products/data-hub"
                />
                <MegaMenuItem
                  icon={<ShieldIcon />}
                  title="Security Suite"
                  description="Enterprise-grade protection"
                  href="/products/security"
                />
              </MegaMenuColumn>
              <MegaMenuColumn title="Solutions">
                <MegaMenuItem
                  icon={<BuildingIcon />}
                  title="Enterprise"
                  description="For large organizations"
                  href="/solutions/enterprise"
                />
                <MegaMenuItem
                  icon={<UsersIcon />}
                  title="Teams"
                  description="For growing teams"
                  href="/solutions/teams"
                />
              </MegaMenuColumn>
              <MegaMenuColumn title="Resources" featured>
                <MegaMenuFeatured
                  image="/featured-resource.jpg"
                  title="2024 Industry Report"
                  description="Download our latest insights"
                  href="/resources/report"
                />
              </MegaMenuColumn>
            </MegaMenu>
          ),
        },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Docs', href: '/docs' },
      ]}
      actions={<UserMenu />}
    />
  );
}`,
      developerNavbar: `import { Navbar, TopBar, NavItem } from '@signal3/web';

export function DeveloperNavbar() {
  return (
    <Navbar
      variant="developer"
      topBar={
        <TopBar>
          <TopBarLinks>
            <a href="/status">Status</a>
            <a href="/changelog">Changelog</a>
            <a href="/support">Support</a>
          </TopBarLinks>
          <TopBarActions>
            <ThemeToggle />
            <NotificationBell count={3} />
            <UserAvatar />
          </TopBarActions>
        </TopBar>
      }
      logo={<Logo />}
      items={[
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Guides', href: '/guides' },
        { label: 'Community', href: '/community' },
      ]}
      actions={
        <SearchCommand placeholder="Search docs..." />
      }
    />
  );
}`,
      megamenuWithFeatured: `// Megamenu with featured content section
<MegaMenu width="xl">
  <div className="grid grid-cols-4 gap-6 p-6">
    {/* Navigation columns */}
    <MegaMenuColumn title="Products">
      <MegaMenuItem href="/analytics" icon={<ChartIcon />}>
        Analytics
      </MegaMenuItem>
      <MegaMenuItem href="/automation" icon={<ZapIcon />}>
        Automation
      </MegaMenuItem>
      <MegaMenuItem href="/integrations" icon={<PuzzleIcon />}>
        Integrations
      </MegaMenuItem>
    </MegaMenuColumn>

    <MegaMenuColumn title="Solutions">
      <MegaMenuItem href="/enterprise">Enterprise</MegaMenuItem>
      <MegaMenuItem href="/startups">Startups</MegaMenuItem>
      <MegaMenuItem href="/agencies">Agencies</MegaMenuItem>
    </MegaMenuColumn>

    <MegaMenuColumn title="Resources">
      <MegaMenuItem href="/blog">Blog</MegaMenuItem>
      <MegaMenuItem href="/webinars">Webinars</MegaMenuItem>
      <MegaMenuItem href="/case-studies">Case Studies</MegaMenuItem>
    </MegaMenuColumn>

    {/* Featured content */}
    <div className="rounded-lg bg-gray-50 p-4">
      <span className="text-xs font-semibold text-primary-600">
        NEW
      </span>
      <h4 className="mt-2 font-semibold">AI Features</h4>
      <p className="mt-1 text-sm text-gray-600">
        Explore our new AI-powered capabilities
      </p>
      <Button variant="link" size="sm" className="mt-3">
        Learn more →
      </Button>
    </div>
  </div>
</MegaMenu>`,
      megamenuWithTabs: `// Tabbed megamenu for complex navigation
<MegaMenu>
  <MegaMenuTabs>
    <MegaMenuTab label="By Product">
      <div className="grid grid-cols-3 gap-4 p-6">
        <ProductCard
          icon={<BarChartIcon />}
          title="Analytics"
          description="Track and analyze user behavior"
        />
        <ProductCard
          icon={<MailIcon />}
          title="Email"
          description="Transactional and marketing emails"
        />
        <ProductCard
          icon={<MessageIcon />}
          title="Chat"
          description="Real-time messaging platform"
        />
      </div>
    </MegaMenuTab>

    <MegaMenuTab label="By Use Case">
      <div className="grid grid-cols-2 gap-4 p-6">
        <UseCaseCard
          title="E-commerce"
          items={['Cart recovery', 'Product recommendations', 'Order tracking']}
        />
        <UseCaseCard
          title="SaaS"
          items={['Onboarding flows', 'Feature announcements', 'Usage alerts']}
        />
      </div>
    </MegaMenuTab>

    <MegaMenuTab label="By Industry">
      <IndustryGrid industries={['Healthcare', 'Finance', 'Retail', 'Technology']} />
    </MegaMenuTab>
  </MegaMenuTabs>
</MegaMenu>`,
      megamenuWithIcons: `// Icon-rich megamenu layout
<MegaMenu>
  <div className="grid grid-cols-2 gap-px bg-gray-200">
    {items.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className="flex items-start gap-4 bg-white p-4 hover:bg-gray-50"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
          <item.icon className="h-5 w-5 text-primary-600" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{item.title}</p>
          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
        </div>
      </a>
    ))}
  </div>

  {/* Footer with CTA */}
  <div className="border-t bg-gray-50 px-6 py-4">
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-600">
        Need help choosing? Talk to our team.
      </p>
      <Button variant="primary" size="sm">
        Contact Sales
      </Button>
    </div>
  </div>
</MegaMenu>`,
    },
    aiDirectives: {
      componentId: 's3-navbar',
      semanticRole: 'site-navigation',
      description: 'Primary navigation component that provides consistent site-wide navigation with support for dropdowns, megamenus, and responsive mobile layouts.',
      useWhen: [
        'Building the main site header/navigation',
        'Need hierarchical navigation with multiple levels',
        'Displaying complex product/service offerings in megamenu',
        'Creating developer documentation portals',
        'Marketing sites with multiple sections',
        'Dashboard applications with top navigation',
      ],
      doNotUseWhen: [
        'Sidebar navigation (use Sidebar component)',
        'Tab-based page navigation (use Tabs component)',
        'Footer navigation (use Footer component)',
        'In-page section navigation (use TableOfContents)',
        'Breadcrumb navigation (use Breadcrumb component)',
      ],
      contextPatterns: [
        'Marketing sites: Use megamenu variant with featured content',
        'Documentation: Use developer variant with search and top bar',
        'Dashboards: Use simple variant with user menu and notifications',
        'E-commerce: Use megamenu with product categories and cart',
        'Corporate: Use megamenu with company sections and CTAs',
      ],
      commonPairings: [
        'Logo: Always include brand logo on the left',
        'Button: CTA buttons on the right (Sign up, Get Started)',
        'Avatar: User menu with avatar for authenticated users',
        'SearchCommand: Global search in developer navbars',
        'Badge: Notification indicators on icons',
      ],
      variantGuidance: {
        simple: 'Basic navigation with links and optional dropdowns. Best for: landing pages, simple sites, dashboards.',
        megamenu: 'Full-width dropdown menus with columns and featured content. Best for: marketing sites, e-commerce, enterprise products.',
        developer: 'Documentation-focused with top utility bar, search, and theme toggle. Best for: API docs, developer portals, technical products.',
      },
      accessibilityRequirements: [
        'Must use semantic nav element with aria-label',
        'Dropdown triggers must indicate expanded state (aria-expanded)',
        'Megamenus must be keyboard navigable with arrow keys',
        'Mobile menu must trap focus when open',
        'Skip link should be provided for keyboard users',
        'Current page must be indicated (aria-current="page")',
      ],
      contentGuidelines: [
        'Limit top-level items to 5-7 for cognitive load',
        'Use clear, action-oriented labels (not "Services" → "Our Services")',
        'Group related items in megamenu columns with clear headings',
        'Include descriptions for complex product offerings',
        'Featured content should highlight key pages or promotions',
      ],
      layoutConstraints: [
        'Height: 64-80px for main navbar',
        'Top bar (if used): 32-40px additional',
        'Megamenu max-width: match container or viewport',
        'Mobile breakpoint: typically lg (1024px)',
        'Logo max-height: 32-40px',
        'Sticky position with backdrop blur for scroll behavior',
      ],
    } as AIDirective,
    sitecoreUsage: {
      templateFields: [
        { name: 'Logo', type: 'Image', notes: 'Brand logo from Sitecore media library' },
        { name: 'NavigationItems', type: 'Treelist', notes: 'References to Navigation Item templates (label, href, children)' },
        { name: 'Variant', type: 'Single-Line Text', notes: 'simple | megamenu | developer' },
        { name: 'CTALabel', type: 'Single-Line Text', notes: 'Primary CTA button text (e.g. "Get Started")' },
        { name: 'CTALink', type: 'General Link', notes: 'Primary CTA destination' },
      ],
      code: `import { JssImage, JssLink, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { Navbar, Button } from '@signal3/web';

type NavbarFields = {
  Logo: ImageField;
  NavigationItems: Field<Item[]>;
  Variant: Field<string>;
  CTALabel: Field<string>;
  CTALink: LinkField;
};

type NavbarProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: NavbarFields;
};

export const Signal3Navbar = ({ fields, rendering }: NavbarProps): JSX.Element => {
  // Map Sitecore datasource children to nav items
  const items = (rendering.fields?.NavigationItems as Item[])?.map((item) => ({
    label: item.fields?.Label?.value,
    href: item.fields?.Link?.value?.href,
  })) || [];

  return (
    <Navbar
      variant={fields.Variant?.value || 'simple'}
      logo={<JssImage field={fields.Logo} />}
      items={items}
      actions={
        fields.CTALink?.value?.href && (
          <JssLink field={fields.CTALink}>
            <Button variant="primary">
              <Text field={fields.CTALabel} />
            </Button>
          </JssLink>
        )
      }
    />
  );
};`,
      notes: 'Navigation items should be a separate Sitecore template with Label and Link fields. Use Treelist to let authors reorder items. For megamenu, each item can have child items rendered as columns.',
    },
  },
  chat: {
    name: 'Chat',
    description: 'Interactive messaging interface with chat bubbles, typing indicators, and message input. Supports real-time conversations, AI assistants, and customer support.',
    status: 'beta',
    package: '@signal3/web',
    version: '0.0.1',
    figmaLink: 'https://figma.com/file/...',
    category: 'Communication',
    props: [
      { name: 'variant', type: "'default' | 'floating' | 'embedded' | 'fullscreen'", default: "'default'", description: 'The chat container style' },
      { name: 'messages', type: 'Message[]', default: '[]', description: 'Array of message objects to display' },
      { name: 'onSend', type: '(message: string) => void', default: 'undefined', description: 'Callback when user sends a message' },
      { name: 'placeholder', type: 'string', default: '"Type a message..."', description: 'Input placeholder text' },
      { name: 'showTypingIndicator', type: 'boolean', default: 'false', description: 'Show typing indicator for incoming messages' },
      { name: 'showTimestamps', type: 'boolean', default: 'true', description: 'Display message timestamps' },
      { name: 'showAvatars', type: 'boolean', default: 'true', description: 'Display user avatars next to messages' },
      { name: 'showStatus', type: 'boolean', default: 'true', description: 'Show message delivery status (sent, delivered, read)' },
      { name: 'position', type: "'bottom-right' | 'bottom-left' | 'center'", default: "'bottom-right'", description: 'Position for floating variant' },
      { name: 'header', type: 'ReactNode', default: 'undefined', description: 'Custom header content' },
    ],
    examples: {
      basicChat: `import { Chat, ChatMessage, ChatInput } from '@signal3/web';

export function BasicChat() {
  const [messages, setMessages] = useState([
    { id: 1, content: 'Hello! How can I help you today?', sender: 'agent', timestamp: new Date() },
  ]);

  const handleSend = (content: string) => {
    setMessages([...messages, {
      id: messages.length + 1,
      content,
      sender: 'user',
      timestamp: new Date(),
    }]);
  };

  return (
    <Chat
      messages={messages}
      onSend={handleSend}
      placeholder="Type your message..."
    />
  );
}`,
      chatWithAvatars: `import { Chat, ChatBubble, Avatar } from '@signal3/web';

// Message with avatar and status
<ChatBubble
  variant="outgoing"
  avatar={<Avatar src="/user.jpg" size="sm" />}
  status="delivered"
  timestamp="2:34 PM"
>
  Hi, I have a question about my account.
</ChatBubble>

<ChatBubble
  variant="incoming"
  avatar={<Avatar src="/agent.jpg" size="sm" />}
  timestamp="2:35 PM"
>
  Of course! I'd be happy to help. What would you like to know?
</ChatBubble>`,
      floatingChatWidget: `import { ChatWidget, ChatTrigger } from '@signal3/web';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatTrigger
        onClick={() => setIsOpen(true)}
        unreadCount={2}
        position="bottom-right"
      />

      <ChatWidget
        open={isOpen}
        onClose={() => setIsOpen(false)}
        position="bottom-right"
        header={
          <ChatHeader
            title="Support"
            subtitle="We typically reply within minutes"
            avatar={<Avatar src="/support.jpg" status="online" />}
          />
        }
      >
        <ChatMessages messages={messages} />
        <ChatInput onSend={handleSend} />
      </ChatWidget>
    </>
  );
}`,
      aiAssistantChat: `import { Chat, ChatBubble, TypingIndicator } from '@signal3/web';

export function AIAssistant() {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <Chat variant="embedded">
      <ChatHeader
        title="AI Assistant"
        subtitle="Powered by Claude"
        icon={<SparklesIcon />}
      />

      <ChatMessages>
        <ChatBubble variant="incoming" isAI>
          Hello! I'm your AI assistant. I can help you with:
          • Answering questions about our products
          • Troubleshooting issues
          • Finding documentation

          What would you like help with?
        </ChatBubble>

        {isTyping && (
          <TypingIndicator>
            <span className="text-sm text-gray-500">AI is thinking...</span>
          </TypingIndicator>
        )}
      </ChatMessages>

      <ChatInput
        onSend={handleSend}
        placeholder="Ask me anything..."
        showAttachments={false}
      />
    </Chat>
  );
}`,
      chatBubbleVariants: `// Outgoing message (user)
<ChatBubble variant="outgoing">
  This is a message from the current user
</ChatBubble>

// Incoming message (other party)
<ChatBubble variant="incoming">
  This is a message from someone else
</ChatBubble>

// System message
<ChatBubble variant="system">
  John joined the conversation
</ChatBubble>

// With rich content
<ChatBubble variant="outgoing">
  <ChatAttachment
    type="image"
    src="/screenshot.png"
    alt="Screenshot"
  />
  Here's the screenshot you asked for
</ChatBubble>

// With reactions
<ChatBubble variant="incoming" reactions={['👍', '❤️']}>
  Great idea! Let's do it.
</ChatBubble>`,
      messageStatusIndicators: `// Message status variants
<ChatBubble variant="outgoing" status="sending">
  Sending message...
</ChatBubble>

<ChatBubble variant="outgoing" status="sent">
  Message sent
</ChatBubble>

<ChatBubble variant="outgoing" status="delivered">
  Message delivered
</ChatBubble>

<ChatBubble variant="outgoing" status="read">
  Message read
</ChatBubble>

<ChatBubble variant="outgoing" status="failed">
  Failed to send
  <button onClick={retry}>Retry</button>
</ChatBubble>`,
    },
    aiDirectives: {
      componentId: 's3-chat',
      semanticRole: 'conversational-interface',
      description: 'Real-time messaging interface for two-way communication. Supports human-to-human chat, AI assistants, customer support widgets, and collaborative messaging.',
      useWhen: [
        'Building customer support chat widgets',
        'Implementing AI assistant interfaces',
        'Creating real-time messaging between users',
        'Adding in-app communication features',
        'Building collaborative workspaces with chat',
        'Implementing help desk or FAQ chat bots',
      ],
      doNotUseWhen: [
        'One-way notifications (use Toast or Alert)',
        'Comments on content (use Comments component)',
        'Discussion threads (use Forum/Thread component)',
        'Status updates without conversation (use Activity Feed)',
        'Form-based contact (use Contact Form)',
      ],
      contextPatterns: [
        'Support widget: Floating variant, bottom-right position, with header and status',
        'AI assistant: Embedded variant with typing indicator and streaming responses',
        'Team chat: Fullscreen variant with thread support and reactions',
        'In-app messaging: Default variant with avatars and read receipts',
        'Help bot: Floating variant with quick replies and suggested actions',
      ],
      commonPairings: [
        'Avatar: Display sender identity in message bubbles',
        'Badge: Show unread count on chat trigger',
        'Button: Quick reply buttons and action suggestions',
        'Input: Message composition with attachments',
        'Card: Rich message content (links, previews)',
      ],
      variantGuidance: {
        default: 'Standard inline chat. Use for dedicated messaging pages or large embedded areas.',
        floating: 'Popup chat widget. Use for support chat that overlays page content. Position bottom-right by default.',
        embedded: 'Seamless integration. Use when chat is part of a larger interface (sidebars, panels).',
        fullscreen: 'Full viewport chat. Use for mobile apps or dedicated messaging applications.',
      },
      accessibilityRequirements: [
        'Messages must be announced to screen readers as they arrive',
        'Chat input must have clear label and focus management',
        'Keyboard navigation through message history',
        'Status changes (typing, delivered) announced to assistive tech',
        'Floating widget must trap focus when open',
        'Close button must be keyboard accessible',
      ],
      contentGuidelines: [
        'Keep message bubbles scannable - one thought per message',
        'Use typing indicators to show real-time activity',
        'Display timestamps relative to now (2m ago, Yesterday)',
        'Show delivery status for user confidence',
        'Provide clear visual distinction between incoming/outgoing',
        'Support markdown or rich text for formatted messages',
      ],
      layoutConstraints: [
        'Floating widget: 360-400px width, max 500px height',
        'Chat bubbles: max-width 80% of container',
        'Input area: min-height 48px, expandable for multiline',
        'Avatar size: 32px (sm) for messages',
        'Message spacing: 8-12px between messages from same sender, 16-24px between different senders',
        'Timestamp: below message or grouped by time period',
      ],
    } as AIDirective,
    sitecoreUsage: {
      templateFields: [
        { name: 'Title', type: 'Single-Line Text', notes: 'Chat widget header title (e.g. "Support")' },
        { name: 'Subtitle', type: 'Single-Line Text', notes: 'Header subtitle (e.g. "We typically reply within minutes")' },
        { name: 'Placeholder', type: 'Single-Line Text', notes: 'Input placeholder text' },
        { name: 'WelcomeMessage', type: 'Rich Text', notes: 'Initial greeting message from the agent' },
        { name: 'AgentAvatar', type: 'Image', notes: 'Agent avatar image' },
      ],
      code: `import { Text, RichText, JssImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentParams, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { Chat, ChatHeader, Avatar } from '@signal3/web';

type ChatFields = {
  Title: Field<string>;
  Subtitle: Field<string>;
  Placeholder: Field<string>;
  WelcomeMessage: Field<string>;
  AgentAvatar: ImageField;
};

type ChatProps = {
  rendering: ComponentRendering;
  params: ComponentParams;
  fields: ChatFields;
};

export const Signal3Chat = ({ fields }: ChatProps): JSX.Element => {
  // Chat is mostly client-side — Sitecore provides config and copy
  const welcomeMessage = fields.WelcomeMessage?.value || 'Hello! How can I help?';
  const agentSrc = fields.AgentAvatar?.value?.src;

  return (
    <Chat
      variant="floating"
      placeholder={fields.Placeholder?.value || 'Type a message...'}
      header={
        <ChatHeader
          title={fields.Title?.value || 'Support'}
          subtitle={fields.Subtitle?.value}
          avatar={<Avatar src={agentSrc} size="sm" />}
        />
      }
      messages={[
        { id: 1, content: welcomeMessage, sender: 'agent', timestamp: new Date() },
      ]}
    />
  );
};`,
      notes: 'Chat is primarily a client-side component — Sitecore manages configuration and copy (title, welcome message, placeholder). The actual messaging logic is handled client-side via WebSocket or API integration.',
    },
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

            {/* Sitecore Component Usage */}
            {component.sitecoreUsage && (
              <section id="sitecore-usage" className="mb-12">
                <div className="mb-4 flex items-center gap-2">
                  <Diamond className="h-5 w-5 text-purple-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Sitecore Component Usage</h2>
                </div>
                <p className="mb-6 text-gray-600">
                  How to integrate this component with content from Sitecore CMS using JSS (JavaScript Services SDK) for Next.js.
                </p>

                {/* Template Fields Table */}
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-medium text-gray-800">Template Fields</h3>
                  <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 bg-gray-50">
                          <th className="px-4 py-3 text-left font-semibold text-gray-900">Field Name</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900">Field Type</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-900">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {component.sitecoreUsage.templateFields.map((field: any, i: number) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-4 py-3 font-mono text-sm text-gray-900">{field.name}</td>
                            <td className="px-4 py-3">
                              <span className="inline-flex rounded-md bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-200">
                                {field.type}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-gray-600">{field.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* JSS Code Example */}
                <div className="mb-6">
                  <h3 className="mb-3 text-lg font-medium text-gray-800">JSS + Next.js Example</h3>
                  <CodeBlock code={component.sitecoreUsage.code} language="tsx" />
                </div>

                {/* Notes Callout */}
                {component.sitecoreUsage.notes && (
                  <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                    <div className="flex items-start gap-2">
                      <Diamond className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
                      <p className="text-sm text-purple-800">{component.sitecoreUsage.notes}</p>
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Examples - for components with multiple variants */}
            {component.examples && (
              <section id="examples" className="mb-12">
                <h2 className="mb-6 text-xl font-semibold text-gray-900">Examples</h2>
                <div className="space-y-8">
                  {Object.entries(component.examples).map(([key, code]) => {
                    const title = key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (str) => str.toUpperCase())
                      .trim();
                    return (
                      <div key={key}>
                        <h3 className="mb-3 text-lg font-medium text-gray-800">{title}</h3>
                        <CodeBlock code={code as string} language="tsx" />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

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
                  {component.sitecoreUsage && (
                    <a href="#sitecore-usage" className="flex items-center gap-1 text-purple-600 hover:text-purple-700">
                      <Diamond className="h-3 w-3" />
                      Sitecore Usage
                    </a>
                  )}
                  {component.examples && (
                    <a href="#examples" className="block text-gray-600 hover:text-gray-900">
                      Examples
                    </a>
                  )}
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
