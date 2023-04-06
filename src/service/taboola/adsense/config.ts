import { getUserId } from '@/utils/user'
import { taboolaConfig } from '@/config'

const taboola_url = `https://api.taboola.com/2.0/json/${taboolaConfig.channel}/recommendations.get`
const requestBodyCreat = (count: number) => ({
  placements: [
    {
      name: taboolaConfig.placement + '1',
      recCount: count,
      organicType: 'MIX',
      thumbnail: { width: 750, height: 450 }
    }
  ],
  app: {
    type: 'MOBILE',
    apiKey: taboolaConfig.api_key,
    origin: 'CLIENT',
    name: taboolaConfig.channel,
    mobileData: {
      device: {
        locale: navigator && navigator.language,
        ui: navigator && navigator.language.substring(0, 2)
      }
    }
  },
  source: {
    type: 'HOME',
    id: taboolaConfig.source_id,
    url: 'http://www.' + taboolaConfig.channel + '.com/'
  },
  view: { id: taboolaConfig.view_id },
  user: {
    session: 'init',
    agent: navigator && navigator.userAgent,
    device: getUserId(180)
  }
})

export { requestBodyCreat, taboola_url }
