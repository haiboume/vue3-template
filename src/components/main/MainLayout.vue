<script lang="ts" setup>
import MainContent from './mainContent/MainContent.vue'
import mainAbout from './mainAbout/MainAbout.vue'
import MainSearch from './mainSearch/MainSearch.vue'
import PubAdsense from '../pub/pubAdsense/PubAdsense.vue'
</script>

<template>
  <!-- content -->
  <template v-if="$route.name === 'main'">
    <MainContent>
      <template #adsense>
        <PubAdsense :place="'content'" />
      </template>
    </MainContent>
  </template>
  <!-- search -->
  <template v-if="$route.name === 'search'">
    <MainSearch />
  </template>
  <!-- about -->
  <template v-if="$route.name === 'about'">
    <mainAbout />
  </template>
</template>
