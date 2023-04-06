<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTaboolaStore } from '@/store/taboola'
import { useAdsense } from '@/store/adsense'
import { adsenseConfig, googleConfig } from '@/config'

import TaboolaAds from '@/adsense/taboola/TaboolaAds.vue'
import GoogleAds from '@/adsense/google/GoogleAds.vue'

interface IProps {
  place: 'content' | 'detail' | 'result'
}

defineProps<IProps>()

const taboolaStore = useTaboolaStore()
const adsenseStore = useAdsense()
const { getTaboolaAction } = taboolaStore
const { taboolaList, requestStatus } = storeToRefs(taboolaStore)
const { allow } = storeToRefs(adsenseStore)

const { content, ca_pub } = googleConfig
const { fillGoogle, fillTaboola } = adsenseConfig
const googleStatus = ref<'fill' | 'unfill'>(fillGoogle)
const taboolaStatus = ref<'fill' | 'unfill'>(fillTaboola)

const geTaboola = () => {
  if (taboolaStatus.value === 'fill' && googleStatus.value === 'unfill') {
    if (requestStatus.value === 'stoped') {
      getTaboolaAction()
    }
  }
}

// 填充google google没有填充的情况下 => 允许填充taboola
const getAdStatus = (status: 'fill' | 'unfill') => {
  googleStatus.value = status
  geTaboola()
}

// 仅填充taboola
onMounted(() => geTaboola())
</script>

<template>
  <template v-if="place === 'content'">
    <TaboolaAds v-if="taboolaList.length > 0 && allow" :type="'large'" :adsenses="taboolaList" />
    <div v-if="googleStatus === 'fill'">
      <GoogleAds :ca-pub="ca_pub" :ads-slot="content" :full-width="true" @ad-status="getAdStatus" />
    </div>
  </template>
</template>
