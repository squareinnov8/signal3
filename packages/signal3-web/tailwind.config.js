const { colors, spacing, radii, shadows } = require('@signal3/core/tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        gray: colors.gray,
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
      },
      fontFamily: {
        display: ['Equifax Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Equifax Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        xs: shadows.xs,
        sm: shadows.sm,
        md: shadows.md,
        lg: shadows.lg,
        xl: shadows.xl,
        '2xl': shadows['2xl'],
        '3xl': shadows['3xl'],
      },
      borderRadius: {
        xxs: radii.xxs,
        xs: radii.xs,
        sm: radii.sm,
        md: radii.md,
        lg: radii.lg,
        xl: radii.xl,
        '2xl': radii['2xl'],
        '3xl': radii['3xl'],
        '4xl': radii['4xl'],
      },
    },
  },
  plugins: [],
};
