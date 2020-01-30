// pages/detailFood10/detailFood10.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/宫保鸡丁.jpg',
      title: '宫保鸡丁',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '宫保鸡丁（Kung Pao Chicken），是一道闻名中外的特色传统名菜。鲁菜、川菜、贵州菜中都有收录，原料、做法有差别。该菜式的起源与鲁菜中的酱爆鸡丁，和贵州菜的胡辣子鸡丁有关，后被清朝山东巡抚、四川总督丁宝桢改良发扬，形成了一道新菜式——宫保鸡丁，并流传至今，此道菜也被归纳为北京宫廷菜。之后宫保鸡丁也流传到国外',
      foodGrade: '一般',
      foodTime: '20分钟',
      materialListArr: [
        {
          name: '鸡胸肉',
          count: 225
        },
        {
          name: '花生米',
          count: 50
        },
        {
          name: '葱',
          count: 45
        },
        {
          name: '姜',
          count: 10
        },
        {
          name: '干辣椒',
          count: 8
        },
        {
          name: '花椒',
          count: 1.5
        },
        {
          name: '食盐',
          count: 2
        },
        {
          name: '料酒',
          count: 2
        },
        {
          name: '酱油',
          count: 6.5
        },
        {
          name: '白糖',
          count: 10
        },
        {
          name: '醋',
          count: 7
        },
        {
          name: '水淀粉',
          count: 22
        },
      ],
      wayListArr: [
        '将鸡脯肉用刀背拍一下，切成小丁，加入一汤匙料酒、半汤匙食用油、半茶匙白胡椒、半茶匙盐，一茶匙淀粉腌渍10分钟，再用水淀粉拌匀',
        '将大葱洗净切段，干辣椒洗净，剪去两头去除辣椒籽，黄瓜切丁',
        '在小碗中调入酱油、香醋、盐、姜汁、白砂糖和料酒，混合均匀制成调味料汁',
        '锅中留底油，烧热后将花椒和干辣椒放入，用小火煸炸出香味，随后放入大葱段',
        '放入鸡丁，放1汤匙料酒，将鸡丁滑炒变色，然后倒入水淀粉',
        '最后调入料汁，再放入熟花生米，翻炒均匀，用水淀粉勾芡即成'
      ],
      picListArr: [
        '/pages/img/gb1.jpg',
        '/pages/img/gb2.jpg',
        '/pages/img/gb3.jpg',
        '/pages/img/gb4.jpg',
        '/pages/img/gb5.jpg',
        '/pages/img/gb6.jpg',
        '/pages/img/gb7.jpg',
        '/pages/img/gb8.jpg'
      ],
      tipContent: '用开水冲泡花生米，剥去外皮，冷锅冷油下花生米（不易炒焦），中火炒至浅焦黄色后盛到大盘里散热待用'
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