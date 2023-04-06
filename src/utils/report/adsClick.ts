import { reportAdsenseInfo } from '@/service/feedback/report'
import { taboolaConfig } from '@/config'
import { getUserId } from '@/utils/user'
import type { ITaboola } from '@/types/taboola'
import { clickTimes } from '@/global/clickTimes'

const sendAdsClick = (adsense: ITaboola) => {
  const aid = adsense.id.split('~~')[2] || ''
  const clickTime = new Date().getTime()
  let callTime = 0
  let diffTime = 0

  for (let i = 0; i < clickTimes.times.length; i++) {
    if (clickTimes.times[i].id === aid) {
      callTime = clickTimes.times[i].time
    }
  }

  diffTime = Math.floor((clickTime - callTime) / 1000)

  reportAdsenseInfo({
    pm: adsense.placement,
    aid,
    bd: adsense.title,
    df: diffTime,
    // 以下共有
    type: 'click',
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

export { sendAdsClick }
