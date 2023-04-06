<script lang="ts" setup>
import type { ITaboola } from '@/types/taboola'

import PubImage from '@/components/pub/pubImage/PubImage.vue'

interface IProps {
  adsense: ITaboola
}

interface IEmits {
  (e: 'clickEvent'): void
}

defineEmits<IEmits>()
defineProps<IProps>()
</script>

<template>
  <div v-if="adsense" class="taboola">
    <div class="ads-wrapper">
      <a class="ads-link" :href="adsense.url" @click="$emit('clickEvent')">
        <span class="sponsored">{{ adsense.sponsered }}</span>
        <PubImage :src="adsense.image" :height="200" />
        <span class="title">{{ adsense.title }}</span>
        <span class="info">{{ adsense.desc }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="less">
.taboola {
  width: 100%;
  border-radius: 10px;
  background-color: #ebf6f5;

  .ads-wrapper {
    height: 100%;
    padding: 0 10px;
    font-size: 0;

    .ads-link {
      text-decoration: none;
      color: #3d3d3d;
    }
    .sponsored {
      display: block;
      text-align: right;
      font-size: 10px;
      padding: 8px 0;
    }

    .title {
      display: block;
      font-size: 16px;
      font-weight: 600;
      padding: 8px 0 0 3px;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .info {
      display: block;
      font-size: 13px;
      line-height: 16px;
      padding: 3px 0 8px 3px;
    }
  }
}
</style>
