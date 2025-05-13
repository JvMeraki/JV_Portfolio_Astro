// @ts-check
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://jv-portfolio-astro.vercel.app',
  base: '/',

  integrations: [
    svelte(),
    tailwind()
  ],

  adapter: vercel(),
});