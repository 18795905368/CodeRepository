// pages/joke/joke.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgimgpath: app.globalData.serveraddress+"/images/jokebg1.jpg",
    jokedatas:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;

    //请求聚合数据
    wx.request({
      url: 'http://v.juhe.cn/joke/randJoke.php?key=e708d028e9c4e3f3abe7d61176c3c2aa',
      success:function(res){
        var jokeDatas=res.data;
        console.log({jokeDatas});
        that.setData({ jokedatas: jokeDatas.result});
      }
    })

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