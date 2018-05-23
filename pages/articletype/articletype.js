// pages/articletype/articletype.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置

    tabs: [],

  },


  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();

    // 通过选中的标签id，来获取需要的cid
    var cid = this.data.tabs[e.detail.current].id;

    console.log(cid);

    // this.getProjectList(cid);

  },

  // 滚动切换标签样式
  switchTab_0: function () {

    console.log(this.data.tabs);
    var cid = this.data.tabs[0].id;

    console.log(cid);

    this.getProjectList(cid);

  },

  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }

    var id = e.currentTarget.dataset.id;
    console.log(e);
    console.log("点击标题切换当前页时改变样式");
    console.log(id);
  },

  //判断当前滚动超过一屏时，设置tab标题滚动条
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 400
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },

  getSystemInfo: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 20;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSystemInfo();
    this.initData(options);
  },


  initData: function (options) {
    var that = this;
    var titleStr = options.title;
    var titleJson = JSON.parse(titleStr);
    console.log(titleJson);

    that.setData({
      tabs: titleJson.children,
    });
  },


})