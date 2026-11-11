import { defineConfig } from 'vite';

export default defineConfig({
  // Relative build assets work on GitHub Pages, branch previews and subpaths.
  base: './',
  build: {
    target: 'es2022',
    cssCodeSplit: true
  }
});
