import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const defaultSiteUrl = "https://mikeiken-career-lab.vercel.app";
// 本番は常に固定ドメインを使う。プレビュー等で上書きしたい場合のみ SITE_URL を設定する。
// VERCEL_URL はデプロイ固有の非正規ホスト名のため canonical/OGP/sitemap には使わない。
const siteUrl = process.env.SITE_URL ?? defaultSiteUrl;

export default defineConfig({
  site: siteUrl,
  output: "static",
  integrations: [mdx(), sitemap()],
  build: {
    format: "directory"
  }
});
