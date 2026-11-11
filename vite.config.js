import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/bronze-artistry/' : '/',
  build: {
    target: 'es2022',
    cssCodeSplit: true,
  },
});
