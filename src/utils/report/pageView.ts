import { reportPageviewInfo } from '@/service/feedback/report'
import { taboolaConfig } from '@/config'
import { getUserId } from '@/utils/user'

const sendPageView = () => {
  reportPageviewInfo({
    type: 'page',
    pid: taboolaConfig.channel,
    uid: getUserId(180),
    dm: window.location.host,
    qs: window.location.pathname + window.location.search + window.location.hash,
    lc: navigator && navigator.language,
    ux: window.screen.width + '*' + window.screen.height,
    tz: new Date().getTimezoneOffset() / 60,
    ir: self !== top ? 1 : 0,
    ct: Math.floor(new Date().getTime() / 1000)
  })
}

export { sendPageView }
