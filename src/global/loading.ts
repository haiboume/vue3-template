import { ref } from 'vue'

const loading = ref<string[]>([])

const useLoading = () => {
  const loadingToggle = (toggle: boolean) => {
    if (toggle) {
      loading.value.push('show')
    } else {
      loading.value.pop()
    }
  }

  return {
    loading,
    loadingToggle
  }
}

export { useLoading }
