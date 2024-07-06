<template>
    <v-card
    append-icon="mdi-open-in-new"
    :href="props.url"
    :prepend-icon="props.icon"
    :title="props.title"
    :subtitle="props.subtitle"
    rel="noopener"
    target="_blank"
  ></v-card>
</template>

<script setup>
const props = defineProps({
    title: String,
    subtitle: String,
    icon: String,
    url: String,
})
</script>