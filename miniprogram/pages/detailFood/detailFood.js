var app=getApp()
var food=[];
var collection=[];
var like=[];
var collectionNumber;
var likes;
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
    like=[];
    wx.cloud.callFunction({
      name:'searchById',
      data:{
        _id:app.globalData.id,
      },
      success:function(res){
        console.log(res);
        likes=res.result.data[0]['like'];
        collectionNumber=res.result.data[0]['collectionNumber']
        console.log("当前点赞数为:"+likes);
        console.log("当前收藏数为:"+collectionNumber)
        food=res.result.data[0]
        console.log(food)
        that.setData({
          food
        })
        if (app.globalData.isLogin) {
        wx.cloud.callFunction({
          name:'searchAccount',
          data:{
            account:app.globalData.userInfo['account']
          },
          success:function(res){
            console.log(res)
              collection=res.result.data[0]['collection'];
            

            like = res.result.data[0]['like']
              console.log("collection:"+collection)
            console.log("like:" + like)
              var i=0,j=0;
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
              for(j=0;j<like.length;j++){
                if (app.globalData.id == like[j]) {
                  that.setData({
                    addLike: {
                      add: true,
                      url: '../img/like02.png'
                    }
                  })
                  break;

              }
            if (i == collection.length){
              that.setData({
                addSave: {
                  add: false,
                  url: '../img/save03.png'
                }
              })
            }
            if(j==like.length){
              that.setData({
                addLike: {
                  add: false,
                  url: '../img/like01.png'
                }
              })
            }
          }}
        })

      }
      }
    })
  },


  funLike: function () {
    if (!app.globalData.isLogin){
      wx.showToast({
        title: '请先登录',
        icon:'none'
      })
    }
    else
   { var add = this.data.addLike.add;
    var that = this;
    //   console.log(add);
    if (add) {
      for (var i = 0; i < like.length; i++) {
        if (like[i] == app.globalData.id) {
          like.splice(i, 1);
        }
        wx.cloud.callFunction({
          name: 'updateUserInfo',
          data: {
            _id: app.globalData.userInfo['_id'],
            like: like
          },
          success: function (res) {
            console.log(res);
            that.setData({
              addLike: {
                add: false,
                url: '../img/like01.png'
              }
            })
            wx.cloud.callFunction({
              name: 'updateFoodInfo',
              data: {
                _id: app.globalData.id,
                like: (likes - 1)
              },
              success: function (res) {
                console.log("点赞数-1")
              },
              fail: function (res) {
                console.error(res)
              }
            })
          }
        })
      }
    } else {
      like.push(app.globalData.id);
      console.log(like)
      wx.cloud.callFunction({
        name: 'updateUserInfo',
        data: {
          _id: app.globalData.userInfo['_id'],
          like: like
        },
        success: function (res) {
          console.log(res)
          that.setData({
            addLike: {
              add: true,
              url: '../img/like02.png'
            }
          })
          wx.cloud.callFunction({
            name: 'updateFoodInfo',
            data: {
              _id: app.globalData.id,
              like: (likes + 1)
            },
            success: function (res) {
              console.log("点赞数+1")
            },
            fail:function(res){
              console.error(res)
            }
          })
        }

      })
      
  }}
  }
  ,


 
 
  
  funSave: function () {
    if (!app.globalData.isLogin){
      wx.showToast({
        title: '请先登录',
        icon:'none'
      })
    }
    else
    {var that=this;
      var add = this.data.addSave.add;
       //console.log(add);
      if (add) {
        for(var i=0;i<collection.length;i++){
          if(collection[i]==app.globalData.id){
            collection.splice(i,1);
          }
        }
        wx.cloud.callFunction({
          name:'updateUserInfo',
          data:{
            _id: app.globalData.userInfo['_id'],
            collection: collection
          },
          success:function(res){
            console.log(res);
            that.setData({
              addSave: {
                add: false,
                url: '../img/save03.png'
              }
            })
            wx.cloud.callFunction({
              name: 'updateFoodInfo',
              data: {
                _id: app.globalData.id,
                collectionNumber: (collectionNumber - 1)
              },
              success: function (res) {
                console.log("收藏数-1")
              },
              fail: function (res) {
                console.error(res)
              }
            })
          }
        })
          
      } else {
        collection.push(app.globalData.id);
        console.log(collection)
        wx.cloud.callFunction({
          name: 'updateUserInfo',
          data: {
            _id: app.globalData.userInfo['_id'],
            collection: collection
          },
          success: function (res) {
            console.log(res)
            that.setData({
              addSave: {
                add: true,
                url: '../img/save04.png'
              }
            })
            wx.cloud.callFunction({
              name: 'updateFoodInfo',
              data: {
                _id: app.globalData.id,
                collectionNumber: (collectionNumber + 1)
              },
              success: function (res) {
                console.log("收藏数+1")
              },
              fail: function (res) {
                console.error(res)
              }
            })
          }
        })

          
      }}
  }

})