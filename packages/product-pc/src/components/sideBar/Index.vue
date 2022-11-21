<template>
  <div class="side-bar">
    <ul class="menu">
      <li v-for="item in renderData" :key="item.path" class="menu__item">
        <div
          :class="[
            'menu__item__larget-title',
            { 'active-box': isActive(item) },
            { active: isActive(item) },
          ]"
          @click="handleChange(item.path)"
        >
          <div class="menu__item__larget-title--content">
            <img
              :src="isActive(item) ? item.activeIcon : item.noActiveIcon"
              class="image"
            />
            {{ item.label }}
          </div>
        </div>
        <template v-if="item.children?.length !== 0">
          <ul :class="['child-menu', { 'is-hidden': activeItem !== item.path }]">
            <li
              v-for="i in item.children"
              :key="i.path"
              :class="['child-menu__item', { active: activeItemChildren === i.path }]"
              @click="handleChangeChildren(i.path)"
            >
              {{ i.label }}
            </li>
          </ul>
        </template>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { SideBarProps } from './type'

const route = useRoute()
const router = useRouter()
const props = defineProps<{
  renderData: SideBarProps[]
}>()

const activeItem = ref('/home')

const activeItemChildren = ref('/' + route.path.split('/')[1])

const handleChange = (i: string) => {
  activeItem.value = i
  const r = props.renderData.find((item) => {
    return item.path === i
  })
  /**二级路由置空或者置为第一项 */
  activeItemChildren.value = (r?.children && r?.children[0].path) || 'defaultNull'
  router.push(i)
}
/**检测到点击子路由时，进行跳转 */
const handleChangeChildren = (i: string) => {
  activeItemChildren.value = i
  router.push(i)
}
const isActive = (item: SideBarProps) => {
  let path: string
  if (item.path === '/home') {
    path = '/graphics'
  } else {
    path = '/log'
  }
  return route.path.includes(path)
}
</script>
<style scoped lang="less">
.side-bar {
  flex: 1;
  display: flex;
  width: 100%;
}

.menu {
  box-sizing: border-box;
  width: 190px;
  height: 100%;
  padding: 10px 0;
  background: #ffffff;
  box-shadow: 2px 0px 6px rgba(34, 78, 237, 0.09);
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__item {
    &__larget-title {
      width: 190px;
      height: 58px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-weight: 700;
      background-color: #fff;
      font-size: 18px;
      line-height: 23px;
      color: #adbce1;
      margin-bottom: 10px;
      &--content {
        margin-left: 54px;
        position: relative;
        .image {
          position: absolute;
          left: -10px;
          transform: translateX(-100%);
        }
      }
    }
    .child-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 0.15s ease;
      height: 134px;
      overflow: hidden;
      &__item {
        width: 190px;
        height: 58px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 8px;
        color: #adbce1;
      }
    }
  }
}
.active {
  background: #f0f4ff;
  color: #0047ff !important;
}
.active-box {
  position: relative;
  &::after {
    content: '';
    width: 6px;
    height: 100%;
    background-color: #0047ff;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.is-hidden {
  height: 0 !important;
  overflow: hidden;
}
</style>
