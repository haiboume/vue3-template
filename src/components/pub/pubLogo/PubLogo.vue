<script lang="ts" setup>
interface IProps {
  logo: string
}

interface IEmits {
  (e: 'clickEvent'): void
}

defineEmits<IEmits>()
defineProps<IProps>()
</script>

<template>
  <div class="logo" @click="$emit('clickEvent')">
    <img class="image" :src="logo" alt="logo" />
  </div>
</template>

<style scoped lang="less">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    max-width: 100%;
  }
}
</style>
