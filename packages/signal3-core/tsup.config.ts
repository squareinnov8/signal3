import { defineConfig } from 'tsup';
import { copyFileSync, mkdirSync } from 'fs';

export default defineConfig({
  entry: ['src/index.ts', 'src/tokens/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['tailwindcss'],
  onSuccess: async () => {
    // Copy CSS variables file to dist for the ./css export
    mkdirSync('dist/tokens', { recursive: true });
    copyFileSync('src/tokens/variables.css', 'dist/tokens/variables.css');
  },
});
