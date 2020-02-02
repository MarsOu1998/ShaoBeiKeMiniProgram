var tempPath;
var isClick;//若用户已上传封面图，则隐藏提示字样
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/西红柿牛腩.jpg',
      title: '西红柿牛腩',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '天气渐凉，到了正经八百吃肉的时候了，正好冰箱里还有已经切好块儿的牛腩，另外还有两个西红柿，一个洋葱，两根胡萝卜，半棵芹菜，一根黄瓜，上次炒饼剩下的半个洋白菜，嗯，不红烧了，老烧烦了，今天这料太适合做西红柿牛腩了，对，就他了。西红柿牛腩其实是从西餐的烩菜演变而来的，所以一定少不了洋葱胡萝卜之流，我再次从冰箱的门缝儿里找到一块黄油，好了，开始吧。',
      foodGrade: '一般',
      foodTime: '60分钟',
      materialListArr: [
        {
          name: '牛腩',
          count: 1000
        },
        {
          name: '胡萝卜',
          count: 100
        },
        {
          name: '西红柿',
          count: 150
        },
        {
          name: '食盐',
          count: 6
        },
        {
          name: '白糖',
          count: 10
        },
        {
          name: '白胡椒',
          count: 3
        },
        {
          name: '黄油',
          count: 30
        },
        {
          name: '黄酒',
          count: 15
        },
        {
          name: '番茄酱',
          count: 10
        },
      ],
      wayListArr: [
        '胡萝卜切大块，芹菜切大节，洋葱切大片，大蒜分两半放在一起备用',
        '牛肉提前泡一会儿去掉血水',
        '牛腩凉水下锅，放少许葱段姜片煮开撇血沫至汤变清将牛肉捞出，汤备用',
        '锅洗净烧热，放适量黄油化开',
        '之后将胡萝卜，洋葱，芹菜和大蒜倒下去大火煸炒一分钟出香气',
        '然后将牛肉倒进去再炒几下',
        '放煮牛肉的汤，汤要漫过牛肉，如不够加点开水，放黄酒，盐，白糖，胡椒粉，香叶和桂皮，大火烧开，小火烧一个半小时',
        '西红柿用开水烫一下去皮，切碎备用',
        '另取一锅烧热，放少许黄油化开炒西红柿一分钟',
        '牛肉炖够火候后将西红柿倒入牛肉锅中，再放少许番茄酱提色，中火烧十五分钟汤汁粘稠即可'
      ],
      picListArr: [
        '/pages/img/n1.jpg',
        '/pages/img/n3.jpg',
        '/pages/img/n4.jpg',
        '/pages/img/n5.jpg',
        '/pages/img/n6.jpg',
        '/pages/img/n7.jpg',
        '/pages/img/n8.jpg',
        '/pages/img/n9.jpg'
      ],
      tipContent: '①牛肉不要直接炖，炖之前要洗干净，然后放在案板上，用刀背剁散再腌制入味，剁散之后牛肉就比较容易入味，而且更容易炖烂。 ②腌制牛腩的时候可以放入少量的生姜蒜去除腥味儿。然后加入适量的料酒和蚝油，牛肉会变得比较光滑，千万不要放食用盐，否则牛肉就变得特别柴。'
    },
    addLike: {
      add: false,
      url: '../img/like01.png'
    },
    addSave: {
      add: false,
      url: '../img/save03.png'
    },
    tempPath :"cloud://shaobeike-kuj6l.7368-shaobeike-kuj6l-1301180386/我做的菜.jpg",
    isClock:false
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
  /**
   * 用户点击右上角分享
   */
  loadBigImg:function(){
    var that=this;
      wx.chooseImage({
          success: function (res) {
              wx.getImageInfo({
                  src: res.tempFilePaths[0],
                  success: function (res) {
                      console.log(res)
                      tempPath=res.path;
                      isClick=true;
                      that.setData({
                        tempPath,isClick
                      })
                  }
              })
          }
      })
  }
})