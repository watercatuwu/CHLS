<template>
  <v-card v-if="data">
    <div class="px-4 py-2">
      <div class="flex justify-between">
        <v-card-item title="中壢">
          <template v-slot:subtitle>
            {{ decodeWeatherCode(data.current.weather_code) }}
          </template>
        </v-card-item>
        <p class="text-end p-2 text-gray-400">
          Last updated
          {{ DateTime.fromISO(data.current.time).toFormat('HH:mm') }}
        </p>
      </div>
  
      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <v-col
            cols="6"
          >
            <h3 class="text-h3">{{data.current.temperature_2m}}&deg;C</h3>
            <p class="text-gray-400">
                {{data.daily.temperature_2m_min[0]}} / 
                {{data.daily.temperature_2m_max[0]}}

            </p>
          </v-col>
  
          <v-col class="text-right" cols="6">
            <icon :name="getWeatherIcon(data.current.weather_code)" size="7.5rem" />
          </v-col>
        </v-row>
      </v-card-text>
  
      <div class="grid grid-cols-2 gap-2 p-4">
        <div class="flex item-center text-gray-400 gap-1">
          <icon name="tabler:temperature" size="1.5rem" />
          體感
          {{data.current.apparent_temperature}}&deg;C
        </div>
        <div class="flex item-center text-gray-400 gap-1">
          <icon name="tabler:circle-percentage" size="1.5rem" />
          濕度
          {{data.current.relative_humidity_2m}}%
        </div>
        <div class="flex item-center text-gray-400 gap-1">
          <icon name="meteocons:wind" size="1.5rem" />
          {{getDirection(data.current.wind_direction_10m)}}
          {{data.current.wind_speed_10m}} km/h
        </div>
        <div class="flex item-center text-gray-400 gap-1">
          <icon name="tabler:umbrella" size="1.5rem" />
          {{Math.max(...getPrecipitation(data))}}%
          ({{getPrecipitation(data).indexOf(Math.max(...getPrecipitation(data)))}}時)
        </div>
      </div>
    </div>
  </v-card>
  </template>

<script setup>
import axios from 'axios';
import { DateTime } from 'luxon';

const data = ref(null)

const getWeather = async () => {
  const apiurl = "https://api.open-meteo.com/v1/forecast?latitude=24.9633&longitude=121.2403&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max&timezone=Asia%2FSingapore&forecast_days=3"
  const res = await axios.get(apiurl)
  data.value = res.data
  console.log(data.value)
}

const getPrecipitation = (d) => {
  return d.hourly.precipitation_probability.slice(0,24)
}

const weatherCodeIcons = {
  0: "meteocons:clear-day-fill",
  1: "meteocons:clear-day-fill",
  2: "meteocons:cloudy-fill",
  3: "meteocons:extreme-fill",
  45: "meteocons:fog-fill",
  48: "meteocons:fog-fill",
  51: "meteocons:drizzle-fill",
  53: "meteocons:drizzle-fill",
  55: "meteocons:drizzle-fill",
  56: "meteocons:snow-fill",
  57: "meteocons:snow-fill",
  61: "meteocons:rain-fill",
  63: "meteocons:rain-fill",
  65: "meteocons:rain-fill",
  66: "meteocons:snow-fill",
  67: "meteocons:snow-fill",
  71: "meteocons:snowflake-fill",
  73: "meteocons:snowflake-fill",
  75: "meteocons:snowflake-fill",
  77: "meteocons:snowflake-fill",
  80: "meteocons:extreme-rain-fill",
  81: "meteocons:extreme-rain-fill",
  82: "meteocons:extreme-rain-fill",
  85: "meteocons:snowflake-fill",
  86: "meteocons:snowflake-fill",
  95: "meteocons:thunderstorms-extreme-fill",
  96: "meteocons:snowflake-fill",
  99: "meteocons:snowflake-fill"
};

const getWeatherIcon = (weather) => {
    return weatherCodeIcons[weather] || 'meteocons:not-available-fill';
}

const weatherCodeDescriptions = {
  0: "晴朗",
  1: "晴朗",
  2: "多雲",
  3: "陰天",
  45: "霧",
  48: "霧凇",
  51: "小雨",
  53: "中雨",
  55: "大雨",
  56: "小凍雨",
  57: "大凍雨",
  61: "小雨",
  63: "中雨",
  65: "大雨",
  66: "小凍雨",
  67: "大凍雨",
  71: "小雪",
  73: "中雪",
  75: "大雪",
  77: "雪粒",
  80: "小陣雨",
  81: "中陣雨",
  82: "強陣雨",
  85: "小陣雪",
  86: "大陣雪",
  95: "輕度或中度雷陣雨",
  96: "輕度冰雹雷陣雨",
  99: "強冰雹雷陣雨"
};

function decodeWeatherCode(weatherCode) {
  return weatherCodeDescriptions[weatherCode] || "未知天氣代碼";
}

const getDirection = (angle) => {
    const directions = ["北", "東北", "東", "東南", "南", "西南", "西", "西北"];
    const index = Math.round(angle / 45) % 8;
    return directions[index];
}

getWeather()
</script>