// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://rendiputra.github.io',
  base: '/blog',

  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  image: {
    // Enable Astro's built-in image optimization for local and remote images
    domains: [],
  },
});
