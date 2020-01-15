// pages/phone/phone.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students: [
      { "imgpath": app.globalData.serveraddress + "/images/13.png", "name": "爸爸", "phone": "15240866171" },
      { "imgpath": app.globalData.serveraddress + "/images/12.png", "name": "妈妈", "phone": "13887102685" },
      { "imgpath": app.globalData.serveraddress + "/images/gif/brother.gif", "name": "小弟", "phone": "18087845997" },
      { "imgpath": app.globalData.serveraddress + "/images/17.png", "name": "姐姐", "phone": "18735749871" },
      { "imgpath": app.globalData.serveraddress + "/images/15.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/16.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/17.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/18.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/19.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/20.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/11.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/12.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/13.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/14.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/15.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/16.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/17.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/18.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/19.png", "name": "张三", "phone": "123456789" },
      { "imgpath": app.globalData.serveraddress + "/images/20.png", "name": "张三", "phone": "123456789" }
    ]

  },

  //呼叫电话
  callphone(event) {
    console.log("点击了列表项，准备呼叫");
    console.log(event);
    var callphonenumber = event.currentTarget.dataset.phone;
    console.log("点击获取的手机号码为：" + callphonenumber);
    console.log(typeof callphonenumber);
    //呼叫的方法
    wx.makePhoneCall({
      phoneNumber: callphonenumber,
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