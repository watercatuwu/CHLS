<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

theme.global.name.value = 'dark'
</script>

<style scoped>
@import url("./assets/styles.css");
</style>
