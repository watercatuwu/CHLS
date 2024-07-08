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

  googleFonts: {
    families: {
      'Reddit Sans': true,
      'Noto Sans': true,
    }
  },

  compatibilityDate: "2024-07-05"
})