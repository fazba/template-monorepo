<template>
  <div class="sub-side-bar">
    <ul class="nav">
      <li
        v-for="item in data"
        :key="item.label"
        :class="['nav__nav-item', { 'nav__nav-item--active': activeItem == item.path }]"
        @click="changeActive(item)"
      >
        {{ item.label }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const data = [
  {
    label: '预报订正与导出',
    path: '/graphicsTravel/correction',
  },
  {
    label: '旅游活动',
    path: '/graphicsTravel/activity',
  },
  {
    label: '预报产品',
    path: '1',
  },
  {
    label: '操作记录',
    path: '2',
  },
]
const router = useRouter()
const route = useRoute()

const activeItem = ref(route.path)

const changeActive = (item: { label: string; path: string }) => {
  activeItem.value = item.path
  router.push(item.path)
}
</script>
<style scoped lang="less">
.sub-side-bar {
  flex: 1;
  display: flex;
  flex-direction: row;
  .nav {
    box-sizing: border-box;
    width: 175px;
    height: 100%;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__nav-item {
      width: 135px;
      height: 35px;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 4px;
      font-weight: 700;
      font-size: 18px;
      color: #adbce1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &--active {
        color: #0047ff;
        background: rgba(224, 233, 255, 0.5);
      }
    }
  }
}
</style>
