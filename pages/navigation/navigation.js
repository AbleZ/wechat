// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexSize: 0,
    indicatorDots: false,
    autoplay: false,
    duration: 0, //可以控制动画
    list: '',

    detail: [],

  },
  change(e) {
    this.setData({
      indexSize: e.detail.current
    })
  },
  scrollTo(e) {
    this.setData({
      indexSize: e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNaviData();
  },

  getNaviData: function () {
    var that = this;
    wx.request({
      url: 'http://www.wanandroid.com/navi/json',
      success: function (res) {
        console.log(res.data.data);

        var itemData = res.data.data;

        for (var i in itemData) {
          var articlesData = itemData[i].articles;
          for (var j in itemData[i].articles) {
            var articles = itemData[i].articles[j];
            var str = Math.floor(Math.random() * 0xf0) + ''
              + Math.floor(Math.random() * 0xf0) + ''
              + Math.floor(Math.random() * 0xf0);
            // 给map添加一个元素
            // children.color = "#" + str;
            articles.color = '#' + (Math.random() * 0xf0f0f0 << 0).toString(16);
          }
        }

        that.setData({ detail: itemData });
        console.log(itemData);
      }
    })
  },


})