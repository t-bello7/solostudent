import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'; // eslint-disable-line  import/no-unresolved
import { resolve } from 'node:path';
import viteConfig from './vite.config'; // eslint-disable-line  import/no-unresolved

const config = mergeConfig(
  viteConfig, // Extending from an existing Vite configuration (`vite.config.ts` file)
  defineConfig({
    test: {
      ...configDefaults, // Extending Vitest's default options
      environment: 'jsdom',
      globals: true,
      css: true,
      setupFiles: './src/__test__/setup.ts',
    },
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
  }),
);

export default config;
