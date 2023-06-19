import { taboola_url } from './config'
import type { ITaboola } from '@/types/taboola'
import { VendeRequest } from '../../axios'
import { placement } from '@/global/placement'
import { requestBodyCreat } from './config'
import { formatTaboola } from './utils'

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
      config.data = requestBodyCreat(session, placement.count, config.data.ads)
      return config
    },
    request_interceptor_catch: (err) => err,
    response_interceptor: (res) => {
      placement.count++
      session = res.data.user.session
      res.data = formatTaboola(res.data.placements)
      return res
    },
    response_interceptor_catch: (err) => err
  }
})

export const fetchAdsenseData = (ads: number): Promise<ITaboola[]> =>
  taboolaRequest.post({ url: taboola_url, data: { ads } })
