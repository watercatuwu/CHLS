<template>
    <button>
      <icon name="tabler:menu-deep" size="1.5rem"/>
      <v-menu width="200" activator="parent">
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title @click="scrollToElement(item.anchor)">
                {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </button>
</template>

<script setup>
const items = [
  { title: '常用連結', anchor: 'shortcuts' },
  { title: '學校公告', anchor: 'announcements' },
  { title: '行事曆', anchor: 'calendar' },
  { title: '社團', anchor: 'clubs' },
  { title: '常見問題', anchor: 'faq' },
];
</script>