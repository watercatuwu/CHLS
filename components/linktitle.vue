<template>
    <div>
        <h1 @click="scrollToElement(props.anchor)" class="text-3xl font-semibold hover:underline cursor-pointer my-4">
            <span class="text-gray-400">#</span>
            {{ props.title }}
        </h1>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    anchor: String
})
</script>