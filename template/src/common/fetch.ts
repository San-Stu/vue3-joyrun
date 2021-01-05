import axios from 'axios'
import { Toast } from 'mint-ui'

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
  ? '//' + document.domain + '/yearsum2020'
  : '/yearsum2020'

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
