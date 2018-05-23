var app = getApp();

Page({
  data: {
    tabs: [],

    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置

    expertList: [{ //假数据
      img: "avatar.png",
      name: "欢顔",
      tag: "知名情感博主",
      answer: 134,
      listen: 2234
    }],

    projectList: [],


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

    this.getProjectList(cid);

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

  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },


  /**
   * 页面加载
   */
  onLoad: function () {
    this.getSystemInfo();
    this.getProjectTree();


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


  getProjectTree: function () {
    var that = this;
    wx.request({
      url: 'http://www.wanandroid.com/project/tree/json',
      success: function (res) {
        console.log("getProjectTree");
        console.log(res.data.data);

        that.setData({
          tabs: res.data.data,
        });
        
        that.switchTab_0();
      }
    })

  },

  getProjectList: function (cid) {

    var that = this;

    wx.request({
      url: 'http://www.wanandroid.com/project/list/1/json?cid=' + cid,
      success: function (res) {
        console.log("------");
        console.log(res.data.data.datas);

        that.setData(
          { projectList: res.data.data.datas }
        );
      }
    })
  },



  onItemClick: function (params) {

    var link = params.currentTarget.dataset.link;

    wx.navigateTo({
      url: "/pages/webview/webview?link=" + link,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },



})
