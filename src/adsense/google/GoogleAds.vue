<script lang="ts" setup>
import { ref, watch } from 'vue'

interface IProps {
  caPub: string
  adsSlot: string
  fullWidth: boolean
}

interface IEmits {
  (e: 'adStatus', status: 'fill' | 'unfill'): void
}

defineProps<IProps>()
const emit = defineEmits<IEmits>()
const adsRef = ref()

watch(
  () => adsRef.value,
  (newVal) => {
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'attributes') {
          if (mutation.attributeName === 'data-ad-status') {
            if (newVal.dataset.adStatus === 'unfilled') {
              emit('adStatus', 'unfill')
            } else {
              emit('adStatus', 'fill')
            }
          }
        }
      }
    })
    if (newVal) {
      observer.observe(newVal, {
        attributes: true
      })
    }
  }
)
</script>

<template>
  <component
    :is="'script'"
    async
    :src="`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${caPub}`"
    crossorigin="anonymous"
  ></component>
  <ins
    ref="adsRef"
    :data-ad-client="caPub"
    :data-ad-slot="adsSlot"
    :data-full-width-responsive="fullWidth"
    data-ad-format="auto"
    class="adsbygoogle"
    style="display: block"
  ></ins>
  <component :is="'script'">(adsbygoogle = window.adsbygoogle || []).push({})</component>
</template>
