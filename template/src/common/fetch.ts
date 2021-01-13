import axios from 'axios'
import { Toast } from 'vant'

interface ServerData {
  data: any;
  code: number;
  msg: string;
}

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
  ? '//' + document.domain + '/<%= options.name %>'
  : '/<%= options.name %>'

// 请求拦截器
axios.interceptors.request.use((config) => {
  Toast.loading({
    forbidClick: true,
    duration: 10000
  })
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((res) => {
  const { data } = res
  Toast.clear()
  if (data && data.code !== 0) {
    Toast(data.msg)
  }
  return data
}, (err) => {
  Toast.clear()
  return Promise.reject(err)
})

const getIndex: () => Promise<ServerData> = () => {
  return axios.get('/index')
}

export {
  getIndex
}
