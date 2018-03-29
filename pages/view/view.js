// pages/view/view.js
const util = require('../../utils/util.js');
var newurl = util.newurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    upload:false
  },
  /*图片上传按钮点击*/
  uploadfile:function(){
    var that = this;
    wx.chooseImage({
      count:1,
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
          wx.uploadFile({
          url: newurl+'upload/image', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            //do something
            console.log(data);
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  },
  uploadfiles:function(){
    var that=this;
    wx.chooseVideo({
      success:function(res){
        var tempFilePath = res.tempFilePath
        const uploadTask=wx.uploadFile({
          url: newurl+'upload/video',
          filePath: tempFilePath,
          name: 'file',
          success:function(){
            var data = res.data
            //do something
            console.log(data);
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
        uploadTask.onProgressUpdate((res) => {
          if (res.progress!=100){
            that.setData({
              upload: res.progress
            })
          }else{
            that.setData({
              upload: false
            })
          }
          
          console.log('上传进度', res.progress)
          console.log('已经上传的数据长度', res.totalBytesSent)
          console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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