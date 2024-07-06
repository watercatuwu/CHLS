<template>
    <button @click="toggleTheme">
        <icon :name="iconName" size="1.5rem" />
    </button>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const icons = {
    'light': 'tabler:sun',
    'dark': 'tabler:moon',
}
const iconName = ref(icons[theme.global.name.value])

function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    iconName.value = icons[theme.global.name.value]
}
</script>
