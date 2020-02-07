var app=getApp()
var empty = true;
var food=[];
var share=[];
var noMore = false;
var page = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty:true
  },

  onShow: function () {
    var that=this;
    food=[];
    if(!app.globalData.isLogin){
        empty=true;
          wx.showToast({
            title: '尚未登陆，请先登录',
            icon:'none',
            
          })
    }
    else{
        food = [];
        var that = this;
        wx.cloud.callFunction({
          name: 'searchAccount',
          data: {
            account: app.globalData.userInfo['account']
          },
          success: function (res) {
            console.log(res)
            if (res.result.data[0]['collection'].length == 0) {
              empty = true;
              that.setData({
                empty
              })
            }
            else {
              empty = false;
              share = res.result.data[0]['collection'];
              //console.log(share);
              for (var i = 0; i < share.length; i++) {
                wx.cloud.callFunction({
                  name: 'searchById',
                  data: {
                    _id: share[i]
                  },
                  success: function (res) {
                    food.push(res.result.data[0]);
                    that.setData({
                      food, empty
                    })
                  }
                })
              }
            }

          }
        })
      
    }
  },
  onReachBottom: function () {
    var that = this;
    console.log(noMore)
    if (!noMore) {
      page += 27;
      wx.cloud.callFunction({
        name: 'searchAll',
        data: {
          count: page
        },
        success: function (res) {
          console.log(res)
          if (res.result.data.length != 0) {
            for (var i = 0; i < res.result.data.length; i++) {
              food.push(res.result.data[i])
            }
            console.log(show)
            that.setData({
              food
            })
          }
          else if (res.result.data.length == 0) {
            noMore = true;
            that.setData({
              noMore
            })
          }
        }
      })
    }
  },
  jumpDetail: function (event) {
    var id = event.currentTarget.id;
    app.globalData.id = food[id]["_id"]
    console.log(app.globalData.id)
    wx.navigateTo({
      url: '/pages/detailFood/detailFood',
    })
  }
})