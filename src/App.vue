<script lang="ts" setup>
import { onMounted } from 'vue'

import { sendPageView } from '@/analytics/pageView'
import { useAdsense } from '@/store/adsense'
import { baseConfig } from '@/config'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const { getCheckIp } = useAdsense()
const { web_title } = baseConfig

getCheckIp()

onMounted(() => {
  document.title = web_title
  sendPageView()
})
</script>

<template>
  <DefaultLayout>
    <template #route-view>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive" />
      </router-view>
    </template>
  </DefaultLayout>
</template>
