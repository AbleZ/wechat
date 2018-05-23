// pages/home/home.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [],
    listItems: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.getBanners();
    this.getArticleList();
  },

  /**
   * 获取轮播图
   */
  getBanners() {
    var that = this;
    wx.request({
      url: 'http://www.wanandroid.com/banner/json',
      success: function (res) {
        console.log(res.data);
        var imgUrlArr = new Array();
        for (var i in res.data.data) {
          imgUrlArr.push(res.data.data[i].imagePath)
        }
        that.setData({ imgUrls: imgUrlArr })
      }
    })
  },


  /**
   * 获取文章列表
   */
  getArticleList() {
    var that = this;
    wx.request({
      url: 'http://www.wanandroid.com/article/list/0/json',
      success: function (res) {
        var itemData = res.data.data.datas;
        console.log(itemData);
        that.setData({
          listItems: itemData
        });
      }
    })
  },


  onItemClick: function (params) {
    var link = params.currentTarget.dataset.link; //此处已获取到了参数中的link

    wx.navigateTo({
      url: "/pages/webview/webview?link="+link,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

})