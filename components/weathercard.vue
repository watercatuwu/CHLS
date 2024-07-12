<template>
    <v-card v-if="data">
    <div class="px-4 py-2">
      <v-card-item :title="data.StationName">
        <template v-slot:subtitle>
          {{ data.WeatherElement.Weather }}
        </template>
      </v-card-item>
  
      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <v-col
            cols="6"
          >
            <h3 class="text-h3">{{Math.round(data.WeatherElement.AirTemperature)}}&deg;C</h3>
            <p class="text-gray-400">
                {{data.WeatherElement.DailyExtreme.DailyHigh.TemperatureInfo.AirTemperature}} / 
                {{data.WeatherElement.DailyExtreme.DailyLow.TemperatureInfo.AirTemperature}}

            </p>
          </v-col>
  
          <v-col class="text-right" cols="6">
            <icon :name="getWeatherIcon(data.WeatherElement.Weather)" size="8rem" />
          </v-col>
        </v-row>
      </v-card-text>
  
      <div class="d-flex pb-2 justify-space-between">
        <v-list-item density="compact">
            <div class="flex item-center gap-2 text-gray-400">
              <icon name="tabler:wind" size="1.5rem" />
              {{data.WeatherElement.WindSpeed}} km/h
            </div>
          </v-list-item>
  
        <v-list-item density="compact">
          <div class="flex item-center gap-2 text-gray-400">
            <icon name="tabler:umbrella" size="1.5rem" />
            {{raindata}}%
          </div>
        </v-list-item>
      </div>
    </div>
    </v-card>
  </template>

<script setup>
import axios from 'axios';
import { DateTime } from 'luxon';

const expand = ref(false)

const data = ref(null)
const raindata = ref(null)

const runtimeConfig = useRuntimeConfig()
const CWAKEY =  runtimeConfig.public.CWAKEY

const getWeather = async () => {
  const res = await axios.get(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=${CWAKEY}&StationId=C0C700`)
  const rainres = await axios.get(`https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${CWAKEY}&format=JSON&locationName=%E6%A1%83%E5%9C%92%E5%B8%82&elementName=PoP`)
  data.value = res.data.records.Station[0]
  raindata.value = rainres.data.records.location[0].weatherElement[0].time[0].parameter.parameterName
  console.log(raindata.value)
  console.log(data.value)
}

const weatherIcon = {
  '晴': 'meteocons:clear-day-fill',
  '多雲': 'meteocons:cloudy-fill',
  '陰': 'meteocons:extreme-fill',
}

const getWeatherIcon = (weather) => {
    return weatherIcon[weather] || 'meteocons:not-available-fill';
}

getWeather()
</script>