<script lang="ts" setup>
import { useToback } from '@/hooks/router'

const { toBack } = useToback()
</script>
<template>
  <div class="main-search"><button @click="toBack">back</button>{{ $route.params.page }}</div>
</template>
<style scoped lang="less"></style>
