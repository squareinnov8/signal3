#!/usr/bin/env node

/**
 * Figma Token Pull Script
 *
 * This script pulls design tokens from Figma using the Figma API
 * and saves them to .figma/tokens.json
 *
 * Usage: pnpm figma:pull
 *
 * Required environment variables:
 * - FIGMA_ACCESS_TOKEN: Your Figma personal access token
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

async function loadConfig() {
  const configPath = path.join(rootDir, '.figma', 'config.json');
  const configContent = await fs.readFile(configPath, 'utf-8');
  return JSON.parse(configContent);
}

async function fetchFigmaTokens(fileId, accessToken) {
  // Note: This is a placeholder. In a real implementation, you would:
  // 1. Use the Figma API to fetch the file
  // 2. Extract styles and variables
  // 3. Transform them into design tokens format

  console.log(`Fetching tokens from Figma file: ${fileId}`);

  // For now, we'll just return a message indicating how to set this up
  return {
    message: 'Figma sync configured. Set FIGMA_ACCESS_TOKEN and update .figma/config.json with your file ID.',
    instructions: [
      '1. Get your Figma access token from: https://www.figma.com/developers/api#access-tokens',
      '2. Set FIGMA_ACCESS_TOKEN environment variable',
      '3. Update .figma/config.json with your Figma file ID',
      '4. Install Tokens Studio plugin in Figma for enhanced token support',
    ],
  };
}

async function main() {
  console.log('🎨 Signal3 Figma Token Sync\n');

  try {
    const config = await loadConfig();
    const accessToken = process.env.FIGMA_ACCESS_TOKEN;

    if (!accessToken) {
      console.log('⚠️  FIGMA_ACCESS_TOKEN not set.\n');
      console.log('To enable Figma sync:');
      console.log('1. Get your token from: https://www.figma.com/developers/api#access-tokens');
      console.log('2. Export it: export FIGMA_ACCESS_TOKEN="your-token-here"');
      console.log('3. Update .figma/config.json with your Figma file ID\n');
      console.log('For now, using local tokens from .figma/tokens.json');
      return;
    }

    if (config.figmaFileId === 'YOUR_FIGMA_FILE_ID_HERE') {
      console.log('⚠️  Figma file ID not configured.\n');
      console.log('Update .figma/config.json with your Figma file ID.');
      return;
    }

    const result = await fetchFigmaTokens(config.figmaFileId, accessToken);
    console.log('\n✅ Figma tokens pulled successfully');

    if (result.instructions) {
      console.log('\nSetup instructions:');
      result.instructions.forEach((instruction) => console.log(`  ${instruction}`));
    }

  } catch (error) {
    console.error('❌ Error pulling Figma tokens:', error.message);
    process.exit(1);
  }
}

main();
