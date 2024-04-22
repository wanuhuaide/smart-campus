// pages/login/login.js
Page({
  searchUserName: function (e) {
      this.setData({
          username: e.detail.value
      })
  },
  searchPassWord: function (e) {
      this.setData({
          password: e.detail.value
      })
  },
  //登录
  go: function () {
      if (this.data.username == '' || this.data.password == '') {
          wx.showToast({
              title: '不能为空',
              icon: 'error',
              duration: 1000 //持续的时间
          })
      } else if (this.data.username != 'admin' || this.data.password != 'admin') {
          wx.showToast({
              title: '用户名密码错误',
              icon: 'error',
              duration: 1000 //持续的时间
          })
      } else {
          wx.switchTab({
              url: "/pages/index/index"
          })
      }
  },

  //跳转到刷脸登录
  goBrushFace:function() {
      wx.navigateTo({
          url: "/pages/brushface/brushface"
      })
  },
  goOneClickLogin:function() {
      wx.navigateTo({
          url: "/pages/oneclicklogin/oneclicklogin"
      })
  },

  /**
   * 页面的初始数据
   */
  data: {
      username: '',
      password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})