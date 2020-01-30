// pages/detailFood11/detailFood11.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/香煎豆腐.jpg',
      title: '香煎豆腐',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '豆腐是很常见的食物，不仅价格便宜，营养还很丰富，而且这种食材还有很多做法，有麻婆豆腐、鱼香豆腐、白菜炖豆腐、香煎豆腐等等，这些关于豆腐的菜都是常会出现在我们日常的餐桌上的，尤其是香煎豆腐是大家都爱吃的一种做法，外焦里嫩，特别下饭，做法也超级简单，我们在家也可以制作的一种美食',
      foodGrade: '一般',
      foodTime: '20分钟',
      materialListArr: [
        {
          name: '豆腐',
          count: 300
        },
        {
          name: '大蒜',
          count: 30
        },
        {
          name: '葱',
          count: 45
        },
        {
          name: '老抽',
          count: 20
        },
        {
          name: '黄豆酱',
          count: 30
        },
      ],
      wayListArr: [
        '豆腐洗净备用',
        '均匀切成块状',
        '锅中倒入适量油，豆腐块放入，加入半勺盐。',
        '将一面煎至金黄后翻面继续煎至金黄',
        '煎好的豆腐盛出备用',
        '煎豆腐的油继续加热，放入半勺黄豆酱，大蒜末,再倒入小半勺老抽搅拌均匀',
        '加入煎好的豆腐块煸炒均匀,加入葱花,美味出锅啦！'
      ],
      picListArr: [
        '/pages/img/df1.jpg',
        '/pages/img/df2.jpg',
        '/pages/img/df3.jpg',
        '/pages/img/df4.jpg',
        '/pages/img/df5.jpg',
        '/pages/img/df6.jpg',
        '/pages/img/df7.jpg',
        '/pages/img/df8.jpg'
      ],
      tipContent: '①豆腐煎之前先用淡盐水泡一泡，这就是煎豆腐不碎且入味的小技巧  ②煎豆腐要中小火，表面煎至微黄即可。这样豆腐外脆里嫩，口感非常好  ③调汁的话，可以根据个人口味喜好来选择食材，不固定的'
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