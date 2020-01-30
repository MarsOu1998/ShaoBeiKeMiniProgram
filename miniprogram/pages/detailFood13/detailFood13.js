// pages/detailFood13/detailFood13.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/糖醋藕.jpg',
      title: '糖醋藕',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '糖醋藕是一道江苏地区常见的地方名吃。以肥嫩藕制作而成。此菜糖汁色泽金黄，藕片口感脆嫩，酸甜开胃，适宜夏日食用佐餐。',
      foodGrade: '一般',
      foodTime: '10分钟',
      materialListArr: [
        {
          name: '藕',
          count: 500
        },
        {
          name: '葱',
          count: 30
        },
        {
          name: '姜',
          count: 10
        },
        {
          name: '糖',
          count: 15
        },
        {
          name: '醋',
          count: 15
        },
        {
          name: '生抽',
          count: 10
        },
        {
          name: '老抽',
          count: 10
        },
        {
          name: '生抽',
          count: 10
        },
        {
          name: '耗油',
          count: 10
        },
      ],
      wayListArr: [
        '藕去皮洗净切丁，不用太小，不好夹，葱蒜切好',
        '所有调料混合搅拌均匀',
        '放油烧热，放入葱和姜片，炒出香味后取出葱姜不要，之后油热后加藕丁翻炒几下，加入所有调料，翻炒均匀后加入刚好淹没藕丁的热水，加盖子焖3-5分钟，之后大火收干汤汁即可',
        '喜欢酸可以多加勺醋，喜欢甜可以多加勺糖哈'
      ],
      picListArr: [
        '/pages/img/o1.jpg',
        '/pages/img/o2.jpg',
        '/pages/img/o3.jpg',
        '/pages/img/o4.jpg'
      ],
      tipContent: '切藕片。把莲藕的皮给刮掉，用清水多清洗几遍，如果现在就炒的话就可以装在盘子里面，如果还需要等一会儿才炒菜的话就需要把藕片泡在水里面，要全部浸泡在水里，不然容易发生氧化，会让藕片变黑，不仅会影响到口感，也会让颜色变得不好看，影响食欲。'
    },
    addLike: {
      add: false,
      url: '../img/like01.png'
    },
    addSave: {
      add: false,
      url: '../img/save03.png'
    }
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
  funLike: function () {
    var add = this.data.addLike.add;
    //   console.log(add);
    if (add) {
      this.setData({
        addLike: {
          add: false,
          url: '../img/like01.png'
        }
      })
    } else {
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