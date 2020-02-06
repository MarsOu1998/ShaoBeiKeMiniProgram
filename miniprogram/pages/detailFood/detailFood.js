var app=getApp()
var food=[];
var collection=[];
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
    collection=[];
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
        wx.cloud.callFunction({
          name:'searchAccount',
          data:{
            account:'烧贝壳'
          },
          success:function(res){
            console.log(res)
              collection=res.result.data[0]['collection'];
              console.log("collection:"+collection)
              var i=0;
              for(i=0;i<collection.length;i++){
                if(app.globalData.id==collection[i]){
                  that.setData({
                    addSave: {
                      add: true,
                      url: '../img/save04.png'
                    }
                  }) 
                  break;
                }
              }
            if (i == collection.length){
              that.setData({
                addSave: {
                  add: false,
                  url: '../img/save03.png'
                }
              })
            }
              
            
          }
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