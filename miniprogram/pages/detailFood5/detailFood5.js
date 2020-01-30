// pages/detailFood5/detailFood5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/锅包肉.jpg',
      title: '锅包肉',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '锅包肉（英文名：Double Cooked Pork Slices），原名锅爆肉，是一道东北菜，光绪年间始创自哈尔滨道台府府尹杜学赢厨师郑兴文之手。成菜后，色泽金黄，口味酸甜。',
      foodGrade: '一般',
      foodTime: '15分钟',
      materialListArr: [
        {
          name: '猪里脊肉',
          count: 150
        },
        {
          name: '鸡蛋清',
          count: 30
        },
        {
          name: '料酒',
          count: 10
        },
        {
          name: '食盐',
          count: 6
        },
        {
          name: '淀粉',
          count: 50
        },
        {
          name: '白糖',
          count: 30
        },
        {
          name: '白醋',
          count: 15
        },
        {
          name: '酱油',
          count: 15
        },
        {
          name: '老抽',
          count: 10
        },
      ],
      wayListArr: [
        '里脊肉洗净切成厚约0.2厘米的片',
        '把肉片放入容器中，加入腌料用手抓匀，腌15分钟，糖醋汁原料全部放入小碗中搅匀备用;粉浆原料放入碗中搅匀，粉浆中水不宜过多，一点点的加，混合好的粉浆粘稠度如浓稠酸奶的感觉就可以了',
        '锅中倒入约500克植物油烧热，油温约6-7成热时，把腌好的肉片挂上粉浆，一片片放入热油中',
        '待肉片表面的粉浆定型后，马上将肉片捞出来',
        '然后加热锅中的热油，待油温升高，约8成热后，一次性倒入所有肉片，进行复炸一次',
        '待肉片表面金黄，立刻将肉片捞出沥油备用',
        '将锅中的油倒出，留适量底油烧至温热，然后倒入糖醋汁，用小火将糖醋汁煮至粘稠',
        '开大火，把炸好的肉片倒入糖醋汁中',
        '快速的翻炒几下，使糖醋汁均匀的裹满每一片肉片，离火',
        '装盘即可'
      ],
      picListArr: [
        '/pages/img/g1.jpg',
        '/pages/img/g2.jpg',
        '/pages/img/g3.jpg',
        '/pages/img/g4.jpg',
        '/pages/img/g5.jpg',
        '/pages/img/g6.jpg'
      ],
      tipContent: '①猪肉不能和甘草一起食用，一同吃会引起中毒。但可以吃绿豆汤缓解中毒。 ②猪肉和乌梅不能一起食用，一同食用有可能引起中毒。如果中毒可以用地浆水治疗。 ③芫荽又名香菜，辛温，耗气伤神。猪肉滋腻，助湿热而生痰。二者配食，对身体有损害。'
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