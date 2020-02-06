var app=getApp()
var empty=true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty:false
  },

  onShow: function () {
    var that=this;
    if(!app.globalData.isLogin){
        empty=true;
          wx.showToast({
            title: '尚未登陆，请先登录',
            icon:'none',
            success:function(res){
              setTimeout(function(){
                wx.switchTab({
                  url: '/pages/user/user',
                })
              }
                ,3000)
            }
          })
    }
  },
})