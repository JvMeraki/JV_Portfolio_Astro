// @ts-check
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'JvMeraki.github.io',
  base: 'my-repo',
  integrations: [
    svelte(),
    tailwind()
  ],
});