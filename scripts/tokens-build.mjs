#!/usr/bin/env node

/**
 * Token Build Script
 *
 * This script transforms design tokens from .figma/tokens.json
 * into various formats (CSS variables, Tailwind config, TypeScript)
 *
 * Usage: pnpm tokens:build
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

async function loadTokens() {
  const tokensPath = path.join(rootDir, '.figma', 'tokens.json');
  const tokensContent = await fs.readFile(tokensPath, 'utf-8');
  return JSON.parse(tokensContent);
}

function generateCSSVariables(tokens) {
  const lines = [
    '/* Auto-generated CSS variables from Figma tokens */',
    '/* DO NOT EDIT MANUALLY - Run `pnpm figma:sync` to update */',
    '',
    ':root {',
  ];

  // Process colors
  if (tokens.global?.colors) {
    Object.entries(tokens.global.colors).forEach(([colorName, shades]) => {
      Object.entries(shades).forEach(([shade, token]) => {
        if (token.$value) {
          lines.push(`  --color-${colorName}-${shade}: ${token.$value};`);
        }
      });
    });
  }

  // Process spacing
  if (tokens.global?.spacing) {
    Object.entries(tokens.global.spacing).forEach(([key, token]) => {
      if (token.$value) {
        lines.push(`  --spacing-${key}: ${token.$value};`);
      }
    });
  }

  // Process typography
  if (tokens.global?.typography?.fontSize) {
    Object.entries(tokens.global.typography.fontSize).forEach(([key, token]) => {
      if (token.$value) {
        lines.push(`  --font-size-${key}: ${token.$value};`);
      }
    });
  }

  lines.push('}');
  return lines.join('\n');
}

function generateTypeScript(tokens) {
  const lines = [
    '// Auto-generated TypeScript tokens from Figma',
    '// DO NOT EDIT MANUALLY - Run `pnpm figma:sync` to update',
    '',
    'export const generatedTokens = ',
    JSON.stringify(tokens, null, 2),
    ' as const;',
    '',
    'export type GeneratedTokens = typeof generatedTokens;',
  ];

  return lines.join('\n');
}

async function main() {
  console.log('🔧 Building design tokens...\n');

  try {
    const tokens = await loadTokens();

    // Generate CSS variables
    const cssContent = generateCSSVariables(tokens);
    const cssPath = path.join(rootDir, 'packages/signal3-core/src/tokens/variables.css');
    await fs.mkdir(path.dirname(cssPath), { recursive: true });
    await fs.writeFile(cssPath, cssContent);
    console.log('✅ Generated CSS variables');

    // Generate TypeScript
    const tsContent = generateTypeScript(tokens);
    const tsPath = path.join(rootDir, 'packages/signal3-core/src/tokens/generated.ts');
    await fs.writeFile(tsPath, tsContent);
    console.log('✅ Generated TypeScript tokens');

    // Copy JSON tokens
    const jsonPath = path.join(rootDir, 'packages/signal3-core/src/tokens/tokens.json');
    await fs.writeFile(jsonPath, JSON.stringify(tokens, null, 2));
    console.log('✅ Copied JSON tokens');

    console.log('\n🎉 Token build complete!');

  } catch (error) {
    console.error('❌ Error building tokens:', error.message);
    process.exit(1);
  }
}

main();
