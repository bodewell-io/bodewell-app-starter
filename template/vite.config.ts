import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // ADD THIS SECTION to ensure the linked dependency is correctly
  // processed and watched for changes by the Vite dev server.
  optimizeDeps: {
    include: ['@bodewell/ui'],
  },
  build: {
    commonjsOptions: {
      include: [/@bodewell\/ui/, /node_modules/],
    },
  },
});