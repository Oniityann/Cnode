import Taro from '@tarojs/taro'

export function GETJson(url, data) {
  return Taro.request({ url: url, data: data, method: 'GET' })
}

export function POSTJson(url, data) {
  return Taro.request({ url: url, data: data, method: 'POST' })
}
