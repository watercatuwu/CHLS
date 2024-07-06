// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "vuetify-nuxt-module"
  ],

  googleFonts: {
    families: {
      'Reddit Sans': true,
      'Noto Sans': true,
    }
  },

  compatibilityDate: "2024-07-05"
})