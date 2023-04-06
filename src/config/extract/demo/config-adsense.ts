import { IAdsense } from '../types'

export const adsenseConfig: IAdsense = {
  fillGoogle: 'unfill',
  fillTaboola: process.env.NODE_ENV === 'production' ? 'fill' : 'fill',
  gajs: false
}
