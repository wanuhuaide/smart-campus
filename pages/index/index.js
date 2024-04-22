// index.js
Page({})// pages/oneclicklogin/oneclicklogin.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checked: false
    },
    // 修改复选框的选中状态
    swiftCheck: function () {
        this.setData({
            checked: !this.data.checked
        });
    },
    goLogin: function () {
        wx.navigateTo({
            url: "/pages/login/login"
        })
    },
    goIndex: function () {
        //判断用户是否同意协议
        if (this.data.checked) {
            wx.switchTab({
                url: "/pages/index/index"
            })
        }else{
            wx.showToast({
                title: '请勾选服务!',
                icon: 'error',
                duration: 1000 //持续的时间
            })
        }
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
