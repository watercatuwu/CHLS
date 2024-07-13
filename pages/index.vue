<template>
    <v-app class="flex flex-col min-h-screen">
        <v-app-bar id='appbar' app color="indigo-darken-2" dark>
          <v-toolbar-title @click="scrollToElement('appbar')" class="text-h5 cursor-pointer">中壢大中</v-toolbar-title>
          <v-spacer></v-spacer>
          <div class="flex gap-4 p-4">
            <Themetoggle />
            <navmenu />
          </div>
        </v-app-bar>
        <div class="flex-1 justify-center mt-24 mb-12">
          <div class="flex flex-col container gap-6 mx-auto p-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Hero />
              <Weathercard />
            </div>
            <linktitle id="shortcuts" title="常用連結" anchor="shortcuts" />
            <Shortcuts />
            <linktitle id="announcements" title="學校公告" anchor="announcements" />
            <News />
            <linktitle id="calendar" title="行事曆" anchor="calendar" />
            <Calendar />
            <linktitle id="clubs" title="社團" anchor="clubs" />
            <Clubs />
          </div>
        </div>
        <Footer />
    </v-app>
</template>