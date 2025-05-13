// @ts-check
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://JvMeraki.github.io/JV_Portfolio_Astro/',
  base: '/JV_Portfolio_Astro/',

  integrations: [
    svelte(),
    tailwind()
  ],

  adapter: vercel(),
});