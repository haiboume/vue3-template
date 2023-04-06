const debounce = function (fn: (...args: []) => void, delay: number) {
  let timer = 0
  return (...args: []) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
      timer = 0
    }, delay)
  }
}

const throttle = function (fn: (...args: []) => void, delay: number) {
  let timer = 0
  return (...args: []) => {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn(...args)
      timer = 0
    }, delay)
  }
}

const sendGet = function (url: string) {
  const xhr = window.XMLHttpRequest && new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.send()
}

export { debounce, throttle, sendGet }
