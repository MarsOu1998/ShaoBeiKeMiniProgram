// pages/detailFood4/detailFood4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/西红柿炒鸡蛋.jpg',
      title: '西红柿鸡蛋',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '西红柿炒鸡蛋，鲁菜。又名番茄炒蛋，是许多百姓家庭中一道普通的大众菜肴。烹饪方法简单易学，营养搭配合理。鲜艳，爽口、开胃，成为中国菜肴中最具代表性、最经典的美食之一。其营养价值丰富，具有营养素互补的特点以及健美抗衰老的作用',
      foodGrade: '简单',
      foodTime: '10分钟',
      materialListArr: [
        {
          name: '西红柿',
          count: 500
        },
        {
          name: '鸡蛋',
          count: 150
        },
        {
          name: '白糖',
          count: 10
        },
        {
          name: '食盐',
          count: 6
        },
        {
          name: '水',
          count: 20
        },
        {
          name: '葱',
          count: 5
        },
      ],
      wayListArr: [
        '西红柿洗净后切滚刀块',
        '切葱花',
        '将鸡蛋打入碗中，鸡蛋的多少看自己的喜好',
        '将鸡蛋打散',
        '锅里放入2大勺油，油热后倒入蛋液，我用菜籽油炒的，好香',
        '将鸡蛋炒散后盛出',
        '再倒入一点油煸香葱花',
        '西红柿用开水烫一下去皮，切碎备用',
        '分别根据自己的习惯加入盐和白糖',
        '倒入鸡蛋一同翻炒，稍微倒入一点水，将汤汁收浓就可以关火盛盘享用了'
      ],
      picListArr: [
        '/pages/img/x1.jpg',
        '/pages/img/x2.jpg',
        '/pages/img/x3.jpg',
        '/pages/img/x4.jpg',
        '/pages/img/x5.jpg',
        '/pages/img/x6.jpg',
        '/pages/img/x7.jpg',
        '/pages/img/x8.jpg'
      ],
      tipContent: '①喜欢吃西红柿汤汁多的可以把西红柿切小一点。 ②鸡蛋里加一点水，炒出来的鸡蛋非常嫩。③夏季的西红柿非常多汁，稍微炒下就很多汤汁出来了，所以最后不需要加水。'
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