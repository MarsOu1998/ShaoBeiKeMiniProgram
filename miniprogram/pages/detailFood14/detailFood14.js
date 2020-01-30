// pages/detailFood14/detailFood14.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/蒜苔炒肉.jpg',
      title: '蒜苔炒肉',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '糖醋排骨起源浙江，糖醋排骨是糖醋味型中很具有代表的一道特色传统菜品，很受大家的喜欢。成菜色泽呈糖稀色，酸甜适中，不油不腻，口感丰富细腻。糖醋排骨具有补钙补肾，益气养血，滋阴润燥，滋养脾胃及强健筋骨等功效。说了这么多，下面就一起来看看糖醋排骨的家常做法吧！',
      foodGrade: '一般',
      foodTime: '10分钟',
      materialListArr: [
        {
          name: '蒜苔',
          count: 300
        },
        {
          name: '里脊肉',
          count: 150
        },
        {
          name: '姜',
          count: 10
        },
        {
          name: '盐',
          count: 6
        },
        {
          name: '生粉',
          count: 20
        },
        {
          name: '生抽',
          count: 10
        },
        {
          name: '料酒',
          count: 10
        },
        {
          name: '鸡精',
          count: 5
        }
      ],
      wayListArr: [
        '猪肉切成丝，加入盐，料酒，生粉，生抽抓匀后静置片刻 ',
        '蒜苔摘选干净后切成段 ',
        '姜切丝备用，热锅冷油，下肉丝 滑炒至变色后盛出 ',
        '留底油，再把生姜下锅爆出香味，把蒜苔倒入翻炒至变色出香味，加入生抽，加盐翻炒均匀',
        '翻炒均匀至断生,最后把肉丝倒入,加少许鸡粉,翻炒均匀后熄火出锅'
      ],
      picListArr: [
        '/pages/img/st1.jpg',
        '/pages/img/st2.jpg',
        '/pages/img/st3.jpg',
        '/pages/img/st4.jpg',
        '/pages/img/st5.jpg',
        '/pages/img/st6.jpg',
        '/pages/img/st7.jpg',
        '/pages/img/st8.jpg'
      ],
      tipContent: '生抽也可以在炒肉时放，但易糊锅。或放入蒜苔再放生抽也可，不糊锅底。'
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