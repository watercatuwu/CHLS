<template>
    <v-card>
        <v-tabs
          bg-color="indigo-darken-2"
          v-model="tab"
          height="60"
          center-active
          grow
        >
          <v-tab
            v-for="t in newsTabs"
            :value="t"
            rounded="lg"
          >
          <h1 class="text-lg">{{t}}</h1>
          </v-tab>
        </v-tabs>
        <v-progress-linear v-if="loading" color="indigo-lighten-2" height="8" indeterminate></v-progress-linear>
        <div v-else>
          <div class="text-center">
            <v-pagination v-model="page" :length="99" :total-visible="4" rounded="circle"></v-pagination>
          </div>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="t in newsTabs" :value="t">
              <v-expansion-panels>
                  <newscard v-for="n in news.value"
                    :title="n.title"
                    :titleColor="n.title_color"
                    :clicks="n.clicks"
                    :time="n.time"
                    :name="n.name"
                    :id="n.newsId" />
              </v-expansion-panels>
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
        <v-card-text class="text-end">
          powered by <a href="https://github.com/BWsix/CLHS-api/" target="_blank">BWsix/CLHS-api</a>
        </v-card-text>
      </v-card>
</template>

<script setup>
const newsTabs = [
  '首頁',
  '衛生保健',
  '升學資訊',
  '營隊研習',
  '校內競賽',
  '校外競賽',
  '法令公告',
  '新生專區',
  '壢中新聞',
];
const page = ref(1);
const tab = ref(newsTabs[0]);
const news = ref([]);
const loading = ref(false);

const getNewsList = async () => {
  loading.value = true;
  try {
    const { data } = await useFetch(`/api/newslist/${tab.value}/${page.value}`);
    news.value = data;
    loading.value = false;
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

watch(tab, () => {
  page.value = 1
  getNewsList();
})

watch(page, () => {
  getNewsList();
})

getNewsList();
</script>