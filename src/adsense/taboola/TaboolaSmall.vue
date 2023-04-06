<script lang="ts" setup>
import type { ITaboola } from '@/types/taboola'

interface IProps {
  adsense: ITaboola
}

interface IEmits {
  (e: 'clickEvent'): void
}

defineEmits<IEmits>()
defineProps<IProps>()

const bgImg = (img: string) => `background-image: url(${img})`
</script>

<template>
  <div v-if="adsense" class="taboola-top">
    <a class="ads-link" :href="adsense.url" @click="$emit('clickEvent')">
      <div :style="bgImg(adsense.image)" class="taboola-wrapper">
        <div class="mask"></div>
        <span class="sponsored">{{ adsense.sponsered }}</span>
        <span class="title">{{ adsense.title }}</span>
        <span class="info">{{ adsense.desc }}</span>
      </div>
    </a>
  </div>
</template>

<style scoped lang="less">
.taboola-top {
  width: 100%;
  height: 180px;
  margin-top: 16px;

  .taboola-wrapper {
    position: relative;
    height: 100%;
    padding: 0 10px;
    font-size: 0;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .ads-link {
    text-decoration: none;
    color: #ffffff;

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background: linear-gradient(25deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
    }

    .sponsored {
      float: right;
      font-size: 10px;
      padding: 8px 0;
      color: #fff;
    }

    .title {
      position: absolute;
      left: 10px;
      bottom: 25px;
      display: block;
      font-size: 15px;
      font-weight: 600;
      color: #fff;
      padding-right: 10px;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .info {
      position: absolute;
      left: 10px;
      bottom: 8px;
      display: block;
      font-size: 12px;
      line-height: 16px;
      color: #fff;
      padding-right: 10px;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
