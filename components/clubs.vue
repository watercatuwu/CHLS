<template>
    <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <clubcard v-for="[key, value] of Object.entries(clubs)"
            :nick="key"
            :name="value.name"
            :description="value.description"
            :image="value.image"
            :social="value.social"
        />
        <clubcard
            :nick="exampleObject.nick"
            :name="exampleObject.name"
            :description="exampleObject.description"
            :image="exampleObject.image"
            :social="exampleObject.social"
        />
    </div>
</template>

<script setup>
const loading = ref(true);
const clubs = ref({});
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

const exampleObject = {
  nick: 'uwu',
  name: '加入你的社團?',
  description: '請至Github issue創建請求(label選擇clubrequest)或是聯絡Discord @watercatuwu',
  image: 'https://i.meee.com.tw/VHoZLWW.jpg',
  social: {
    github: 'https://github.com/watercatuwu/CHLS/issues/new'
  }
};
</script>