// pages/rubbish/rubbish.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentselectvalue:"0",
    imgpath:[
      app.globalData.serveraddress + "/images/rubbish/kehuishou.png",
      app.globalData.serveraddress + "/images/rubbish/youhai.png",
      app.globalData.serveraddress + "/images/rubbish/shi.png",
      app.globalData.serveraddress + "/images/rubbish/gan.png"
    ],
    rubbishdatas:[]
  },

  clickitem(e){
    console.log(e);
    var selectValue = e.currentTarget.dataset.value;
    console.log("当前选中的值为：" + selectValue);
    this.setData({currentselectvalue: selectValue});

  },

  changeitem(e){
    console.log(e);
    var selectValue = e.detail.current;
    console.log("当前改变的值为：" + selectValue);
    this.setData({ currentselectvalue: selectValue });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://apis.juhe.cn/rubbish/category?key=9cb4ec04cd91a08f077f5bd271fd3dfe',
      success:function(res){
        console.log(res.data);
        that.setData({ rubbishdatas:res.data.result});
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