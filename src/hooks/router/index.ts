import { useRouter, useRoute } from 'vue-router'
import { getRandomString } from '@/utils/random'

const useRedirect = () => {
  const router = useRouter()
  const route = useRoute()

  const toRedirect = (options: { path: string; value?: any }) => {
    const { path, value } = options
    router.push({
      path: value !== undefined ? `/${path}/${getRandomString(8)}${value}` : `/${path}/${value}`,
      query: {
        utm_source: route.query.utm_source
      }
    })
  }

  return {
    toRedirect
  }
}

const useToback = () => {
  const router = useRouter()

  const toBack = () => {
    router.back()
  }

  return {
    toBack
  }
}

export { useRedirect, useToback }
