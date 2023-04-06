<script lang="ts" setup>
import MainLayout from '@/components/main/MainLayout.vue'
</script>

<template>
  <MainLayout :key="$route.name?.toString()" />
</template>
