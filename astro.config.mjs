// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";

// Astro's config runs before Vite, so .env files are not auto-loaded here.
// loadEnv pulls PUBLIC_SITE_URL out of .env, .env.production, etc. so that
// `site` resolves correctly for Open Graph and canonical URLs.
const { PUBLIC_SITE_URL } = loadEnv(
  process.env.NODE_ENV ?? "production",
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL || process.env.PUBLIC_SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
});
