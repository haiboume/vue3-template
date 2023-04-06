<script lang="ts" setup>
import { ref } from 'vue'

import { ICategory } from './types'

import PubMenuItem from './PubMenuItem.vue'

interface IProps {
  categories: ICategory[]
}

interface IEmits {
  (e: 'clickEvent', value: string): void
}

defineProps<IProps>()
defineEmits<IEmits>()

const showMenu = ref(false)
</script>

<template>
  <div class="menu-toggle" @click="() => (showMenu = true)">
    <i class="menu-toggle-line line-1"></i>
    <i class="menu-toggle-line line-2"></i>
    <i class="menu-toggle-line line-3"></i>
  </div>
  <transition name="content">
    <PubMenuItem
      v-if="showMenu"
      :categories="categories"
      @click-event="(name: string) => $emit('clickEvent', name)"
      @close-menu="() => (showMenu = false)"
    />
  </transition>
  <transition name="mask">
    <div v-if="showMenu" class="menu-mask" @click="() => (showMenu = false)"></div>
  </transition>
</template>

<style lang="less" scoped>
.menu-toggle {
  position: relative;
  width: 20px;
  height: 30px;

  .menu-toggle-line {
    position: absolute;
    width: 20px;
    height: 3px;
    background-color: #000000;
    border-radius: 2px;
    box-sizing: border-box;
  }

  .menu-toggle-line.line-1 {
    top: 7px;
    right: 0;
  }

  .menu-toggle-line.line-2 {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .menu-toggle-line.line-3 {
    bottom: 7px;
    right: 0;
  }
}

.menu-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 98;
}

.content-enter-active,
.content-leave-active {
  transition: all 0.4s linear;
}

.content-enter-from,
.content-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.content-enter-to,
.content-leave-from {
  opacity: 1;
}

.mask-enter-active,
.mask-leave-active {
  transition: all 0.4s linear;
}

.mask-enter-from,
.mask-leave-to {
  opacity: 0;
}

.mask-enter-to,
.mask-leave-from {
  opacity: 1;
}
</style>
