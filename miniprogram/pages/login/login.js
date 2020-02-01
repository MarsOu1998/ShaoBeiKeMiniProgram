// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  login:function(event){
    console.log(event);
    console.log(event.detail.value.inputPassword)
  },
  register:function(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  }
  
})