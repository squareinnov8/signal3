// Utility Functions

import { colors } from '../tokens/colors';

/**
 * Convert hex color to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Convert hex color to CSS rgb() format with optional alpha
 */
export function hexToRgbString(hex: string, alpha?: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  if (alpha !== undefined) {
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  }
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

/**
 * Get color value from theme by path
 * @example getColor('primary.600') // returns '#1849A9'
 */
export function getColor(path: string): string {
  const [colorKey, shade] = path.split('.');
  const colorGroup = colors[colorKey as keyof typeof colors];

  if (typeof colorGroup === 'string') {
    return colorGroup;
  }

  if (colorGroup && shade && typeof colorGroup === 'object') {
    return (colorGroup as Record<string, string>)[shade] || path;
  }

  return path;
}

/**
 * Create a className string from conditional classes
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Convert hex color to space-separated R G B channels for CSS variables.
 * Used by Tailwind's opacity modifier support: rgb(var(--color) / <alpha-value>)
 * @example hexToChannels('#9E1B32') // returns '158 27 50'
 */
export function hexToChannels(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  return `${rgb.r} ${rgb.g} ${rgb.b}`;
}

/**
 * Type-safe object keys
 */
export function objectKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}
