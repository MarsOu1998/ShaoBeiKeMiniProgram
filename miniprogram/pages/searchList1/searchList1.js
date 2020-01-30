// pages/searchList/searchList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchListArr: [
      {
        id: 1,
        imgUrl: '/pages/img/西红柿牛腩.jpg',
        title: '西红柿炖牛腩',
        material: '牛腩 西红柿 土豆 胡萝卜',
        author: '烧贝壳',
        navigator: "/pages/detailFood/detailFood?id=1",
        save: 888,
        like: 999
      },
      {
        id: 1,
        imgUrl: '/pages/img/可乐鸡翅.jpg',
        title: '可乐鸡翅',
        material: '鸡翅 可乐',
        author: '烧贝壳',
        navigator: "/pages/detailFood7/detailFood7?id=7",
        save: 888,
        like: 999
      },
      {
        id: 1,
        imgUrl: '/pages/img/鱼香肉丝.jpg',
        title: '鱼香肉丝',
        material: '肉丝 木耳 青椒 胡萝卜',
        author: '烧贝壳',
        navigator: "/pages/detailFood6/detailFood6?id=6",
        save: 888,
        like: 999
      },
      {
        id: 1,
        imgUrl: '/pages/img/西红柿炒鸡蛋.jpg',
        title: '西红柿鸡蛋',
        material: '西红柿 鸡蛋',
        author: '烧贝壳',
        navigator: "/pages/detailFood4/detailFood4?id=4",
        save: 888,
        like: 999
      },
      {
        id: 1,
        imgUrl: '/pages/img/孜然羊肉.jpg',
        title: '孜然羊肉',
        material: '羊肉 孜然',
        author: '烧贝壳',
        navigator: "/pages/detailFood12/detailFood12?id=12",
        save: 888,
        like: 999
      },
      {
        id: 1,
        imgUrl: '/pages/img/锅包肉.jpg',
        title: '锅包肉',
        material: '猪肉',
        author: '烧贝壳',
        navigator: "/pages/detailFood5/detailFood5?id=5",
        save: 888,
        like: 999
      }
    ],
    isLoading: false,//正在加载中
    noMore: false//是否还有更多数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 上拉加载更多
   */
  onReachBottom: function () {
    if (!this.data.noMore) {
      var that = this;
      console.log('circle 下一页');
      this.setData({
        isLoading: true
      })
      var timer = setTimeout(function () {
        console.log(888);
        that.setData({
          isLoading: false
        })
        clearTimeout(timer);
      }, 1000)
    }


    //   wx.request({
    //       url: '',
    //       data: {},
    //       method: 'GET',
    //       // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //       // header: {}, // 设置请求的 header
    //       success: function (res) {
    //           // success
    //       },
    //       fail: function () {
    //           // fail
    //       },
    //       complete: function () {
    //           // complete
    //           wx.hideNavigationBarLoading() //完成停止加载
    //           wx.stopPullDownRefresh() //停止下拉刷新
    //       }
    //   })
  }
})