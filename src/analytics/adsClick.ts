import { getUserId } from '@/utils/user'
import { taboolaConfig, baseConfig } from '@/config'
import timeRecorder from '@/global/clickTimes'
import type { ITaboola } from '@/types/taboola'

const { channel } = taboolaConfig
const { base_url } = baseConfig

const adsClick = (adsense: ITaboola) => {
  const params = new URLSearchParams()
  const diffTime = timeRecorder.getDiffTime(adsense)

  params.set('type', 'click')
  params.set('pid', channel)
  params.set('uid', getUserId(180))
  params.set('dm', base_url)
  params.set('qs', location.pathname + location.search + location.hash)
  params.set('lc', navigator.language)
  params.set('ux', screen.width + '*' + screen.height)
  params.set('tz', new Date().getTimezoneOffset() / 60 + '')
  params.set('ir', self !== top ? '1' : '0')
  params.set('ct', Math.floor(new Date().getTime() / 1000) + '')
  // click
  params.set('pm', adsense.placement)
  params.set('aid', adsense.id)
  params.set('bd', adsense.desc)
  params.set('df', diffTime + '')
  navigator.sendBeacon('https://analytics.sve.cc/v2/report/click', params)
}

export { adsClick }
