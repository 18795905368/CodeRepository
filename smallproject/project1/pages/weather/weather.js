// pages/weather/weather.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: app.globalData.serveraddress+"/images/weather.jpg",
    qing: app.globalData.serveraddress + "/images/weather/qing.png",
    duoyun: app.globalData.serveraddress + "/images/weather/duoyun.png",
    yin: app.globalData.serveraddress + "/images/weather/yin.png",
    yu: app.globalData.serveraddress + "/images/weather/yu.png",
    chuanyi: app.globalData.serveraddress + "/images/weather/chuanyi.png",
    sun: app.globalData.serveraddress + "/images/weather/sun.png",
    duanlian: app.globalData.serveraddress + "/images/weather/duanlian.png",
    xiche: app.globalData.serveraddress + "/images/weather/xiche.png",
    lvyou: app.globalData.serveraddress + "/images/weather/lvyou.png",
    flag: false,
    city: "",
    currentWeather: {},
    info: ""
  },

  getcityname: function(e) {
    console.log(e);
    this.setData({
      city: e.detail.value
    });
  },

  search() {
    var that = this;
    var cityname = this.data.city;
    wx.getStorage({
      key: cityname,
      success: function(res) {
        console.log("获取缓存成功-----------");
        console.log(res.data);
        that.setData({
          flag: true,
          currentWeather: res.data.today,
          info: res.data.future
        });
      },
      fail: function() {
        console.log("获取缓存失败,请求聚合数据---------");
        wx.request({
          url: 'http://v.juhe.cn/weather/index?format=2&cityname=' + cityname + '&key=aa54d86fb621ac0a307296e517601ee5',
          success: function(resp) {
            if (resp.data.result == null) {
              console.log("查询不到该城市的信息");
              wx.showToast({
                title: '对不起,该城市不存在,请重新输入',
                icon: "none",
                duration: 4000
              })
            } else {
              console.log("请求聚合数据成功------------");
              console.log(resp.data);
              var weatherInfo = resp.data.result;
              wx.setStorage({
                key: cityname,
                data: weatherInfo,
                success: function() {
                  console.log("缓存数据成功-----------");
                }
              })
              that.setData({
                flag: true,
                currentWeather: resp.data.result.today,
                info: resp.data.result.future
              });
            }
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})