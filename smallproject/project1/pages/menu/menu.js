// pages/menu/menu.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menudatas:""
  },

  //点击菜单跳转
  clickmenuObj(e){
    console.log(e);
    var valueObj = JSON.stringify(e.currentTarget.dataset.value);
    console.log(valueObj);
    wx.navigateTo({
      url: '../menuitem/menuitem?objs=' + valueObj
    })
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //请求聚合数据
    wx.request({
      url: 'http://apis.juhe.cn/cook/query?key=482c833b21b041a830948ca15f5b9d05&menu=鸡&rn=30&pn=500',
      success: function (res) {
        var menuDatas = res.data;
        console.log(menuDatas);
        that.setData({ menudatas: menuDatas.result.data});
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