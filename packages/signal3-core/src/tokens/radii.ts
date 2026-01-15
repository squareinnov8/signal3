// Border Radius Tokens
// Consistent rounding across components

export const radii = {
  none: '0',
  xxs: '2px',
  xs: '4px',
  sm: '6px',
  md: '8px',
  lg: '10px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '20px',
  '4xl': '24px',
  full: '9999px',
} as const;

export type Radii = typeof radii;
