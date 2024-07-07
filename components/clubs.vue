<template>
    <v-text-field v-model="search" label="Search" prepend-icon="mdi-magnify"></v-text-field>
    <v-chip-group>
        <v-chip @click="search = ''" size="large">全部</v-chip>
        <v-chip @click="search = `type:${type}`" v-for="type of types" size="large">{{type}}</v-chip>
    </v-chip-group>
    <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
</template>

<script setup>
const loading = ref(true);
const clubs = ref({});
const search = ref('');
const types = ['服務', '學術', '才藝']
const getClubs = async() => {
    loading.value = true
    try {
        const { data } = await useFetch('/api/clubs');
        clubs.value = data.value;
        loading.value = false;
    } catch (error) {
        console.error('Error fetching clubs:', error);
    }
}

getClubs();

const clubfilter = (name, nick, type) => {
    if (!name) return false;
    console.log()
    return name.includes(search.value) || nick.toLowerCase().includes(search.value.toLowerCase()) || search.value === `type:${type}`
}

const exampleObject = {
  nick: 'CLXX',
  name: '新增或修改社團資訊?',
  description: '請至Github issue創建請求(label選擇clubrequest)或是聯絡Discord @watercatuwu',
  image: 'https://i.meee.com.tw/VHoZLWW.jpg',
  social: {
    github: 'https://github.com/watercatuwu/CHLS/issues/new'
  },
  type: '???'
};
</script>
