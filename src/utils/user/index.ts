// 获取一个UUID给用户做UserID
const getUserId = function (time: number) {
  let cookieVal
  const cookieBrk = document.cookie.match(new RegExp('(^| )' + 'deviceId' + '=([^;]*)(;|$)'))
  cookieVal = cookieBrk ? cookieBrk[2] : null
  if (cookieVal === null || cookieVal === '') {
    setCookie('deviceId', getUUID(), {
      expires: time
    })
    cookieVal = getCookie('deviceId')
  }
  return cookieVal
}

// 生成UUID
const getUUID = function () {
  let time = new Date().getTime()
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (item) {
    const e = (time + 16 * Math.random()) % 16 | 0
    time = Math.floor(time / 16)
    return (item === 'x' ? e : (3 & e) | 8).toString(16)
  })
}

// 存储Cookie
const setCookie = function (name: string, value: string, options: any) {
  if (typeof value !== 'undefined') {
    options = options || {}
    // 如果值为null, 删除cookie
    if (value === null) {
      value = ''
      options = {
        expires: -1
      }
    }
    // 设置有效期
    let expires = ''
    if (options.expires && (typeof options.expires === 'number' || options.expires.toGMTString)) {
      let date
      if (typeof options.expires === 'number') {
        date = new Date()
        date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000)
      } else {
        date = options.expires
      }
      expires = ';expires=' + date.toGMTString()
    }
    const path = options.path ? ';path=' + options.path : ''
    const domain = options.domain ? ';domain=' + options.domain : ''
    const secure = options.secure ? ';secure' : ''
    // 设置cookie
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('')
  }
}

// 提取Cookie
const getCookie = function (name: string) {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(name + '=')
    if (start !== -1) {
      start = start + name.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
      }
      return decodeURIComponent(document.cookie.substring(start, end))
    }
  }
  return ''
}

export { getUserId }
