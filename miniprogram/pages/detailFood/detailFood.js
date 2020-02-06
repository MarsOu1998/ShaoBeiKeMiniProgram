var app=getApp()
var food=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addLike:{
        add:false,
        url: '../img/like01.png'
    },
    addSave:{
        add: false,
        url: '../img/save03.png'
    }
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
    wx.cloud.callFunction({
      name:'searchById',
      data:{
        _id:app.globalData.id,
      },
      success:function(res){
        console.log(res);
        food=res.result.data[0]
        console.log(food)
        that.setData({
          food
        })
      }
    })
  },


 
 
  funLike:function(){
      var add = this.data.addLike.add;
    //   console.log(add);
      if(add){
          this.setData({
              addLike:{
                  add:false,
                  url: '../img/like01.png'
              }
          })
      }else{
          this.setData({
              addLike: {
                  add: true,
                  url: '../img/like02.png'
              }
          })
      }
  },
  funSave: function () {
      var add = this.data.addSave.add;
    //   console.log(add);
      if (add) {
          this.setData({
              addSave: {
                  add: false,
                  url: '../img/save03.png'
              }
          })
      } else {
          this.setData({
              addSave: {
                  add: true,
                  url: '../img/save04.png'
              }
          })
      }
  }

})