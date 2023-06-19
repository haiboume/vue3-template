<script lang="ts" setup>
import { computed } from 'vue'
import type { ITaboola } from '@/types/taboola'
import { adsClick } from '@/analytics/adsClick'
import adsenseDeploy from './utils'

import TaboolaLarge from './TaboolaLarge.vue'
import TaboolaSmall from './TaboolaSmall.vue'

interface IProps {
  type: 'large' | 'small' | 'cover'
  adsenses: ITaboola[]
}

const props = defineProps<IProps>()
const { adsenses } = computed(() => props).value

// 广告派发
const adsense = adsenseDeploy(adsenses)
const handleClick = () => adsClick(adsense)
</script>

<template>
  <TaboolaLarge v-if="type === 'large'" :adsense="adsense" @click-event="handleClick" />
  <TaboolaSmall v-if="type === 'small'" :adsense="adsense" @click-event="handleClick" />
</template>
