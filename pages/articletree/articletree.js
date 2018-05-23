// pages/articletree/articletree.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listItems: [],
    childrenList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticleTree();
  },

  getArticleTree() {
    var that = this;
    wx.request({
      url: 'http://www.wanandroid.com/tree/json',
      success: function (res) {
        console.log(res.data);

        var itemData = res.data.data;
        var childrenData = itemData[0].children;

        console.log(itemData);

        that.setData({
          listItems: itemData,
          childrenList: childrenData,
        });
        console.log(itemData[0].children);
      }
    })
  },

  onItemClick: function (params) {
    //参数为条目index
    var id = params.currentTarget.dataset.id;
    var titleObj = this.data.listItems[id];
    //转换为String参数
    var titleStr = JSON.stringify(titleObj);  

    console.log(titleStr);

    wx.navigateTo({
      url: '/pages/articletype/articletype?title=' + titleStr,
    })
  },

})