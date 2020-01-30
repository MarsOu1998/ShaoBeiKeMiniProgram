// pages/detailFood3/detailFood3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/清炒时蔬.jpg',
      title: '清炒时蔬',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '这道菜清淡爽口，富含丰富的维生素。虽然都是很大众的食材，却有着突出的养生保健功效',
      foodGrade: '简单',
      foodTime: '12分钟',
      materialListArr: [
        {
          name: '莴苣叶',
          count: 100
        },
        {
          name: '蒜',
          count: 15
        },
        {
          name: '油',
          count: 10
        },
        {
          name: '食盐',
          count: 6
        },
      ],
      wayListArr: [
        '青菜洗干净，沥干水分',
        '热锅凉油，爆香大蒜，就可以放青菜了',
        '不停翻炒，1分钟就这样了。这样就可以啦！',
        '关火，放鸡精，盐。用余温翻炒。',
        '吃起来很不错的'
      ],
      picListArr: [
        '/pages/img/q1.jpg',
        '/pages/img/q2.jpg',
        '/pages/img/q3.jpg'
      ],
      tipContent: '①有很多比较难熟的青菜，我们在清炒之前一定要先将青菜进行焯水  ②该分开的分开炒，有很多青菜叶部和根部厚度不一样，所以炒熟的所需要时间也不同  ③别用太多调味料，尽量保持原汁原味。'
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