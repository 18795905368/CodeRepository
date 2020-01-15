// pages/music4/music4.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgimgpath: app.globalData.serveraddress + "/images/music/musicbg8.jpg",
    topviewdatas: { "imgpath": app.globalData.serveraddress + "/images/music/4.jpg", "name": "其他" },
    musicdatas: [],
    playpath: "",
    nginx:"",

    //拖动过程中，音乐是不能播放的
    slidervalue: 0,
    sliderstate: false,
    duration: 0
  },

  /**点击音乐播放 */
  audioitemclick(e){
    console.log(e);
    var playPath=e.currentTarget.dataset.value;
    this.setData({playpath:playPath});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    /**将app.js中的为nginx临时域名定义的变量赋值给键nginx*/
    this.setData({ nginx: app.globalData.serveraddress})

    var that=this;

    /**请求nginx上的json文件，将获取的数据赋值给musicdata[] */
    wx.request({
      url: app.globalData.serveraddress +'/text/music4.json',
      success:function(res){
        var musicDatas=res.data;
        console.log({musicDatas});
        that.setData({ musicdatas: musicDatas})
      }
    })

    //创建音乐播放对象
    this.audiotext = wx.createAudioContext("myaudio", this);
    this.setData({ sliderstate: true });

  },

  
  //音乐播放的时间的更新事件
  audioupdate(e) {
    console.log(e);
    if (this.data.sliderstate) {
      var slidervalue = e.detail.currentTime / e.detail.duration * 100;
      this.setData({
        slidervalue: slidervalue,
        duration: e.detail.duration
      });
    }
  },
  //正在拖动滑块的事件
  sliderchanging(e) {
    console.log(e);
    this.setData({ sliderstate: false });
  },
  //拖动滑块，改变音乐
  sliderchange(e) {
    console.log(e);
    var num = e.detail.value;
    console.log(num);

    var du = this.data.duration;
    console.log(du);
    var audiovalue = num / 100 * du;
    console.log("-->" + audiovalue);
    this.audiotext.seek(audiovalue);

    this.setData({ slidervalue: e.detail.value, sliderstate: true });
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