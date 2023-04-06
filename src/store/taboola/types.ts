import type { ITaboola } from '@/types/taboola'

export interface IState {
  tempList: ITaboola[]
  taboolaList: ITaboola[]
  requestCount: 0
  requestStatus: 'started' | 'stoped'
}
