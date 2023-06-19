import { sendEventVisible } from '@/service/taboola/callback'
import timeRecorder from '@/global/clickTimes'
import { adBlock } from './adblock'
import type { ITaboola } from '@/types/taboola'

const formatTaboola = function (placements: any[]) {
  const adsList: ITaboola[] = []
  placements.forEach((placement) => {
    if (placement.list.length > 0) {
      placement.list.forEach((item: any) => {
        timeRecorder.writeClickTimes(item) // 记录时间
        adBlock(item.branding, () => {
          sendEventVisible(placement.events.visible) // 回调
          adsList.push({
            sponsered: 'Sponsored Links by Taboola',
            image: item.thumbnail[0].url,
            title: item.name,
            url: item.url,
            id: item.id.split('~~')[2] || '',
            desc: item.branding,
            placement: placement.name
          })
        })
      })
    }
  })

  return adsList
}

export { formatTaboola }
