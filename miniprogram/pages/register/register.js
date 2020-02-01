
Page({
  data: {

  },
  register:function(event){
    console.log(event.detail.value)
    if (event.detail.value.inputName == ""){
      wx.showToast({
        title: '账号不可以为空',
        icon:'none'
      })
    } else if(event.detail.value.inputPassword == ""){
      wx.showToast({
        title: '密码不可以为空',
        icon: 'none'
      })
    }else{
    wx.cloud.callFunction({
      name:'searchAccount',
      data:{
        account:event.detail.value.inputName
      },
      success:function(res){
        console.log(res)
        if(res.result.data.length==0){
          console.log("此账号可以使用，可以注册！");
          wx.cloud.callFunction({
            name:'register',
            data:{
              account: event.detail.value.inputAccount,
              password: event.detail.value.inputPassword
            },
            success:function(res){
              console.log(res)
              console.log("注册成功")
            }
          })
        }
        else{
          wx.showToast({
            title: '此账号已存在',
            icon:'none'
          })
        }
      }
    })
    }
  }
  
})