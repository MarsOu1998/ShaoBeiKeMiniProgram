var app=getApp();
var isSearch=false;
var searchGroup=[];
var page=0;
var name;
var noMore=false;
var showFood=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSearch:false,
    noMore:false,
    isLoading: false,//正在加载中
    noMore: false//是否还有更多数据
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
    if(!isSearch)
   {
      wx.cloud.callFunction({
      name:'searchByType',
      data:{
        sort:'最受欢迎家常菜谱',
        page:0
      },
      success:function(res){
        console.log(res)
        searchGroup=res.result.data;
        that.setData({
          searchGroup
        })
      }
    })
    }
  },
  onUnload:function(res){
    isSearch=false;
  }
,
  /**
   * 上拉加载更多
   */
  onReachBottom: function () {
    var that=this;
    if(isSearch&&!noMore){
    page+=21;
    wx.cloud.callFunction({
      name: 'search',
      data: {
        name: name,
        page: page
      },
      success: function (res) {
        console.log(res)
        if (res.result.data.length != 0) {
          for (var i = 0; i < res.result.data.length; i++) {
            searchGroup.push(res.result.data[i])
          }
          console.log(searchGroup)
          that.setData({
            isSearch, searchGroup
          })
        }
        else if (res.result.data.length == 0){
          noMore=true;
          that.setData({
            noMore
          })
        }
      }

    })
    }
    else{
      if(!noMore){
        page+=21;
        wx.cloud.callFunction({
          name:'searchByType',
          data:{
            sort:'最受欢迎家常菜谱',
            page:page
          },
          success:function(res){
            if (res.result.data.length != 0) {
              for (var i = 0; i < res.result.data.length; i++) {
                searchGroup.push(res.result.data[i])
              }
              console.log(searchGroup)
              that.setData({
                searchGroup
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
  
  },
  search:function(event){
    var that=this;
    page=0;
    isSearch=true;
    searchGroup=[];
    noMore=false;
    this.setData({
      noMore
    })
    console.log(event.detail.value);
    name = event.detail.value;
    if(name!="")
    {wx.cloud.callFunction({
      name:'search',
      data:{
        name:name,
        page:page
      },
      success:function(res){
        console.log(res)
        if(res.result.data.length!=0){
          for (var i = 0; i < res.result.data.length;i++){
            if (res.result.data[i]['sort'] =="最受欢迎家常菜谱")
            searchGroup.push(res.result.data[i])
          }
          console.log(searchGroup)
          that.setData({
            isSearch,searchGroup
          })
        }
      }
    })}
  },
  jumpDetial:function(event){
    var id = event.currentTarget.id;
    console.log(id)
    app.globalData.id = searchGroup[id]['_id']
    console.log(app.globalData.id)
    wx.navigateTo({
      url: '/pages/detailFood/detailFood',
    })
  }
})