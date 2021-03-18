export default {
  mounted () {
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
