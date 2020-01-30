// pages/detailFood12/detailFood12.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/孜然羊肉.jpg',
      title: '孜然羊肉',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '孜然羊肉是由羊后腿肉、香菜叶、孜然，配以各种佐料制成。羊肉肉质细嫩，易消化，蛋白质含量高，孜然具有理气开胃，驱风止痛的功效。本菜具有质地软嫩，鲜辣咸香，营养丰富的特点。此菜品较适合在秋冬季节食用',
      foodGrade: '一般',
      foodTime: '20分钟',
      materialListArr: [
        {
          name: '羊后腿肉',
          count: 300
        },
        {
          name: '香菜叶',
          count: 30
        },
        {
          name: '料酒',
          count: 30
        },
        {
          name: '盐',
          count: 10
        },
        {
          name: '味精',
          count: 5
        },
        {
          name: '辣椒面',
          count: 10
        },
        {
          name: '孜然',
          count: 15
        },
        {
          name: '葱白',
          count: 20
        },
        {
          name: '姜',
          count: 20
        },
      ],
      wayListArr: [
          '羊肉切块，不能太小，拇指大小即可',
          '放入生粉、料酒、白胡椒粉、孜然粉、盐腌20分钟（盐可以放足量，这样后面就不用放盐了）',
          '锅烧热，放油约2汤匙（油量看羊肉肥瘦程度而定，如果肥就少放点因为炒制的过程中会出很多油）',
          '放入羊肉翻炒两分钟，看到羊肉变色',
          '加适量辣椒粉、孜然粒继续炒1分钟左右，出锅'
      ],
      picListArr: [
        '/pages/img/yr1.jpg',
        '/pages/img/yr2.jpg',
        '/pages/img/yr3.jpg',
        '/pages/img/yr4.jpg'
      ],
      tipContent: '①最好选用羊肉切小块，不要用羊肉片，这样口感更好 ②我选用的是羊腿肉，瘦不腻，而且有嚼劲，用羊排肉总觉得太腻  ③油要适当多放点，这样炒出来的肉不柴。 ④要猛火快炒，才能外焦里嫩口感好'},
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