import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import externalShare from '@/common/share.js'

// 非 app 内下方浮窗
if (!($ as any).cookie('ypcookie') && process.env.NODE_ENV === 'production') {
  jsRunApi.openJS({
    id: 'openWeb',
    url: encodeURIComponent(window.location.href)
  })
}

const app = createApp(App)

// app.config.errorHandler = (err, vm, info) => {
//   JYMonitor && JYMonitor.logError({
//     type: 'custom',
//     msg: 'vue error',
//     errorMsg: err,
//     row: info
//   })
// }

const _nativeService = new nativeService()

app.config.globalProperties.nativeService = _nativeService
app.config.globalProperties.isApp = process.env.NODE_ENV === 'development' ? true : _nativeService.isJoyRunwebview()

app.use(externalShare)
app.use(router)

app.mount('#app')
