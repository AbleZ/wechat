// pages/articletree/articletree.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listItems: [],
    childrenList: [],

    backgroundColor: "",
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
        var itemData = res.data.data;

        for (var i in itemData) {
          var childrenData = itemData[i].children;
          for (var j in itemData[i].children) {
            var children = itemData[i].children[j];
            var str = Math.floor(Math.random() * 0xf0) + ''
              + Math.floor(Math.random() * 0xf0) + ''
              + Math.floor(Math.random() * 0xf0);
            // 给map添加一个元素
            // children.color = "#" + str;
            children.color = '#' + (Math.random() * 0xf0f0f0 << 0).toString(16);
          }
        }

        console.log(itemData);
        that.setData({
          listItems: itemData,
          childrenList: childrenData,

        });

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


  setColor: function (params) {

  },

})