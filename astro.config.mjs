import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const defaultSiteUrl = "https://mikeiken-career-lab.vercel.app";
const siteUrl = process.env.SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : defaultSiteUrl);

export default defineConfig({
  site: siteUrl,
  output: "static",
  integrations: [mdx(), sitemap()],
  build: {
    format: "directory"
  }
});
