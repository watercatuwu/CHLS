<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <shortcutcard
            v-for="shortcut in shortcuts"
            :title="shortcut.title"
            :subtitle="shortcut.subtitle"
            :icon="shortcut.icon"
            :url="shortcut.url"
        />
    </div>
</template>

<script setup>
const shortcuts = [
    {
        title: "中大壢中官網",
        subtitle: "學校官網",
        icon: "mdi-school-outline",
        url: "https://www.clhs.tyc.edu.tw/home"
    },
    {
        title: "師生智慧校園平台",
        subtitle: "線上請假、成績查詢、選課系統...",
        icon: "mdi-account-group-outline",
        url: "https://shcloud2.k12ea.gov.tw/CLHSTYC/Auth"
    },
    {
        title: "自主學習系統",
        subtitle: "圖書館自主學習系統",
        icon: "mdi-archive-outline",
        url: "https://auto-learning.clhs.tyc.edu.tw/"
    },
    {
        title: "壢中班聯",
        subtitle: "發布學校活動、班聯開會結果...",
        icon: "mdi-instagram",
        url: "https://www.instagram.com/__clcf__/"
    },
    {
        title: "新生專區",
        subtitle: "小高一需要知道的都在這裡了",
        icon: "mdi-book-open-outline",
        url: "https://www.clhs.tyc.edu.tw/ischool/publish_page/284/"
    },
    {
        title: "CLHS Gohan",
        subtitle: "同團隊開發的班級午餐訂餐系統",
        icon: "mdi-food-drumstick-outline",
        url: "https://clhsgohan.vercel.app/"
    }
]
</script>