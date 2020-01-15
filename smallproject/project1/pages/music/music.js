// pages/music/music.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bgimgpath": app.globalData.serveraddress + "/images/music/musicbg5.jpg",
    listdatas:[
      { "imgpath": app.globalData.serveraddress + "/images/music/1.jpg", "name": "70周年国庆大阅兵演奏曲目合集", "number": "25首","navigatepath":"../music1/music1"},
      { "imgpath": app.globalData.serveraddress + "/images/music/2.jpg", "name": "一首陈奕迅 一首周杰伦", "number": "12首", "navigatepath": "../music2/music2" },
      { "imgpath": app.globalData.serveraddress + "/images/music/3.jpg", "name": "薛之谦那些歌", "number": "47首", "navigatepath": "../music3/music3"},
      { "imgpath": app.globalData.serveraddress + "/images/music/4.jpg", "name": "其他", "number": "10首", "navigatepath": "../music4/music4" },
    ]

  },

  clicklist(e){
    console.log(e);
    var path=e.currentTarget.dataset.value;
    wx.navigateTo({
      url: path
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