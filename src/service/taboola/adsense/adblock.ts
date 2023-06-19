import { getRandom } from '@/utils/random'
import { taboolaConfig } from '@/config'

const passChannel: Record<string, boolean> = {
  'ume-sc-ufs': false,
  'ume-sc-ubi': false
}

const adBlock = (brand: string, callback: () => void) => {
  const reg = new RegExp('search', 'gi')
  const random = getRandom(1, 100)
  console.log(brand, random)
  if (
    passChannel[taboolaConfig.channel] === undefined ||
    passChannel[taboolaConfig.channel] ||
    !reg.test(brand) ||
    random > 90
  ) {
    callback()
  }
}

export { adBlock }
