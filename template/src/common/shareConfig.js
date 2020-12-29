export default {
  mounted () {
    const shareData = {
      title: '',
      desc: '',
      link: 'https://' + document.domain + '/activity/yearsum2020/',
      imgUrl: 'https://joyrun-activity-upyun.thejoyrun.com/huodong/2020/12/yearsum2020/share_img.jpg'
    }
    this.share(shareData)
    if (this.nativeService.isJoyRunwebview()) {
      this.nativeService.setCloseButtonStatus(true)
    }
  }
}
