// @ts-check
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://albamora.dev",
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // El CSS de `lightswind` trae un `@property` con sintaxis inválida que
      // lightningcss (minificador por defecto) rechaza; esbuild lo tolera.
      cssMinify: "esbuild",
    },
  },
})
