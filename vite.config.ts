import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      globals: path.resolve(__dirname, 'src/globals'),
      pages: path.resolve(__dirname, 'src/pages'),
      routes: path.resolve(__dirname, 'src/routes'),
      styles: path.resolve(__dirname, 'src/styles')
    }
  },
  root: 'src',
  build: {
    outDir: '../dist'
  }
});
