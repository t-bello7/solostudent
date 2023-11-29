import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

// https://vitejs.dev/config/
export default defineConfig({
  // esbuild: {
  //   supported: {
  //     'top-level-await': true
  //   }
  // },
  build: {
    target: 'esnext',
  },
  plugins: [react(), wasm(), topLevelAwait()],
  // optimizeDeps: {
  //   exclude: ['@swc/wasm-web']
  // }
});
