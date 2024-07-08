// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "vuetify-nuxt-module",
    "@vite-pwa/nuxt"
  ],
  pwa: {
    manifest: {
      name: '中壢大中官網',
      short_name: '中壢大中',
    }
  },

  googleFonts: {
    families: {
      'Reddit Sans': true,
      'Noto Sans': true,
    }
  },

  compatibilityDate: "2024-07-05"
})