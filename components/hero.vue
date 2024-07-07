<template>
    <!---->
    <div class="rgb-border rounded-lg relative flex justify-center items-center">
        <div class="relative z-10 w-full m-1">
            <div class="w-full h-48 rounded-lg shadow-lg bg-no-repeat bg-center bg-cover bg-[url('https://i.meee.com.tw/O1Feevv.png')]">
                <div class="herocontent w-full h-full rounded-lg">
                    <div class="w-full h-full flex flex-col gap-2 justify-center items-center">
                        <h1 class="text-5xl font-bold text-white">中壢大中</h1>
                        <p class="text-lg text-gray-300">值得你信賴</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.rgb-border {
    background-image: linear-gradient(to right, #FF4500, #FFC300, #FF4500, #00FF00, #0000FF, #FF00FF, #FF00FF);
    background-size: 2000% 2000%;
    animation: gradient 10s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.herocontent {
    background-color: rgba(0, 0, 0, 0.3);
    animation: opacity-anime 10s ease infinite;
}

@keyframes opacity-anime {
    0% { background-color: rgba(0, 0, 0, 0.3); }
    50% { background-color: rgba(0, 0, 0, 0.6); }
    100% { background-color: rgba(0, 0, 0, 0.3); }
}
</style>
