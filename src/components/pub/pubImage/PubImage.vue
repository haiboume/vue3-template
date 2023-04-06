<script lang="ts" setup>
interface IProps {
  src: string
  height?: number
  radius?: number
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}

defineProps<IProps>()
</script>

<template>
  <div class="image-wrapper" :style="{ height: `${height}px`, borderRadius: `${radius}px` }">
    <img class="image" loading="lazy" :src="src" :alt="src" :style="{ objectFit: fit }" />
  </div>
</template>

<style scoped lang="less">
.image-wrapper {
  background-color: #eaeaea;
  overflow: hidden;

  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
