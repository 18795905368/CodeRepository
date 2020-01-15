// pages/entertainment/entertainment.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperdatas:
      [
        app.globalData.serveraddress + "/images/enterlunbo1.jpg",
        app.globalData.serveraddress + "/images/enterlunbo2.jpg",
        app.globalData.serveraddress + "/images/enterlunbo3.jpg",
        app.globalData.serveraddress + "/images/enterlunbo4.jpg"
      ],
    datas:[
      { "src": app.globalData.serveraddress + "/images/music2.png", "text": "音乐", "imgpath": app.globalData.serveraddress + "/images/gif/music.gif","navigatepath":"../music/music"},
      { "src": app.globalData.serveraddress + "/images/video2.png", "text": "视频", "imgpath": app.globalData.serveraddress + "/images/video.jpg", "navigatepath": "../video/video" },
      { "src": app.globalData.serveraddress + "/images/joke2.png", "text": "笑话", "imgpath": app.globalData.serveraddress + "/images/gif/joke.gif","navigatepath": "../joke/joke"}
    ]
  },

  clickitem(e){
    console.log(e);
    var url = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: url
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