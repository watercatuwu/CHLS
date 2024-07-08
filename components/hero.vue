<template>
    <div class="w-full h-48 rounded-lg shadow-lg bg-no-repeat bg-center bg-cover bg-[url('https://i.meee.com.tw/O1Feevv.png')]">
        <div class="w-full h-full rounded-lg bg-black/40">
            <div class="w-full h-full flex flex-col gap-2 justify-center items-center">
                <h1 class="text-4xl font-bold text-white">中壢大中官方網站</h1>
                <div class="w-11/12 md:w-1/2 whitespace-nowrap overflow-hidden">
                    <div class="marquee relative w-screen">
                        <p class="text-lg text-gray-300">{{currentText}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const messages = [
  '提供捷徑、學校公告、社團資訊的超級宇宙無敵霹靂好網站',
  '你說得對，但是這就是聖園ミカ，🤔HP61908，攻擊力3932，防禦力115的學生。有必定爆擊🤚，有追傷👌，還能增加攻擊力✌。1540％倍率🤙，甚至會根據敵人血量翻倍✊，只要6cost👍。能裝手錶👈，還有徽章✌。然後，增加自己傷害同時減少受到的傷害👐，還能站前排承傷🙌，地形適性兩張綠臉😨，然後專二還有貫通特效😰。羈絆劇情就👊🏿😭👊🏿啊啊啊啊啊啊🖐😭🤚',
]

const currentText = ref(messages[0])

const randomMessage = () => {
  const random = Math.random()
  const probability = 0.01
  if (random < probability) {
    currentText.value = messages[2]
  }
}

randomMessage()
</script>

<style scoped>
.marquee {
    transform: translateX(10%);
    animation: scroll-left 20s linear infinite;
}

@keyframes scroll-left {
    0% {
        transform: translateX(10%);
    }

    100% {
        transform: translateX(-180%);
    }
}
</style>