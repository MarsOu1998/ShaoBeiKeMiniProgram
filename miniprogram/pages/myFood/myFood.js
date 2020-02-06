var app=getApp();
var share=[];
var empty=false;
var food=[];
var isShow=false;
var noMore = false;
var page = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty: false
  },
  jumpDetail: function (event) {
    var id = event.currentTarget.id;
   app.globalData.id = food[id]["_id"]
    console.log(app.globalData.id)
    wx.navigateTo({
      url: '/pages/detailFood/detailFood',
    })
  }
 ,
  onShow: function () {
    if(!isShow)
    {
      food=[];
      isShow=true;
    var that=this;
    wx.cloud.callFunction({
      name:'searchAccount',
      data:{
        account:app.globalData.userInfo['account']
      },
      success:function(res){
        console.log(res)
        if(res.result.data[0]['share'].length==0){
          empty=false;
        }
        else{
          empty=true;
          share = res.result.data[0]['share'];
          //console.log(share);
          for(var i=0;i<share.length;i++)
          { 
           wx.cloud.callFunction({
            name:'searchById',
            data:{
              _id:share[i]
            },
            success:function(res){
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
  onUnload:function(res){
    isShow=false;
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
  }
})