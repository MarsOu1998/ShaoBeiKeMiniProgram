// pages/detailFood2/detailFood2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/糖醋排骨.jpg',
      title: '糖醋排骨',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '糖醋排骨起源浙江，糖醋排骨是糖醋味型中很具有代表的一道特色传统菜品，很受大家的喜欢。成菜色泽呈糖稀色，酸甜适中，不油不腻，口感丰富细腻。糖醋排骨具有补钙补肾，益气养血，滋阴润燥，滋养脾胃及强健筋骨等功效。说了这么多，下面就一起来看看糖醋排骨的家常做法吧！',
      foodGrade: '一般',
      foodTime: '三刻钟',
      materialListArr: [
        {
          name: '排骨',
          count: 300
        },
        {
          name: '水',
          count: 500
        },
        {
          name: '醋',
          count: 10
        },
        {
          name: '食盐',
          count: 10
        },
        {
          name: '白糖',
          count: 10
        },
        {
          name: '料酒',
          count: 10
        },
        {
          name: '糖',
          count: 10
        },
        {
          name: '生抽',
          count: 10
        },
        {
          name: '芝麻',
          count: 6
        },
      ],
      wayListArr: [
        '小排500克焯水后，煮三十分钟，肉汤可以煮面条，别倒掉了。',
        '用一汤匙料酒，一汤匙生抽，半汤匙老抽，二汤匙香醋（不是白醋）腌渍20分钟。',
        '捞出洗净控水备用，炸制金黄，油别放多，可以省油，只要翻身的勤就好了。',
        '锅内放排骨，腌排骨的水，三汤勺白糖（大胆的放糖吧，三汤匙，别怕多）。半碗肉汤大火烧开，调入半茶匙盐提味。',
        '小火焖十分钟大火收汁，收汁的时候最后加一汤匙香醋，那个酸甜口就出来了。',
        '临出锅撒葱花芝麻，少许味精'
      ],
      picListArr: [
        '/pages/img/t1.jpg',
        '/pages/img/t2.jpg',
        '/pages/img/t3.jpg',
        '/pages/img/t4.jpg',
        '/pages/img/t5.jpg',
        '/pages/img/t6.jpg'
      ],
      tipContent: '如何外酥里嫩——煮30分钟，这样再大火热油炸到外面焦黄，就外酥里嫩了。如果用生排骨直接炸，容易老'
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