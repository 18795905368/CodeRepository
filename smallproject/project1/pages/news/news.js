// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsdatas:[]

  },

  //点击跳转新闻详情
  clicknewsitem(e){
    console.log(e);
    var newsPath = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: '../newsitem/newsitem?path=' + newsPath,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    
    //申请聚合数据
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=top&key=f8541b7f084e911d49bf107806b909cb',
      success:function(res){
        var newsDatas=res.data;
        console.log({newsDatas});
        that.setData({ newsdatas: newsDatas.result.data});
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