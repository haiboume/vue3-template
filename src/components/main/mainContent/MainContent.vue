<script lang="ts" setup>
import PubSearch from '@/components/pub/pubSearch/PubSearch.vue'
import PubImage from '@/components/pub/pubImage/PubImage.vue'
import PubLogo from '@/components/pub/pubLogo/PubLogo.vue'
import PubMenu from '@/components/pub/pubMenu/PubMenu.vue'
import PubNav from '@/components/pub/pubNav/PubNav.vue'
import PubPagination from '@/components/pub/pubPagination/PubPagination.vue'
import PubTop from '@/components/pub/pubTop/PubTop.vue'

import logo from '@/assets/img/logo.png'

import { useRedirect } from '@/hooks/router'
const { toRedirect } = useRedirect()
</script>

<template>
  <div class="main-content">
    <PubTop />
    <PubSearch @keyboard-event="(value) => toRedirect({ path: 'search', value })" />
    <hr />
    <PubLogo :logo="logo" />
    <hr />
    <PubImage :src="logo" />
    <hr />
    <PubMenu :categories="[{ name: 'About' }]" />
    <hr />
    <PubNav :categories="[{ name: 'About' }]" @click-event="toRedirect({ path: 'about', value: 1 })" />
    <hr />
    <slot name="adsense"></slot>
    <hr />
    <PubPagination :list="10" :total="100" @change-event="(page) => toRedirect({ path: 'main', value: page })" />
  </div>
</template>

<style scoped lang="less">
.main-content {
  padding: 16px;
}
</style>
