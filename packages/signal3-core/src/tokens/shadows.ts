// Shadow Tokens
// Elevation system for depth and hierarchy

export const shadows = {
  xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
  sm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
  md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
  lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
  xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
  '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
  '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
  none: 'none',
} as const;

// Ring shadows for focus states
export const focusRings = {
  brand: '0px 0px 0px 4px #D1E0FF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  gray: '0px 0px 0px 4px #F2F4F7, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  error: '0px 0px 0px 4px #FEE4E2, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  success: '0px 0px 0px 4px #DCFAE6, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
} as const;

export type Shadows = typeof shadows;
export type FocusRings = typeof focusRings;
