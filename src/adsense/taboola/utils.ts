import type { ITaboola } from '@/types/taboola'

const useDeploy = () => {
  let indexList: number[] = []

  const adsenseDeploy = (adsenses: ITaboola[]): ITaboola => {
    const index = indexList.pop() || 0
    if (indexList.length === 0) {
      indexList = adsenses.map((_, i) => i)
    }

    return adsenses[index]
  }

  return adsenseDeploy
}

export default useDeploy()
