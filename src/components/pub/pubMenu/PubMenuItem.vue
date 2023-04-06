<script lang="ts" setup>
import { ICategory } from './types'

interface IProps {
  categories: ICategory[]
}

interface IEmits {
  (e: 'clickEvent', name: string): void
  (e: 'closeMenu', show: boolean): void
}

defineProps<IProps>()
const emits = defineEmits<IEmits>()

const closeMenu = () => {
  emits('closeMenu', false)
}

const clickEvent = (name: string) => {
  emits('clickEvent', name)
  emits('closeMenu', false)
}
</script>

<template>
  <div class="menu">
    <ul class="menu-list">
      <li v-for="item in categories" :key="item.name" class="menu-list-item" @click="clickEvent(item.name)">
        {{ item.name }}
      </li>
    </ul>
    <div class="menu-close" @click="closeMenu"></div>
  </div>
</template>

<style scoped lang="less">
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 54%;
  background-color: #ef560f;
  z-index: 99;

  .menu-list {
    width: 100%;
    font-size: 16px;
    line-height: 18px;
    font-weight: normal;
    color: #fff;
    margin: 0 auto;
    text-align: center;
    padding: 0;

    .menu-list-item {
      padding: 0 15px;
      margin-bottom: 20px;
    }
  }

  .menu-close {
    width: 24px;
    height: 35px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    background-image: url('@/assets/img/close.png');
    background-size: 100%;
  }
}
</style>
