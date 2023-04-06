import { VendeRequest } from '../axios'
import { taboolaConfig } from '@/config'
import { placement } from '@/global/placement'
import { formatContentList, formatPlacements } from './utils'

let session = 'init'

const taboolaRequest = new VendeRequest({
  config: {
    timeout: 5000,
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    }
  },
  interceptors: {
    request_interceptor: (config) => {
      config.data.placements[0].name = `${taboolaConfig.placement}${placement.count}-1`
      config.data.user.session = session
      return config
    },
    request_interceptor_catch: (err) => err,
    response_interceptor: (res) => {
      placement.count++
      session = res.data.user.session
      const { adsList, placementName } = formatPlacements(res.data.placements)
      res.data = formatContentList(adsList, placementName)
      return res
    },
    response_interceptor_catch: (err) => err
  }
})

export { taboolaRequest }
