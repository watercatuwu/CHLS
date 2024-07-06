<template>
  <v-card>
    <v-img
      height="500px"
      image="500px"
      :src="props.image"
      cover
    ></v-img>

    <div class="p-4">
        <h1 class="text-2xl font-bold">
        {{ props.name }}
        </h1>
        <span class="text-gray-400 text-lg">{{ props.nick.toUpperCase() }}</span>
        <p class="text-xl">{{ props.description }}</p>
        <div class="flex justify-end gap-2">
            <div v-for="[key, value] of Object.entries(props.social)" >
                <a :href="value" target="_blank" rel="noopener noreferrer">
                    <icon :name="geticon(key)" size="2rem"/>
                </a>
            </div>
        </div>
    </div>
  </v-card>
</template>

<script setup>
const props = defineProps({
    nick: String,
    name: String,
    description: String,
    image: String,
    social: Object,
})

const socialIcons = {
    instagram:'tabler:brand-instagram',
    facebook:'tabler:brand-facebook',
    twitter:'tabler:brand-twitter',
    github:'tabler:brand-github',
    site: 'tabler:world'
}

const geticon = (name) => {
    const defaulticon = 'tabler:alert-circle'
    return socialIcons[name] || defaulticon
}
</script>