<template>
    <v-text-field v-model="search" label="Search" prepend-icon="mdi-magnify"></v-text-field>
    <v-chip-group>
        <v-chip @click="search = `type:${type}`" v-for="type of Object.keys(types)" :key="types" size="large">
            {{type}} {{types[type]}}
        </v-chip>
    </v-chip-group>
    <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <clubcard v-for="[key, value] of Object.entries(clubs)" v-show="clubfilter(value.name, key, value.type)"
            :key="key"
            :nick="key"
            :name="value.name"
            :description="value.description"
            :image="value.image"
            :social="value.social"
            :type="value.type"
        />
        <clubcard v-show="clubfilter(exampleObject.name, exampleObject.nick)"
            :nick="exampleObject.nick"
            :name="exampleObject.name"
            :description="exampleObject.description"
            :image="exampleObject.image"
            :social="exampleObject.social"
            :type="exampleObject.type"
        />
    </div>
    <p class="text-end">圖片來源皆為facebook或instagram社帳</p>
    <p class="text-end"></p>
</template>

<script setup>
import axios from 'axios';
import clubsData from '~/assets/clubs.json';

const loading = ref(true);
const clubs = ref({});
const search = ref('');
const types = typeCounter()
async function getClubs () {
    loading.value = true
    try {
        clubs.value = clubsData
        loading.value = false;
    } catch (error) {
        console.error('Error fetching clubs:', error);
    }
}

getClubs();

function typeCounter () {
    const typeCounts = {};
    typeCounts['全部'] = 0
    for (const key in clubsData) {
        const club = clubsData[key];
        const type = club.type;

        if (typeCounts[type]) {
            typeCounts[type]++;
        } else {
            typeCounts[type] = 1;
        }
        typeCounts['全部']++;
    }
    return typeCounts
}

function clubfilter (name, nick, type) {
    if (!name) return false;
    return name.includes(search.value) || nick.toLowerCase().includes(search.value.toLowerCase()) || search.value === `type:${type}` || search.value === 'type:全部'
}

const exampleObject = {
  nick: 'help',
  name: '社團資訊有誤?',
  description: '詳細請見github repo README或聯絡Discord @watercatuwu',
  image: 'https://i.meee.com.tw/VHoZLWW.jpg',
  social: {
    github: 'https://github.com/watercatuwu/CHLS/issues/new'
  },
  type: '???'
};
</script>
