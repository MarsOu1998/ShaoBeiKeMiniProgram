// pages/detailFood8/detailFood8.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/酸菜鱼.jpg',
      title: '酸菜鱼',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '酸菜鱼也称为酸汤鱼，是一道源自重庆的经典菜品，以其特有的调味和独特的烹调技法而著称。流行于上世纪90年代，是重庆江湖菜的开路先锋之一。',
      foodGrade: '有点难',
      foodTime: '60分钟',
      materialListArr: [
        {
          name: '鱼',
          count: 800
        },
        {
          name: '酸菜',
          count: 250
        },
        {
          name: '干辣椒',
          count: 10
        },
        {
          name: '胡椒粉',
          count: 10
        },
        {
          name: '淀粉',
          count: 30
        },
        {
          name: '盐',
          count: 10
        },
        {
          name: '花椒',
          count: 8
        },
        {
          name: '蛋白',
          count: 10
        },
        {
          name: '姜蒜葱',
          count: 30
        },
      ],
      wayListArr: [
        '将料酒，胡椒粉，姜片，盐，鸡蛋清，淀粉，抓匀腌制30分钟',
        '准备辅料姜蒜切片，干辣椒段，花椒，大葱，小葱备用',
        '酸菜挤干水分，切丝，不用太细的丝',
        '锅中少许油加姜蒜酸菜，把酸菜炒干备用',
        '另起锅倒入少许油将鱼头鱼骨煎炒，加入姜蒜，然后倒入清水熬白，再倒入炒好的酸菜一起煮，煮好捞出放碗中铺底，汤汁留于锅中放入鱼片煮大概30秒到1分钟捞出即可',
        '鱼片捞出后放上干辣椒和粗辣椒粉，花椒，小葱撒开，另起锅烧油(油多一点)烧至六成热浇上去，香味扑鼻'
      ],
      picListArr: [
        '/pages/img/s1.jpg',
        '/pages/img/s2.jpg',
        '/pages/img/s3.jpg',
        '/pages/img/s4.jpg',
        '/pages/img/s5.jpg',
        '/pages/img/s6.jpg'
      ],
      tipContent: '①鱼片一定要用蛋清抓匀，才够鲜嫩。忌用淀粉，否则煮出来的汤会变混浊。 ②鱼骨和鱼片要分开下锅，以免鱼骨煮不熟，鱼片不成形。 ③泡椒要用大火旺油翻炒2-3分钟至香味后，立即淋在已经做好的鱼片汤面上，这样泡椒的香味能很快融入汤里，更保证了汤的看相。切鱼片不能切得太厚，否则不易煮熟煮透，腌制时加入鸡蛋清，可使煮好的鱼片更加鲜美嫩滑。'
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