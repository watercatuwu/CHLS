<template>
  <v-app class="flex flex-col min-h-screen">
    <v-app-bar id='appbar' app color="indigo-darken-2" dark>
      <v-toolbar-title @click="scrollToElement('appbar')" class="text-h5 cursor-pointer">中壢大中</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="flex gap-4 p-4">
        <Themetoggle />
        <navmenu />
      </div>
    </v-app-bar>
    <div class="flex-1 justify-center mt-24 mb-12">
      <div class="flex flex-col container gap-6 mx-auto p-4">
        <Hero />
        <linktitle id="shortcuts" title="常用連結" anchor="shortcuts" />
        <Shortcuts />
        <linktitle id="announcements" title="學校公告" anchor="announcements" />
        <News />
        <linktitle id="clubs" title="社團" anchor="clubs" />
        <Clubs />
      </div>
    </div>
    <footer class="bottom-0 left-0 right-0 w-full h-auto">
      <div class="flex p-4 justify-between items-center">
        <div>
          <p class="text-sm">
            以學校官網資訊為準
          </p>
          <p class="text-sm text-gray-500">
           copyright © watercatuwu 2024.
          </p>
        </div>
        <div class="flex gap-2 items-center hover:underline">
          <a href="https://github.com/watercatuwu/chls" title="Github Repo" target="_blank" rel="noopener noreferrer">
            <icon name="tabler:brand-github" class="w-8" size="1.5rem" />
          </a>
          <a href="https://www.youtube.com/watch?v=ZZvIVRQ4E7I" title="Github Issues" target="_blank" rel="noopener noreferrer">
            <icon name="tabler:deer" class="w-8" size="1.5rem" />
          </a>
        </div>
      </div>
    </footer>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

theme.global.name.value = 'dark'

useHead({
  title: '中壢大中官網',
  meta: [
    { name: 'description', content: '中壢大中官方網站' },
    { name: 'google-site-verification', content: 'X9eP00pJfv2y0GzKFMaVhbDvg7s8WL8yC1w2bxRb07M' },
  ],
})
useSeoMeta({
  title: '中壢大中官網',
  ogTitle: '中壢大中官網',
  description: '中壢大中官方網站',
  ogDescription: '中壢大中官方網站',
})
</script>

<style scoped>
@import url("./assets/styles.css");
</style>
