var app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  login:function(event){
    console.log(event);
    if(event.detail.value.inputName==""){
      wx.showToast({
        title: '账号不可为空',
        icon:'none'
      })
    } else if (event.detail.value.inputPassword == ""){
      wx.showToast({
        title: '密码不可为空',
        icon: 'none'
      })
    }
    else{
      wx.cloud.callFunction({
        name:'searchAccount',
        data:{
          account: event.detail.value.inputName
        },
        success:function(res){
          console.log(res)
          if (res.result.data.length == 0){
            wx.showToast({
              title: '该账号不存在',
              icon:'none'
            })
          } else if (res.result.data[0].password == event.detail.value.inputPassword){
            app.globalData.isLogin=true;
            app.globalData.userInfo = res.result.data[0]
            wx.showToast({
              title: '登陆成功',
              icon:'success',
              duration:2000,
              success:function(res){
                setTimeout(function(){
                  wx.navigateBack({
                    
                  })
                },2000)
              }
            })
          } else if (res.result.data[0].password != event.detail.value.inputPassword){
            wx.showToast({
              title: '密码错误',
              icon:'none'
            })
          }
        }
      })
    }
  },
  register:function(res){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  }
})