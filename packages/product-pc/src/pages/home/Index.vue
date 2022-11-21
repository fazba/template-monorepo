<template>
  <div class="home">
    <div class="top-header">
      <div class="container">
        <div class="container__left">
          <img :src="icon" class="container__left__image" />
          <img :src="title" class="container__left__image" />
        </div>
        <div class="container__right">
          <img :src="user" class="container__right__image" />
          <span class="container__right__text">张家界市气象局</span>
          <img :src="exit" class="container__right__image" />
          <span class="container__right__text">退出</span>
        </div>
      </div>
    </div>
    <SideBar :renderData="data">
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </SideBar>
  </div>
</template>
<script lang="ts" setup>
import SideBar from '@/components/sideBar/Index.vue'
import icon from './assets/icon.svg'
import title from './assets/title.svg'
import exit from './assets/exit.svg'
import user from './assets/user.svg'
import activeGraphic from './assets/activeGraphic.svg'
import noActiveGraphic from './assets/noActiveGraphic.svg'
import activeProductLog from './assets/activeProductLog.svg'
import noActiveProductLog from './assets/noActiveProductLog.svg'
const data = [
  {
    label: '图文产品制作',
    path: '/home',
    activeIcon: activeGraphic,
    noActiveIcon: noActiveGraphic,
    children: [
      {
        label: '旅游',
        path: '/graphicsTravel',
        activeIcon: '/',
        noActiveIcon: '/',
      },
      {
        label: '交通',
        path: '/graphicsTraffic',
        activeIcon: '/',
        noActiveIcon: '/',
      },
    ],
  },
  {
    label: '产品日志',
    path: '/log',
    activeIcon: activeProductLog,
    noActiveIcon: noActiveProductLog,
  },
]
</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top-header {
  height: 64px;
  width: 100%;
  .container {
    width: 100%;
    height: 64px;
    background: linear-gradient(90.01deg, #f3f6ff 0%, #eef2ff 100%);
    box-shadow: 0px 2px 6px rgba(90, 105, 143, 0.15);

    display: flex;
    align-items: center;
    justify-content: space-between;
    &__left {
      cursor: pointer;
      margin-left: 24px;

      display: flex;
      justify-content: center;
      align-items: center;
      &__image:first-child {
        margin: 0 8px 0 0;
      }
    }
    &__right {
      margin-right: 24px;
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 18px;

      color: #666666;
      &__image {
        margin-right: 6px;
      }
      &__text {
        margin-right: 6px;
      }
    }
  }
}
</style>
