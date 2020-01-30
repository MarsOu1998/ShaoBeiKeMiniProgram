// pages/detailFood9/detailFood9.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/油爆虾.jpg',
      title: '油爆虾',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '油爆虾是一道特色名菜，属于上海菜。通常选用中小型虾，用旺火菜籽油锅炸虾，烧好后虾外脆内嫩。虾壳红艳松脆，若即若离，入口一触即脱，虾肉鲜嫩、略带甜酸，风味独特。此菜酱红色，虾外脆内嫩，带着咸鲜味。',
      foodGrade: '简单',
      foodTime: '10分钟',
      materialListArr: [
        {
          name: '河虾',
          count: 300
        },
        {
          name: '葱，姜',
          count: 30
        },
        {
          name: '干辣椒',
          count: 10
        },
        {
          name: '食用油',
          count: 30
        },
        {
          name: '香油',
          count: 10
        },
        {
          name: '酱油',
          count: 10
        },
        {
          name: '料酒',
          count: 10
        },
        {
          name: '香醋',
          count: 10
        },
        {
          name: '盐',
          count: 5
        },
        {
          name: '糖',
          count: 5
        },
      ],
      wayListArr: [
        '河虾剪净须足，洗净备用',
        '干辣椒洗净切段',
        '葱洗净切丝',
        '姜洗净切末',
        '热锅加油烧至高温，倒入虾，翻动数下迅速捞起，稍稍沥干油后，再放入锅中，如此反复三次',
        '锅内留少许油，加辣椒、葱丝、姜末煸香，倒入盐、味精、糖、香醋、酱油后小炒数下，加料酒搅匀，待汁液变稠时，倒入河虾，翻炒数下，淋上香油即可'
      ],
      picListArr: [
        '/pages/img/ybx1.jpg',
        '/pages/img/ybx2.jpg',
        '/pages/img/ybx3.jpg',
        '/pages/img/ybx4.jpg',
        '/pages/img/ybx5.jpg',
        '/pages/img/ybx6.jpg',
        '/pages/img/ybx7.jpg',
        '/pages/img/ybx8.jpg',
      ],
      tipContent: '①河虾：食虾时严禁同时服用大量维生素C，否则，可生成三价砷，能致死  ②虾不宜与猪肉同食，易损精  ③同时忌与狗肉、鸡肉、獐肉、鹿肉、南瓜同食  ④糖、果汁与虾相克：同食会腹泻。'
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