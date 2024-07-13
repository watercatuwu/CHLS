<template>
    <v-expansion-panel>
        <v-expansion-panel-title @click="getNewsContent">
            <span :style="iconStyle">
                <icon name="mdi:information" size="1.5rem" />
            </span>
            <h1 class="text-lg mx-2">{{ props.title }}</h1>
        </v-expansion-panel-title>
        <v-progress-linear v-if="loading" color="indigo-lighten-2" height="8" indeterminate></v-progress-linear>
        <v-expansion-panel-text v-else>
            <div class="content p-4" v-html="content"></div>
            <div class="flex flex-wrap gap-2 my-4">
                <v-chip size="large">
                    <icon name="tabler:calendar-smile" size="1.5rem" />
                    <p class="ml-2">{{ props.time }}</p>
                </v-chip>
                <v-chip size="large">
                    <icon name="tabler:building" size="1.5rem" />
                    <p class="ml-2">{{ props.name }}</p>
                </v-chip>
                <v-chip size="large">
                    <icon name="tabler:eye" size="1.5rem" />
                    <p class="ml-2">{{ props.clicks }}</p>
                </v-chip>
                <v-chip
                    size="large"
                    color="primary"
                    link
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="`https://www.clhs.tyc.edu.tw/ischool/public/news_view/show.php?nid=${props.id}`"
                >
                    <icon name="tabler:link" size="1.5rem" />
                    <p class="ml-2">連結(附件)</p>
                </v-chip>
            </div>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script setup>
import cheerio from 'cheerio';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const props = defineProps({
    id: String,
    title: String,
    titleColor: String,
    time: String,
    name: String,
    clicks: String,
});

const loading = ref(false)
function hexToColor(hex) {
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    if (r > g && r > b) {
        return '#e11d48';
    } else if (g > r && g > b) {
        return '#16a34a';
    } else if (b > r && b > g) {
        return '#2563eb';
    } else {
        return 'unknown';
    }
}

const iconStyle = {
    color: hexToColor(props.titleColor)
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
.content a {
    text-decoration: underline;
    color:dodgerblue;
}
</style>