<script lang="ts" setup>
import type { ICategory } from '@/types/category'

interface IProps {
  categories: ICategory[]
}

interface IEmits {
  (e: 'clickEvent', value: string): void
}

defineProps<IProps>()
defineEmits<IEmits>()
</script>

<template>
  <div class="cateory">
    <div class="cateory-wrapper">
      <ul class="cateory-list">
        <li
          v-for="item in categories"
          :key="item.name"
          :class="{ active: $route.params.value === item.name }"
          class="cateory-list-item"
          @click="$emit('clickEvent', item.name)"
        >
          {{ item.title || item.name }}
        </li>
      </ul>
    </div>
    <div class="cateory-mask"></div>
  </div>
</template>

<style scoped lang="less">
.cateory {
  position: relative;
  font-size: 0;
}

.cateory-wrapper {
  width: 100%;
}

.cateory-mask {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  background-color: #fff;
}

.cateory-list {
  width: 100%;
  height: 100%;
  padding: 10px 0 10px 0;
  display: inline-block;
  box-sizing: border-box;
  font-size: 0;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

.cateory-list-item {
  padding: 6px 18px;
  border-radius: 20px;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
  border: 1px solid #ef560f;
  color: #ef560f;
}

.cateory-list-item:last-child {
  margin-right: 0;
}

.cateory-list-item.active {
  background-color: #ef560f;
  color: #fff;
}
</style>
