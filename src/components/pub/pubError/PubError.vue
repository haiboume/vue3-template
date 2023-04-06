<script lang="ts" setup>
interface IProps {
  error: string
}

defineProps<IProps>()
</script>

<template>
  <div class="PubError">Error: {{ error }}</div>
</template>
