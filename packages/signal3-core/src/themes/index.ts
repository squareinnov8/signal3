// Signal3 Theme System
// Supports base themes and subthemes for different products/contexts

import { colors, semanticColors } from '../tokens/colors';
import { fontFamilies, fontSizes, fontWeights } from '../tokens/typography';
import { spacing } from '../tokens/spacing';
import { shadows } from '../tokens/shadows';
import { radii } from '../tokens/radii';

// Base theme type
export interface Signal3BaseTheme {
  name: string;
  displayName: string;
  colors: {
    primary: typeof colors.primary;
    blue: typeof colors.blue;
    green: typeof colors.green;
    orange: typeof colors.orange;
    yellow: typeof colors.yellow;
    purple: typeof colors.purple;
    gray: typeof colors.gray;
    success: typeof colors.success;
    warning: typeof colors.warning;
    error: typeof colors.error;
    // Semantic colors
    brand: string;
    brandDark: string;
    brandLight: string;
    textPrimary: string;
    textSecondary: string;
    bgPrimary: string;
    bgSecondary: string;
  };
  typography: {
    fontFamily: typeof fontFamilies;
    fontSize: typeof fontSizes;
    fontWeight: typeof fontWeights;
  };
  spacing: typeof spacing;
  shadows: typeof shadows;
  radii: typeof radii;
  // Component-specific overrides
  components: {
    button: {
      borderRadius: string;
      fontWeight: string;
    };
    input: {
      borderRadius: string;
      borderColor: string;
      focusRingColor: string;
    };
    card: {
      borderRadius: string;
      shadow: string;
    };
    badge: {
      borderRadius: string;
    };
  };
}

// ============================================
// EQUIFAX DEFAULT THEME (Light)
// ============================================
export const equifaxLight: Signal3BaseTheme = {
  name: 'equifax-light',
  displayName: 'Equifax Light',
  colors: {
    primary: colors.primary,
    blue: colors.blue,
    green: colors.green,
    orange: colors.orange,
    yellow: colors.yellow,
    purple: colors.purple,
    gray: colors.gray,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    brand: colors.primary[600], // Equifax Red
    brandDark: colors.primary[800],
    brandLight: colors.primary[100],
    textPrimary: colors.gray[900],
    textSecondary: colors.gray[500], // Equifax Gray
    bgPrimary: '#FFFFFF',
    bgSecondary: colors.gray[50],
  },
  typography: {
    fontFamily: fontFamilies,
    fontSize: fontSizes,
    fontWeight: fontWeights,
  },
  spacing,
  shadows,
  radii,
  components: {
    button: {
      borderRadius: radii.lg,
      fontWeight: fontWeights.semibold,
    },
    input: {
      borderRadius: radii.lg,
      borderColor: colors.gray[300],
      focusRingColor: colors.primary[100],
    },
    card: {
      borderRadius: radii.xl,
      shadow: shadows.sm,
    },
    badge: {
      borderRadius: radii.md,
    },
  },
};

// ============================================
// EQUIFAX DARK THEME
// ============================================
export const equifaxDark: Signal3BaseTheme = {
  name: 'equifax-dark',
  displayName: 'Equifax Dark',
  colors: {
    primary: colors.primary,
    blue: colors.blue,
    green: colors.green,
    orange: colors.orange,
    yellow: colors.yellow,
    purple: colors.purple,
    gray: colors.gray,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    brand: colors.primary[400],
    brandDark: colors.primary[300],
    brandLight: colors.primary[900],
    textPrimary: colors.gray[50],
    textSecondary: colors.gray[400],
    bgPrimary: colors.gray[900],
    bgSecondary: colors.gray[800],
  },
  typography: {
    fontFamily: fontFamilies,
    fontSize: fontSizes,
    fontWeight: fontWeights,
  },
  spacing,
  shadows,
  radii,
  components: {
    button: {
      borderRadius: radii.lg,
      fontWeight: fontWeights.semibold,
    },
    input: {
      borderRadius: radii.lg,
      borderColor: colors.gray[700],
      focusRingColor: colors.primary[800],
    },
    card: {
      borderRadius: radii.xl,
      shadow: shadows.lg,
    },
    badge: {
      borderRadius: radii.md,
    },
  },
};

// ============================================
// SUBTHEME: Rounded (More playful/friendly)
// ============================================
export const equifaxRounded: Signal3BaseTheme = {
  ...equifaxLight,
  name: 'equifax-rounded',
  displayName: 'Equifax Rounded',
  components: {
    button: {
      borderRadius: radii.full,
      fontWeight: fontWeights.semibold,
    },
    input: {
      borderRadius: radii['2xl'],
      borderColor: colors.gray[300],
      focusRingColor: colors.primary[100],
    },
    card: {
      borderRadius: radii['3xl'],
      shadow: shadows.md,
    },
    badge: {
      borderRadius: radii.full,
    },
  },
};

// ============================================
// SUBTHEME: Sharp (More corporate/serious)
// ============================================
export const equifaxSharp: Signal3BaseTheme = {
  ...equifaxLight,
  name: 'equifax-sharp',
  displayName: 'Equifax Sharp',
  components: {
    button: {
      borderRadius: radii.sm,
      fontWeight: fontWeights.semibold,
    },
    input: {
      borderRadius: radii.sm,
      borderColor: colors.gray[300],
      focusRingColor: colors.primary[100],
    },
    card: {
      borderRadius: radii.md,
      shadow: shadows.xs,
    },
    badge: {
      borderRadius: radii.xs,
    },
  },
};

// ============================================
// SUBTHEME: High Contrast (Accessibility)
// ============================================
export const equifaxHighContrast: Signal3BaseTheme = {
  ...equifaxLight,
  name: 'equifax-high-contrast',
  displayName: 'Equifax High Contrast',
  colors: {
    ...equifaxLight.colors,
    brand: colors.primary[800],
    textPrimary: '#000000',
    textSecondary: colors.gray[800],
  },
  components: {
    ...equifaxLight.components,
    input: {
      borderRadius: radii.lg,
      borderColor: colors.gray[500],
      focusRingColor: colors.primary[200],
    },
  },
};

// ============================================
// ALL AVAILABLE THEMES
// ============================================
export const themes = {
  'equifax-light': equifaxLight,
  'equifax-dark': equifaxDark,
  'equifax-rounded': equifaxRounded,
  'equifax-sharp': equifaxSharp,
  'equifax-high-contrast': equifaxHighContrast,
} as const;

export type ThemeName = keyof typeof themes;

// Default theme
export const defaultTheme = equifaxLight;

// ============================================
// THEME UTILITIES
// ============================================

/**
 * Create a custom subtheme by extending a base theme
 */
export function createSubtheme(
  baseTheme: Signal3BaseTheme,
  overrides: Partial<Signal3BaseTheme>
): Signal3BaseTheme {
  return {
    ...baseTheme,
    ...overrides,
    colors: {
      ...baseTheme.colors,
      ...(overrides.colors || {}),
    },
    components: {
      ...baseTheme.components,
      ...(overrides.components || {}),
    },
  } as Signal3BaseTheme;
}

/**
 * Generate CSS custom properties from a theme
 */
export function generateThemeCSS(theme: Signal3BaseTheme): string {
  const lines: string[] = [];

  // Colors
  lines.push(`  --color-brand: ${theme.colors.brand};`);
  lines.push(`  --color-brand-dark: ${theme.colors.brandDark};`);
  lines.push(`  --color-brand-light: ${theme.colors.brandLight};`);
  lines.push(`  --color-text-primary: ${theme.colors.textPrimary};`);
  lines.push(`  --color-text-secondary: ${theme.colors.textSecondary};`);
  lines.push(`  --color-bg-primary: ${theme.colors.bgPrimary};`);
  lines.push(`  --color-bg-secondary: ${theme.colors.bgSecondary};`);

  // Component tokens
  lines.push(`  --button-border-radius: ${theme.components.button.borderRadius};`);
  lines.push(`  --button-font-weight: ${theme.components.button.fontWeight};`);
  lines.push(`  --input-border-radius: ${theme.components.input.borderRadius};`);
  lines.push(`  --input-border-color: ${theme.components.input.borderColor};`);
  lines.push(`  --input-focus-ring-color: ${theme.components.input.focusRingColor};`);
  lines.push(`  --card-border-radius: ${theme.components.card.borderRadius};`);
  lines.push(`  --card-shadow: ${theme.components.card.shadow};`);
  lines.push(`  --badge-border-radius: ${theme.components.badge.borderRadius};`);

  return `[data-theme="${theme.name}"] {\n${lines.join('\n')}\n}`;
}

/**
 * Generate all theme CSS
 */
export function generateAllThemesCSS(): string {
  return Object.values(themes)
    .map((theme) => generateThemeCSS(theme))
    .join('\n\n');
}
