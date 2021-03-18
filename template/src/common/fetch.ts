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
  // if (process.env.NODE_ENV === 'development') {
  //   const uid = 109439996
  //   /* eslint-disable @typescript-eslint/camelcase */
  //   if (config.method === 'get') {
  //     config.params = {
  //       ...config.params,
  //       login_uid: uid
  //     }
  //   } else if (config.method === 'post') {
  //     config.data = {
  //       ...config.data,
  //       login_uid: uid
  //     }
  //   }
  // }
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
