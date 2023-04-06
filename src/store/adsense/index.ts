import { defineStore } from 'pinia'
import { IState } from './types'
import { checkIpRequest } from '@/service/feedback/checkIP'
import { localCache, sessionCache } from '@/utils/cache'
import { taboolaConfig } from '@/config'
import { ALLOW_TABOOLA } from '@/constant'

const { setLocalCache } = localCache
const { getSessionCache, setSessionCache } = sessionCache
const { channel } = taboolaConfig

const useAdsense = defineStore('adsense', {
  state: (): IState => {
    return {
      allow: true
    }
  },
  actions: {
    getCheckIp() {
      if (getSessionCache(ALLOW_TABOOLA) !== undefined) {
        return
      } else {
        setSessionCache(ALLOW_TABOOLA, true)
      }

      checkIpRequest(channel).then((res) => {
        if (!res.error) {
          setLocalCache(ALLOW_TABOOLA, res.data.allow)
          setSessionCache(ALLOW_TABOOLA, res.data.allow)
          this.allow = res.data.allow
        }
      })
    }
  }
})

export { useAdsense }
