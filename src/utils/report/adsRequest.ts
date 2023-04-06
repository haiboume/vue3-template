import { reportAdsenseInfo } from '@/service/feedback/report'
import { taboolaConfig } from '@/config'
import { getUserId } from '@/utils/user'
import { clickTimes } from '@/global/clickTimes'

const aboutTaboola = (placement: any) => {
  const aid = []
  const bd = []
  const pm = placement.name
  for (let j = 0; j < placement.list.length; j++) {
    const time = new Date().getTime()
    const id = placement.list[j].id.split('~~')[2]
    // 记录时间
    clickTimes.times.push({ id, time })
    aid.push(id)
    bd.push(placement.list[j].branding)
  }
  return { aid, bd, pm }
}

const sendAdsRequest = (placement: any) => {
  const { aid, bd, pm } = aboutTaboola(placement)
  reportAdsenseInfo({
    pm,
    aid: aid.join(','),
    bd: bd.join(','),
    // 以下共有
    type: 'call',
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

export { sendAdsRequest }
