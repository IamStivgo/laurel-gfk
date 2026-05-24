// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

const SITE_URL = (process.env.PUBLIC_SITE_URL ?? 'https://laurel-gfk.vercel.app').replace(/\/$/, '');

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/gracias'),
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});