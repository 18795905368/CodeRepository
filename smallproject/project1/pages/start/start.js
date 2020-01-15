// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:5,
    colors: [
      'red', 'orange', 'yellow', 'LightGreen', 'Magenta', 'pink'
    ],
    color: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var num=this.data.num;
    var color=this.data.color;
    var exec=setInterval(function(){
      num--;
      color++;
      that.setData({color:color});
      that.setData({ num: num });
      if (num == 0) {
        clearInterval(exec);
        wx.switchTab({
          url: '../homepage/homepage',
        })
      }
    },1000);
    

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