// pages/scanview1/scanview1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urldata:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dsid=options.p;
    var code=options.code;
    wx.getStorage({
      key: dsid,
      success: (res) =>{
        console.log("获取缓存成功-------");
        this.setData({ url: res.data.result });
      },
      fail(){
        console.log("获取缓存失败,从聚合数据中申请数据-----------");
        wx.request({
          url: 'http://api.juheapi.com/jhbar/buy?appkey=5138711e1195f8a577fa4436ba88bfb1&pkg=com.thinkland.test&barcode=' + code + '&dsid=' + dsid,
          success: (res) => {
            console.log(res.data);
            if (res.data.reason == "无商品链接") {
              wx.showToast({
                title: '对不起,该商品暂无购买链接',
                icon: "none",
                duration: 4000
              })
            }
            else { 
              wx.setStorage({
                key: dsid,
                data: res.data.result,
              })
              this.setData({ url: res.data.result }); 
            }
          }
        })
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