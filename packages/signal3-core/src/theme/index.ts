// Theme Provider and Utilities
import { colors, semanticColors } from '../tokens/colors';
import { fontFamilies, fontSizes, fontWeights, lineHeights } from '../tokens/typography';
import { spacing } from '../tokens/spacing';
import { shadows, focusRings } from '../tokens/shadows';
import { radii } from '../tokens/radii';
import { hexToChannels } from '../utils';

export const signal3Theme = {
  colors: {
    ...colors,
    ...semanticColors,
  },
  typography: {
    fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
  },
  spacing,
  shadows: {
    ...shadows,
    focus: focusRings,
  },
  radii,
} as const;

export type Signal3Theme = typeof signal3Theme;

// CSS Custom Properties generator — outputs R G B channels for Tailwind opacity support
export function generateCSSVariables(theme: Signal3Theme = signal3Theme): string {
  const lines: string[] = [':root {'];

  // Colors — output as R G B channels (e.g. "158 27 50")
  Object.entries(theme.colors).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([shade, color]) => {
        lines.push(`  --color-${key}-${shade}: ${hexToChannels(color)};`);
      });
    } else if (typeof value === 'string' && value.startsWith('#')) {
      lines.push(`  --color-${key}: ${hexToChannels(value)};`);
    } else {
      lines.push(`  --color-${key}: ${value};`);
    }
  });

  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    lines.push(`  --spacing-${key}: ${value};`);
  });

  // Shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    if (typeof value === 'string') {
      lines.push(`  --shadow-${key}: ${value};`);
    }
  });

  // Radii
  Object.entries(theme.radii).forEach(([key, value]) => {
    lines.push(`  --radius-${key}: ${value};`);
  });

  // Font families
  Object.entries(theme.typography.fontFamilies).forEach(([key, value]) => {
    lines.push(`  --font-${key}: ${value};`);
  });

  // Font sizes
  Object.entries(theme.typography.fontSizes).forEach(([key, value]) => {
    lines.push(`  --text-${key}: ${value};`);
  });

  lines.push('}');

  return lines.join('\n');
}

export { signal3Theme as theme };
