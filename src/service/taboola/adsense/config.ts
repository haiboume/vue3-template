import { getUserId } from '@/utils/user'
import { taboolaConfig, baseConfig } from '@/config'

const { channel, api_key, view_id } = taboolaConfig

const taboola_url = `https://api.taboola.com/2.0/json/${channel}/recommendations.get`

const createPlacements = (adsCount: number, placementCount: number) => {
  const adsPlacements: any[] = []

  for (let j = 0; j < adsCount; j++) {
    adsPlacements.push({
      name: `${taboolaConfig.placement}-${placementCount}-${j + 1}`,
      recCount: 1,
      organicType: 'mix',
      thumbnail: { width: 720, height: 450 }
    })
  }

  return [...adsPlacements]
}

const requestBodyCreat = (session: string, placementCount: number, ads: number) => ({
  placements: createPlacements(ads, placementCount),
  app: {
    name: channel,
    apiKey: api_key,
    type: 'MOBILE',
    origin: 'CLIENT',
    mobileData: {
      device: {
        locale: navigator && navigator.language,
        ui: navigator && navigator.language.substring(0, 2)
      }
    }
  },
  source: {
    type: 'HOME',
    id: `${channel}-${baseConfig.web_title.split(' ').join('-').toLowerCase()}`,
    url: `http://www.${channel}.com`
  },
  view: { id: view_id },
  user: {
    session,
    agent: navigator && navigator.userAgent,
    device: getUserId(180)
  }
})

export { requestBodyCreat, taboola_url }
