//app.js
App({
  onLaunch: function (options) {
    console.log('onLaunch 执行')
    console.log(options)
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'kzjj-5g58owl88584fe22',
        traceUser: true,
      })
    }

    this.globalData = {}
  }

})
