// pages/scanview/scanview.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgpath: app.globalData.serveraddress+"/images/scan0.png",
    scanimg: app.globalData.serveraddress + "/images/scan.png",
    text: "请扫码",
    flag: "",
    code: "",
    info: {}
  },
  
  //扫描商品条形码
  scancode() {
    //扫描商品条形码
    wx.scanCode({
      success: (e) => {
        console.log(e.result);
        this.setData({
          imgpath: app.globalData.serveraddress + "/images/scan1.png",
          text: "扫码成功!",
          flag: true,
          code: e.result
        });
        var code = this.data.code;
        //扫描成功后先从缓存中获取数据
        wx.getStorage({
          key: code,
          success: (res)=> {
            console.log("获取缓存成功-------");
            console.log(res.data);
            this.setData({
              info: res.data
            });
          },
          //获取缓存失败,从聚合数据中申请数据
          fail:() =>{
            console.log("获取缓存失败,从聚合数据中申请数据-----------");
            wx.request({
              url: 'http://api.juheapi.com/jhbar/bar?appkey=5138711e1195f8a577fa4436ba88bfb1&pkg=com.thinkland.test&barcode='+code+'&cityid=1',
              success: (resp) => {
                console.log(resp.data);
                var info = resp.data.result;
                this.setData({
                  info: info
                });
                //将申请到的数据进行缓存
                wx.setStorage({
                  key: code,
                  data: info,
                  success: function() {
                    console.log("缓存数据成功------------");
                  }
                })
              }
            })
          }
        })
      }
    })
  },
  
  //点击获取商品购买地址
  purchase() {
    //将数据中的超市名超市商品价格对应的dsid值放入数组中
    var shopList = []
    var dsid = []
    for (let i in this.data.info.eshop) {
      shopList.push(this.data.info.eshop[i].shopname);
      dsid.push(this.data.info.eshop[i].dsid);
    }
    //将商品购买地址显示在底部菜单中,点击跳转页面
    wx.showActionSheet({
      itemList: shopList,
      success: (resp) => {
        wx.navigateTo({
          url: '../scanview1/scanview1?p=' + dsid[resp.tapIndex] + '&code=' + this.data.code,
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