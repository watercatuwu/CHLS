<template>
        <v-expansion-panel>
            <v-expansion-panel-title @click="getNewsContent">
                <h1 class="text-xl" :style="titleStyle">{{ props.title }}</h1>
            </v-expansion-panel-title>
            <v-progress-linear v-if="loading" color="indigo-lighten-2" height="8" indeterminate></v-progress-linear>
            <v-expansion-panel-text v-else>
                <div id="content" class="p-4 text-lg" v-html="content"></div>
                <div class="flex flex-wrap gap-2 my-4">
                    <v-chip label size="large">
                        <icon name="tabler:calendar-smile" class="w-8" size="1.5rem" />
                        {{ props.time }}
                    </v-chip>
                    <v-chip label size="large">
                        <icon name="tabler:building" class="w-8" size="1.5rem" />
                        {{ props.name }}
                    </v-chip>
                    <v-chip label size="large">
                        <icon name="tabler:eye" class="w-8" size="1.5rem" />
                        {{ props.clicks }}
                    </v-chip>
                    <v-chip label  size="large" link target="_blank" rel="noopener noreferrer" :href="`https://www.clhs.tyc.edu.tw/ischool/public/news_view/show.php?nid=${props.id}`">
                        <icon name="tabler:link" class="w-8" size="1.5rem" />
                        Link
                    </v-chip>
                </div>
            </v-expansion-panel-text>
        </v-expansion-panel>
</template>

<script setup>
import cheerio from 'cheerio';
const props = defineProps({
    id: String,
    title: String,
    titleColor: String,
    time: String,
    name: String,
    clicks: String,
});

const loading = ref(false)
const titleStyle = {
    color: '#'+props.titleColor
}
const content = ref('')

const getNewsContent = async() => {
  loading.value = true
  const id = props.id;
  const data = await $fetch(`/api/newscontent/${id}`);
  content.value =  cleanStyle(data);
  loading.value = false
}

const cleanStyle= (html) =>{
    const content = cheerio.load(html);
    content('[style]').removeAttr('style');
    return content.html();
}
</script>

<style>
</style>