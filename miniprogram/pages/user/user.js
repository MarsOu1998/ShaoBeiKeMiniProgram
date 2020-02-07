// pages/user/user.js
//获取应用实例
var app = getApp()
var isLogin=false;
var userInfo={};
var show=[];
var noMore=false;
var page=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
     noMore:false,
      userInfo:[],
      noMore: false//是否还有更多数据
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
    show=[];
    if(app.globalData.isLogin==false){
      isLogin=false;
    }
    else{
      isLogin=true;
      userInfo=app.globalData.userInfo;
      console.log(userInfo)
    }
    wx.cloud.callFunction({
      name:'searchAll',
      data:{
        count:6
      }
      ,success:function(res){
        console.log(res);
        for(var i=0;i<res.result.data.length;i++){
          show.push(res.result.data[i]);
        }
        console.log(show);
        that.setData({
          isLogin,
          userInfo,
          show
        })
      }
    })
    

    
  },
  login:function(res){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  logout:function(){
    var that=this;
    wx.showModal({
      title: '退出登录',
      content: '确认退出登录？',
      success:function(res){
        if(res.confirm){
          isLogin=app.globalData.isLogin=false;
          that.setData({
            isLogin
          })
        }
      }
    })
    
  },
  jumpDetail: function (event) {
    var id = event.currentTarget.id;
    console.log(id)
    app.globalData.id = show[id]['_id']
    console.log(app.globalData.id)
    wx.navigateTo({
      url: '/pages/detailFood/detailFood',
    })
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
                show.push(res.result.data[i])
              }
              console.log(show)
              that.setData({
                show
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
  myfood:function(res){
    wx.navigateTo({
      url: '/pages/myFood/myFood',
    })
  },
upload:function(res){
  wx.navigateTo({
    url: '/pages/addFood/addFood',
  })
}
})