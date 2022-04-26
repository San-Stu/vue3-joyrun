<% if (options.isUseScriptSetup === 'yes') { %>
import { onMounted, getCurrentInstance } from 'vue'

export default {
  onMounted(() => {
    const shareData = {
      title: '',
      desc: '',
      link: 'https://' + document.domain + '/activity/<%= options.name %>/',
      imgUrl: ''
    }
    const instance = getCurrentInstance()
    const proxy = instance.proxy
    proxy.share(shareData)
    if (proxy.nativeService.isJoyRunwebview()) {
      proxy.nativeService.setCloseButtonStatus(true)
    }
  })
}
<% } else { %>
export default {
  mounted() {
    const shareData = {
      title: '',
      desc: '',
      link: 'https://' + document.domain + '/activity/<%= options.name %>/',
      imgUrl: ''
    }
    this.share(shareData)
    if (this.nativeService.isJoyRunwebview()) {
      this.nativeService.setCloseButtonStatus(true)
    }
  }
}
<% } %>
