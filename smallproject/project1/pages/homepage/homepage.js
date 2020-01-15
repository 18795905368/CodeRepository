// pages/homepage/homepage.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgimgpath: app.globalData.serveraddress +"/images/v22.jpg",
    swiperdatas: 
    [
      app.globalData.serveraddress + "/images/v18.jpg",
      app.globalData.serveraddress + "/images/v17.jpg",
      app.globalData.serveraddress + "/images/v16.jpg"
    ],
    textdatas: ["早上醒来，先喝一杯水，预防结石",
      "用眼一段时间要注意休息，眨一眨眼睛",
      "睡前三小时不要吃东西，会胖"
    ],
    griddatas: [
    {
        "gridimgpath": app.globalData.serveraddress + "/images/weather.jpg","gridtext": "天气",
        "navigatePath":"../weather/weather"
    },
    {
      "gridimgpath": app.globalData.serveraddress + "/images/news.jpg", "gridtext": "新闻头条",
      "navigatePath": "../news/news"
    },
    {
      "gridimgpath": app.globalData.serveraddress + "/images/rubbish.jpg", "gridtext": "垃圾分类",
      "navigatePath": "../rubbish/rubbish"
    },
    {
      "gridimgpath": app.globalData.serveraddress + "/images/menu.jpg", "gridtext": "菜谱大全",
      "navigatePath": "../menu/menu"
    },
    {
      "gridimgpath": app.globalData.serveraddress + "/images/rili.jpg", "gridtext": "日历",
      "navigatePath": "../rili/rili"
    },
    {
      "gridimgpath": app.globalData.serveraddress + "/images/scan.png","gridtext": "扫码查询",
      "navigatePath": "../scanview/scanview"
    }
    ],
    picturepath: app.globalData.serveraddress + "/images/v20.jpg",

    articledatas:[]

  },

  //点击功能菜单跳转功能页面
  clickitem(e){
    console.log(e);
    var path = e.currentTarget.dataset.path;
      wx.navigateTo({
        url: path
    })
    

  },

  //点击跳转新闻详情
  clicknewsitem(e) {
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
      url: 'http://v.juhe.cn/toutiao/index?type=shehui&key=f8541b7f084e911d49bf107806b909cb',
      success: function (res){
        console.log(res.data);
        that.setData({ articledatas: res.data.result.data});
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