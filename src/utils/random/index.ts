const getRandom = function (start: number, end: number) {
  const num = end - start + 1
  return Math.floor(Math.random() * num + start)
}

const getRandoms = function (start: number, end: number, nums: number) {
  const randoms = []
  const num = end - start + 1
  for (let i = 0; i < nums; i++) {
    randoms.push(Math.floor(Math.random() * num + start))
  }
  return randoms
}

const getRandomString = function (nums: number) {
  let final = ''
  const key = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const index = getRandoms(0, key.length - 1, nums)
  for (let i = 0; i < index.length; i++) {
    final += key[index[i]]
  }
  return final
}

export { getRandom, getRandoms, getRandomString }
