// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "vuetify-nuxt-module",
    "@vite-pwa/nuxt"
  ],
  app: {
    head:{
      title: '中壢大中官網',
      meta: [
        { name: 'description', content: '中壢大中官方網站' },
        { name: 'google-site-verification', content: 'X9eP00pJfv2y0GzKFMaVhbDvg7s8WL8yC1w2bxRb07M' },
        { property: 'og:title', content: '中壢大中官網' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://chlshub.vercel.app/' },
        { property: 'og:image', content: 'https://i.meee.com.tw/O1Feevv.png' },
        { property: 'og:description', content: '提供捷徑、學校公告、社團資訊的超級宇宙無敵霹靂好網站' },
        { name: 'theme-color', content: '#0341fc' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
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