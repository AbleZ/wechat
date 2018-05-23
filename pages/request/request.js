var menuData = {
  message: '123'
}
var message1;

// Register a Page.
Page({
  data: menuData,
  bindRequest: function (e) {
    // sent data change to view
    this.setData({
      message: message1
    })
  },

  onLoad: function () {
    wx.request({
      url: 'http://192.168.9.228:8087/express/api/getMenuList',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        message1 = res.data.data[1].menuName;
        console.log(message1);
      },
      fail: function (res) { console.log(res.data); },
      complete: function (res) { console.log("---complete---"); },
    })
  }


})
