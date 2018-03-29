// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      {
        name: "张三",
        age: "12",
        sex: "女"
      },
      {
        name: "李四",
        age: "12",
        sex: "男"
      },
      {
        name: "王二",
        age: "12",
        sex: "女"
      }
    ]
  },
  
  showok: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  modalcnt: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  actioncnt: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var me=this
    wx.request({
      url: 'http://zhchina.top:8888',
      data: {
        x: 'x',
        y: 'y'
      },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000,
          content:res
        });
        me.setData({
          arr:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})