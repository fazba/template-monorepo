<template>
  <div class="container">
    <router-view></router-view>
    <Tabbar route>
      <TabbarItem replace :to="item.path" v-for="item in routes" :key="item.name">
        <span>{{ item.name }}</span>
        <template #icon="slotProps">
          <img :src="slotProps.active ? item.activeIcon : item.noActiveIcon" />
        </template>
      </TabbarItem>
    </Tabbar>
  </div>
</template>
<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant'
import travelWeather from '@/assets/svg/travel-weather.svg'
import travelWeatherActive from '@/assets/svg/travel-weather-active.svg'
import featureLandscape from '@/assets/svg/featured-landscape.svg'
import featureLandscapeActive from '@/assets/svg/featured-landscape-active.svg'
import travelActivity from '@/assets/svg/travel-activity.svg'
import travelActivityActive from '@/assets/svg/travel-activity-active.svg'
/**这里为了方便简写，到时候直接从route()读就好 */
const routes = [
  {
    name: '旅游天气',
    path: '/travel-weather',
    activeIcon: travelWeatherActive,
    noActiveIcon: travelWeather,
  },
  // {
  //   name: '特色景观',
  //   path: '/featured-landscape',
  //   activeIcon: featureLandscapeActive,
  //   noActiveIcon: featureLandscape,
  // },
  {
    name: '旅游活动',
    path: '/travel-activity',
    activeIcon: travelActivityActive,
    noActiveIcon: travelActivity,
  },
]
</script>
<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
}
</style>
