<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import { debounce } from '@/utils/general'

interface IEmtis {
  (e: 'onChange', value: 'small' | 'large'): void
}

const emits = defineEmits<IEmtis>()

const size = ref<'small' | 'large'>('small')
const mark = ref()
const isShow = ref(false)

const scrollHandler = debounce(() => {
  const markRect = mark.value.getBoundingClientRect()
  isShow.value = markRect.top < 0 ? true : false
}, 500)

const changeLayout = () => {
  size.value = size.value === 'small' ? 'large' : 'small'
  emits('onChange', size.value)
}

const gridImgbg = computed(
  () =>
    `background-image: url('${
      size.value === 'large' ? require('@/assets/img/grid.png') : require('@/assets/img/grid_one.png')
    }')`
)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', scrollHandler, false)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler, false)
})
</script>

<template>
  <span class="mark" ref="mark"></span>
  <div class="icon" :class="{ remove: !isShow }">
    <span class="quiz-item-top" @click="scrollToTop()"></span>
    <span :style="gridImgbg" class="quiz-item-grid" @click="changeLayout"></span>
  </div>
</template>

<style scoped lang="less">
.icon {
  position: fixed;
  right: 15px;
  bottom: 35px;
  animation: show 0.7s;
  z-index: 999;

  .quiz-item-top {
    display: block;
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    background-image: url('@/assets/img/top.png');
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
  }

  .quiz-item-grid {
    display: block;
    width: 40px;
    height: 40px;
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  }
}

.icon.remove {
  animation: remove 0.7s;
  transform: translateY(130px);
}

@keyframes show {
  0% {
    transform: translateY(130px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes remove {
  100% {
    transform: translateY(130px);
  }
  0% {
    transform: translateY(0);
  }
}
</style>
