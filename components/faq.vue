<template>
    <v-expansion-panels variant="accordion">
    <v-expansion-panel
        v-for="faq in faqs"
        :key="i"
      >
        <v-expansion-panel-title>
            <h1 class="text-2xl">{{ faq.question }}</h1>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="text-lg">{{ faq.answer }}</v-expansion-panel-text>
    </v-expansion-panel>
    </v-expansion-panels>
  </template>

<script setup>
import faqs from '~/assets/faqs.json'
</script>