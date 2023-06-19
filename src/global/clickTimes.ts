import type { ITaboola } from '@/types/taboola'

class TimeRecorder {
  private records: {
    id: string
    time: number
  }[]

  constructor() {
    this.records = []
  }

  writeClickTimes = (adsense: ITaboola) =>
    this.records.push({ id: adsense.id.split('~~')[2] || '', time: new Date().getTime() })

  getDiffTime = (adsense: ITaboola) => {
    const clickTime = new Date().getTime()
    const callTime = this.records.filter((_) => _.id === adsense.id)
    return Math.floor((clickTime - callTime[0].time) / 1000)
  }
}

export default new TimeRecorder()
