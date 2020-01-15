// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bgimgpath": app.globalData.serveraddress + "/images/my.jpg",
    "imgpath": app.globalData.serveraddress + "/images/Dybala.jpg",
    datas:[
      { "img": app.globalData.serveraddress + "/images/my1.png", "text": "下载", "tiaozhuan": app.globalData.serveraddress + "/images/tiaozhuan.png"},
      { "img": app.globalData.serveraddress + "/images/my2.png", "text": "会员", "tiaozhuan": app.globalData.serveraddress + "/images/tiaozhuan.png" },
      { "img": app.globalData.serveraddress + "/images/my3.png", "text": "收藏", "tiaozhuan": app.globalData.serveraddress + "/images/tiaozhuan.png" },
      { "img": app.globalData.serveraddress + "/images/my4.png", "text": "通讯录", "tiaozhuan": app.globalData.serveraddress + "/images/tiaozhuan.png" },
      { "img": app.globalData.serveraddress + "/images/my5.png", "text": "设置", "tiaozhuan": app.globalData.serveraddress + "/images/tiaozhuan.png" },
      { "img": app.globalData.serveraddress + "/images/my6.png", "text": "意见反馈", "tiaozhuan": app.globalData.serveraddress + "/images/tiaozhuan.png" },
      { "img": app.globalData.serveraddress + "/images/my7.png", "text": "关于", "tiaozhuan": app.globalData.serveraddress + "/images/tiaozhuan.png" }
    ]

  },
  clickitem(){
    wx.navigateTo({
      url: '../phone/phone',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})