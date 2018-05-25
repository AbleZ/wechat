// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  btnOKClick: function () {
    console.log("ok");

    wx.hideLoading();
    wx.showToast({
      title: "ok",
      icon: 'none',
    });

  }


})