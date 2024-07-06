<template>
  <v-app class="flex flex-col min-h-screen">
    <v-app-bar id='appbar' app color="indigo-darken-2" dark>
      <v-toolbar-title class="text-h5">中壢大中</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="flex gap-4 p-4">
        <Themetoggle />
        <navmenu />
      </div>
    </v-app-bar>
    <div class="flex-1 justify-center my-16">
      <div class="flex flex-col container gap-6 mx-auto p-4">
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
          <a href="https://www.clhs.tyc.edu.tw/" title="學校官網" target="_blank" rel="noopener noreferrer">
            <icon name="tabler:school" class="w-8" size="1.5rem" />
          </a>
          <a href="https://github.com/watercatuwu/chls" title="Github Repo" target="_blank" rel="noopener noreferrer">
            <icon name="tabler:brand-github" class="w-8" size="1.5rem" />
          </a>
        </div>
      </div>
    </footer>
  </v-app>
</template>

<script setup>
useHead({
  title: '中壢大中',
  meta: [
    { name: 'description', content: '中壢大中官方網站' }
  ],
})
useSeoMeta({
  title: '中壢大中',
  ogTitle: '中壢大中',
  description: '中壢大中官方網站',
  ogDescription: '中壢大中官方網站',
})
</script>

<style scoped>
@import url("./assets/styles.css");
</style>
