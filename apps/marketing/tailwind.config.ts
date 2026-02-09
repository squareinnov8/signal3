import type { Config } from 'tailwindcss';

// Create a Tailwind color value from a CSS variable with opacity support
function withOpacity(variableName: string) {
  return `rgb(var(${variableName}) / <alpha-value>)`;
}

// Generate a full 12-shade color scale from CSS variables
function colorScale(prefix: string) {
  return {
    25: withOpacity(`--color-${prefix}-25`),
    50: withOpacity(`--color-${prefix}-50`),
    100: withOpacity(`--color-${prefix}-100`),
    200: withOpacity(`--color-${prefix}-200`),
    300: withOpacity(`--color-${prefix}-300`),
    400: withOpacity(`--color-${prefix}-400`),
    500: withOpacity(`--color-${prefix}-500`),
    600: withOpacity(`--color-${prefix}-600`),
    700: withOpacity(`--color-${prefix}-700`),
    800: withOpacity(`--color-${prefix}-800`),
    900: withOpacity(`--color-${prefix}-900`),
    950: withOpacity(`--color-${prefix}-950`),
  };
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/signal3-web/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colorScale('primary'),
        blue: colorScale('blue'),
        green: colorScale('green'),
        orange: colorScale('orange'),
        yellow: colorScale('yellow'),
        purple: colorScale('purple'),
        gray: colorScale('gray'),
        success: colorScale('success'),
        warning: colorScale('warning'),
        error: colorScale('error'),
      },
      fontFamily: {
        display: ['var(--font-open-sans)', 'Arial', 'sans-serif'],
        body: ['var(--font-open-sans)', 'Arial', 'sans-serif'],
        mono: ['"Lucida Console"', 'Courier', 'monospace'],
      },
      boxShadow: {
        xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        sm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
        md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
        '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
        '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
