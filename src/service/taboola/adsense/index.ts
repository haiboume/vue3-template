import { taboolaRequest } from '../index'
import { requestBodyCreat, taboola_url } from './config'
import type { ITaboola } from '@/types/taboola'

export const fetchTaboolaRequest = (count: number): Promise<ITaboola[]> => {
  return taboolaRequest.post({
    url: taboola_url,
    data: requestBodyCreat(count)
  })
}
