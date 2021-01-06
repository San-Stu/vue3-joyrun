import axios from 'axios'
import { Toast } from 'vant'

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
  ? '//' + document.domain + '/<%= options.name %>'
  : '/<%= options.name %>'

// 请求拦截器
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((res) => {
  const { data } = res
  if (data && data.code && data.code !== 0) {
    // Toast(data.msg)
  }
  return data
}, (err) => {
  return Promise.reject(err)
})

const getIndex = () => {
  return axios.get('/index')
}

export {
  getIndex
}
