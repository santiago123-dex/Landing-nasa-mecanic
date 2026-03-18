import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    resolve: {
      alias: {
        '@': new URL('./', import.meta.url).pathname,
      },
    },
  },
});
