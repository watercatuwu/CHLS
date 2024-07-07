<template>
  <v-card class="relative pb-16 rounded-lg">
    <v-img
        class="rounded-t-lg"
        cover
        :src="props.image"
        aspect-ratio="1"
    />
    <v-card-text>
        <h1 class="text-2xl font-bold">
        {{ props.name }}
        </h1>
        <span class="text-gray-400 text-lg">{{ props.nick.toUpperCase() }}</span>
        <p class="text-xl">{{ props.description }}</p>
        <v-chip class="mt-2" size="large">
            {{ props.type }}
        </v-chip>
    </v-card-text>
    <v-card-actions class="absolute bottom-0 left-0 w-full bg-surface-light justify-end items-center">
        <div class="flex gap-2 items-center">
            <div v-for="[key, value] of Object.entries(props.social)" >
                <a :href="value" target="_blank" rel="noopener noreferrer">
                    <icon :name="geticon(key)" size="2rem"/>
                </a>
            </div>
        </div>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps({
    nick: String,
    name: String,
    description: String,
    image: String,
    social: Object,
    type: String
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

<style scoped>
#img{
    min-height: 500px;
    max-height: 500px
}
</style>