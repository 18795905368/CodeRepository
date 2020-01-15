// pages/video/video.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    srcpath: "",
    currentselectvalue: "0",
    videodatas: [{
        "name": "庄子说",
        "area": "大陆",
        "type": "教育",
        "year": "2003",
        "imgpath": app.globalData.serveraddress + "/images/video/zhuangzishuo.jpg",
        "introduction": "中国哲学名著（庄子），如庖丁解牛、井底之蛙、螳螂捕蝉等中国知名寓言故事，加上庄子精辟的见解。《庄子说：自然的箫声》提到：然比看一段文字有意思。画儿虽不能有动作，可是有含意，你越细心地瞧，越能发现出它里面的精辟所在。书中有了插图更能增加读者的兴趣。如只重图，不重文字，把一张张的图连接起来，那便是连环图，您不要以为这两种图全是从西方传入的方法。其实就在中国早就有了。画庄子的寓言不能用写实的笔法——全成了俩老头儿对话，毫无趣味。也不能用一笔一笔机械式的日本漫画，会令原文主旨尽夫。",
        videopath: [app.globalData.serveraddress + "/video/zhuangzishuo/01.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/02.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/03.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/04.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/05.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/06.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/07.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/08.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/09.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/10.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/11.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/12.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/13.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/14.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/15.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/16.mp4",
          app.globalData.serveraddress + "/video/zhuangzishuo/17.mp4"
        ]
      },


      {
        "name": "食戬之灵1",
        "area": "日本",
        "type": "搞笑 竞技 校园",
        "year": "2015",
        "imgpath": app.globalData.serveraddress + "/images/video/videoshi1.jpg",
        "introduction": "电视动画《食戟之灵》改编自附田祐斗原作、佐伯俊作画的同名漫画，由J.C.STAFF制作，于2015年4月3日开始在日本MBS、TBS等电视台的“Animeism”节目播出。OVA于2015年11月举办的Jump Special Anime Festa中上映。漫画连载三周年之际，官方公布动画第二期制作决定。故事描述一个家中经营餐馆“幸平饭店”的中学生幸平创真，每天总是以料理人的父亲为目标，不断磨练自己的厨艺。他的父亲心血来潮，叫他进入厨艺专校远月学园就读。创真一到那里，不仅邂逅了拥有“神之舌”的女主角薙切绘里奈，而且还在入学典礼的台上出尽风头。于是，创真一方面将克服一连串的严峻考题，同时也将和每一位好敌手在料理场上较劲……",
        videopath: [
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][01][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][02][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][03][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][04][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][05][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][06][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][07][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][08][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][09][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][10][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][11][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][12][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][13][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][14][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][15][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][16][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][17][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][18][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][19][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][20][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][21][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][22][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][23][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling1/[CASO&SumiSora][Shokugeki no Soma][24][GB][720p].mp4"
        ]
      },


      {
        "name": "食戬之灵2",
        "area": "日本",
        "type": "搞笑 竞技 校园",
        "year": "2016",
        "imgpath": app.globalData.serveraddress + "/images/video/videoshi2.jpg",
        "introduction": "《食戟之灵：贰之皿》是电视动画《食戟之灵》第二季。2015年10月14日在《周刊少年Jump》2016年2号上宣布制作决定。2016年2月28日举办的“食戟！舞滨祭”轰动上公布第二季标题。虽然败在叶山手下，创真仍然决定漂亮地在远月传统“秋之选拔”正赛中出场。他在满溢不甘的同时，在心中发誓要变得更强，如此这般，“秋之选拔”的正赛到来了。在淘汰赛中并肩出场的是，创真、惠、塔克米、绯沙子、爱丽丝、黑木场、叶山、美作这8人。创真的下一个对手是……！？以及，抵达顶点之人将会是……！？",
        videopath: [
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][01][GB][720P].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][02][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][03][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][04][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][05][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][06][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][07][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][08][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][09][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][10][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][11][GB][720p].mp4",
          app.globalData.serveraddress + "/video/shijianzhiling2/[CASO&SumiSora][Shokugeki no Soma 2][12][GB][720p].mp4",
        ]
      }
    ]
  },
  
  //点击视频剧集播放视频
  clickitem(event) {
    console.log(event);
    var videosrc = event.currentTarget.dataset.value;
    this.setData({
      srcpath: videosrc
    });
  },
  
  //点击顶部标题切换视频
  clicktitle(e) {
    console.log(e);
    var selectValue = e.currentTarget.dataset.value;
    console.log("当前选中的值为：" + selectValue);
    this.setData({ currentselectvalue: selectValue });
  },
  
  //滑动视频简介切换视频
  changeitem(e){
    console.log(e);
    var changeItem = e.detail.current;
    this.setData({ currentselectvalue:changeItem});
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