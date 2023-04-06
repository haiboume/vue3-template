/**
 * 数组切片函数
 * @param target 目标数组
 * @param breakPoint 切割点
 * @returns 以切割点为界, 返回前后数组
 */
const _slice = (target: any[], breakPoint: number) => {
  const sliced: any[] = []
  const a = target.slice(0, breakPoint)
  const b = target.slice(breakPoint)

  if (a.length > 0) {
    sliced.push(a)
  }

  if (b.length > 0) {
    sliced.push(b)
  }

  return sliced
}

/**
 * 数组切片
 * @returns 返回一个递归函数
 */

const useSlice = () => {
  const sliced: any[] = []
  let pennding: any[] = []

  /**
   * 递归调用切片
   * @param target 目标函数
   * @param start 第一次切割点 => 从第几个开始切
   * @param step 切割步长 => 不传此参数, 以start为步长
   * @returns 返回切片后的数组
   */
  const sliceArray = (target: any[], start: number, step?: number) => {
    const arr = _slice(target, start)

    sliced.push(arr[0])
    pennding = arr[1]

    while (pennding) {
      if (step !== undefined) {
        sliceArray(pennding, step)
      } else {
        sliceArray(pennding, start)
      }
    }

    return sliced
  }

  return {
    sliceArray
  }
}

export { useSlice }
