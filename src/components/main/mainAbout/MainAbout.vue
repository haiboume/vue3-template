<script lang="ts" setup>
import { useToback } from '@/hooks/router'

const { toBack } = useToback()
</script>
<template>
  <div class="main-about"><button @click="toBack">back</button>{{ $route.params.id }}</div>
</template>
<style scoped lang="less"></style>
