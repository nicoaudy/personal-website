import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true
    }
  },
  site: "https://www.astro-theme-cactus.netlify.app",
  integrations: [mdx({}), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image(), sitemap()]
});
