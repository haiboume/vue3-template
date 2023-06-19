import { getUserId } from '@/utils/user'
import { taboolaConfig, baseConfig } from '@/config'

const { channel } = taboolaConfig
const { base_url } = baseConfig

const sendPageView = () => {
  const params = new URLSearchParams()
  params.set('type', 'page')
  params.set('pid', channel)
  params.set('uid', getUserId(180))
  params.set('dm', base_url)
  params.set('qs', location.pathname + location.search + location.hash)
  params.set('lc', navigator.language)
  params.set('ux', screen.width + '*' + screen.height)
  params.set('tz', new Date().getTimezoneOffset() / 60 + '')
  params.set('ir', self !== top ? '1' : '0')
  params.set('ct', Math.floor(new Date().getTime() / 1000) + '')
  navigator.sendBeacon('https://analytics.sve.cc/v2/report/page', params)
}

export { sendPageView }
