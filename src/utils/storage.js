// 为了方便项目中使用本地存储的时候，在写时简化操作，封装 获取 设置 删除，
// window.localStorage.setItem('a',"['a']")
// 获取
export function getItem (key) {
  const res = window.localStorage.getItem(key)
  try {
    return JSON.parse(res)
  } catch (err) {
    return res
  }
}

// 设置

export function setItem (key, value) {
  if (typeof value === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    (
      window.localStorage.setItem(key, value)
    )
  }
}

/**
 *根据key值删除本地存储中其中一个
 * @param {*} key
 */
export function removeItem (key) {
  window.localStorage.removeItem(key)
}

/**
 * 产出所有的本地存储
 */
export function clearItem () {
  window.localStorage.clearItem()
}
