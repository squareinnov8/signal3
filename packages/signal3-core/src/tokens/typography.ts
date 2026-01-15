// Typography Tokens
// Based on Equifax brand typography guidelines
// Primary font: Open Sans (Google Fonts)

export const fontFamilies = {
  display: '"Open Sans", Arial, sans-serif',
  body: '"Open Sans", Arial, sans-serif',
  mono: '"Lucida Console", Courier, monospace',
} as const;

export const fontSizes = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  md: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem', // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem', // 72px
} as const;

export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const lineHeights = {
  xs: '1.125rem', // 18px
  sm: '1.25rem', // 20px
  md: '1.5rem', // 24px
  lg: '1.75rem', // 28px
  xl: '1.875rem', // 30px
  '2xl': '2rem', // 32px
  '3xl': '2.375rem', // 38px
  '4xl': '2.75rem', // 44px
  '5xl': '3.75rem', // 60px
  '6xl': '4.5rem', // 72px
  '7xl': '5.625rem', // 90px
} as const;

export const letterSpacing = {
  tight: '-0.02em',
  normal: '0',
  wide: '0.02em',
} as const;

// Pre-composed text styles
export const textStyles = {
  // Display styles - for hero sections and major headlines
  'display-2xl': {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes['7xl'],
    lineHeight: lineHeights['7xl'],
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.tight,
  },
  'display-xl': {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes['6xl'],
    lineHeight: lineHeights['6xl'],
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.tight,
  },
  'display-lg': {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes['5xl'],
    lineHeight: lineHeights['5xl'],
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.tight,
  },
  'display-md': {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights['4xl'],
    fontWeight: fontWeights.semibold,
    letterSpacing: letterSpacing.tight,
  },
  'display-sm': {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights['3xl'],
    fontWeight: fontWeights.semibold,
  },
  'display-xs': {
    fontFamily: fontFamilies.display,
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights['2xl'],
    fontWeight: fontWeights.semibold,
  },

  // Body text styles
  'text-xl': {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontWeight: fontWeights.regular,
  },
  'text-lg': {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.regular,
  },
  'text-md': {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.regular,
  },
  'text-sm': {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.regular,
  },
  'text-xs': {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.regular,
  },
} as const;

export type FontFamilies = typeof fontFamilies;
export type FontSizes = typeof fontSizes;
export type FontWeights = typeof fontWeights;
export type LineHeights = typeof lineHeights;
export type TextStyles = typeof textStyles;
