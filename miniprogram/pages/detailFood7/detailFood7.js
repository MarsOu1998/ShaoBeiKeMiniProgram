// pages/detailFood7/detailFood7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/可乐鸡翅.jpg',
      title: '可乐鸡翅',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '可乐鸡翅是一道以鸡翅和可乐为主料，以料酒、葱、姜、酱油、盐、鸡精作为调料制作而成的美食。制作原料使用鸡中翅为佳。可乐鸡翅具有味道鲜美、色泽艳丽、鸡肉嫩滑、咸甜适中的特点。',
      foodGrade: '一般',
      foodTime: '20分钟',
      materialListArr: [
        {
          name: '鸡翅',
          count: 400
        },
        {
          name: '可口可乐',
          count: 310
        },
        {
          name: '盐',
          count: 6
        },
        {
          name: '蚝油',
          count: 5
        },
        {
          name: '酱油',
          count: 5
        },
        {
          name: '料酒',
          count: 10
        },
        {
          name: '姜',
          count: 10
        },
      ],
      wayListArr: [
        '把鸡翅清洗干净，划花刀。加入蚝油、酱油、盐、料酒、姜，腌制鸡翅。（天气炎热，最好放入冰箱，避免发臭。腌制半个小时左右）',
        '在锅里加入适量油，把腌制过后的鸡翅放入锅中两面煎黄。',
        '把刚才腌制的调料一起倒入，加入可乐，大火烧开，然后收汁 ！',
        '健康又卫生的可乐鸡翅就做好了！'
      ],
      picListArr: [
        '/pages/img/k1.jpg',
        '/pages/img/k2.jpg',
        '/pages/img/k3.jpg',
        '/pages/img/k4.jpg'
      ],
      tipContent: '①鸡翅清洗干净后，一定要划花刀，不然腌制不入味！ ②收汁要看一下火，不然容易糊！'
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