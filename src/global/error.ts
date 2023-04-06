import { ref } from 'vue'

const dataError = ref<string>()
const adsenseError = ref<string>()

const useError = () => {
  const errorCatch = (options: { type: 'data' | 'adsense'; _error: string }) => {
    const { type, _error } = options

    switch (type) {
      case 'data':
        dataError.value = _error
        break
      case 'adsense':
        adsenseError.value = _error
        break
      default:
        dataError.value = ''
        adsenseError.value = ''
    }
  }

  return {
    dataError,
    adsenseError,
    errorCatch
  }
}

export { useError }
