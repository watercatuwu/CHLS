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
  nitro: {
    storage: {
      serverFileSystem: {
        driver: 'fs',
        base: 'assets/server',
      }
    }
  },
  pwa: {
    manifest: {
      name: '中壢大中官網',
      short_name: '中壢大中',
      icons:[
        {
          src: '/maskable_icon_x128.png',
          sizes: '128x128',
          type: 'image/png'
        }
      ],
      description: '中壢大中官網',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
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