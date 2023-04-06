import { sendGet } from '@/utils/general'
import { ITaboola } from '@/types/taboola'
import { sendAdsRequest } from '@/utils/report/adsRequest'

export const formatPlacements = function (placements: any[]) {
  const adsList = []
  for (let i = 0; i < placements.length; i++) {
    const placement = placements[i]
    if (placement.list.length > 0) {
      sendGet(placement.events.visible)
      adsList.push(...placement.list)
      // 监听
      sendAdsRequest(placement)
    }
  }
  return {
    adsList,
    placementName: placements[0].name
  }
}

export const formatContentList = function (list: any[], placementName: string) {
  const newArr: ITaboola[] = []
  for (let i = 0; i < list.length; i++) {
    newArr.push({
      sponsered: 'Sponsored Links by Taboola',
      image: list[i].thumbnail[0].url,
      desc: list[i].name,
      url: list[i].url,
      id: list[i].id,
      title: list[i].branding,
      placement: placementName
    })
  }
  return newArr
}
