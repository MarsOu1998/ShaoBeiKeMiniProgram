// pages/detailFood6/detailFood6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/鱼香肉丝.jpg',
      title: '鱼香肉丝',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '鱼香肉丝是一道常见川菜。鱼香味，是四川菜肴主要传统味型之一。成菜：色泽棕红，咸鲜酸甜兼备，葱姜蒜香浓郁，其味是调味品调制而成。此法源出于四川民间独具特色的烹鱼调味方法，而今已广泛用于川味的熟菜中。',
      foodGrade: '一般',
      foodTime: '20分钟',
      materialListArr: [
        {
          name: '瘦肉',
          count: 250
        },
        {
          name: '胡萝卜',
          count: 50
        },
        {
          name: '黑木耳',
          count: 50
        },
        {
          name: '青椒',
          count: 40
        },
        {
          name: '豆瓣酱',
          count: 20
        },
        {
          name: '白糖',
          count: 20
        },
        {
          name: '醋',
          count: 20
        },
        {
          name: '酱油',
          count: 15
        },
        {
          name: '料酒',
          count: 15
        },
        {
          name: '盐',
          count: 1
        },
        {
          name: '水淀粉',
          count: 10
        },
        {
          name: '清水',
          count: 20
        },
        {
          name: '葱姜蒜末',
          count: 15
        },
      ],
      wayListArr: [
        '胡萝卜切丝，青椒洗净去蒂切丝，木耳撕成小块备用',
        '瘦肉洗净切丝，并用盐，胡椒粉，料酒，蛋清，和淀粉上浆腌制10分钟',
        '豆瓣酱一勺，葱姜蒜切末',
        '取小碗，用白糖，香醋，料酒，盐，酱油，少量清水，水淀粉兑成一个芡汁。因为豆瓣酱很盐，口不重的就别放盐了！',
        '坐锅倒油，把浆好的肉下锅划散，炒到肉丝变白色移至盘中待用！',
        '原锅放少许油，胡罗卜不太容易就要先炒两下，再扒到一边，入豆瓣酱炒香出红油！',
        '下葱姜蒜沫和其他配料一起炒熟！',
        '下肉丝一起翻炒均匀！',
        '最后一步倒入兑好的小碗汁炒均匀，出锅！'
      ],
      picListArr: [
        '/pages/img/y1.jpg',
        '/pages/img/y2.jpg',
        '/pages/img/y3.jpg',
        '/pages/img/y4.jpg',
        '/pages/img/y5.jpg',
        '/pages/img/y6.jpg',
        '/pages/img/y7.jpg',
        '/pages/img/y8.jpg',
        '/pages/img/y9.jpg',
        '/pages/img/y10.jpg'
      ],
      tipContent: '①是选材。里脊肉是首选，吃起来较为鲜嫩。泡椒下锅前细细剁碎，这样才能炒出鲜亮的红油。 ②是火候。炒鱼香肉丝要猛火快炒，火要够大，锅气要足，这样炒出的菜味自然不赖。 ③是比例。鱼香肉丝讲究“见油不见汤”，鱼香汁的调料比例要拿捏好。姜蒜要剁碎，同泡椒一起下锅炒到香酥，炒出辛香味，同时让人吃到嘴里后又不觉辛辣'
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