import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import externalShare from '@/common/share.js'

const app = createApp(App)

const _nativeService = new nativeService()

app.config.globalProperties.nativeService = _nativeService
app.config.globalProperties.isApp = _nativeService.isJoyRunwebview()

app.use(externalShare)
app.use(router)

app.mount('#app')
