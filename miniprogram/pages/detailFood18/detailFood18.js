// pages/detailFood18/detailFood18.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 2,
      imgUrl: '/pages/img/抹茶千层.jpg',
      title: '抹茶千层',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '千层蛋糕是一道很讨巧的甜点。把最普通的法式可丽饼，和奶油或馅料一层层堆叠起来，一下子就变身成华丽的蛋糕了',
      foodGrade: '普通',
      foodTime: '耗时',
      materialListArr: [
        {
          name: '鸡蛋',
          count: 300
        },
        {
          name: '细砂糖',
          count: 70
        },
        {
          name: '牛奶',
          count: 760
        },
        {
          name: '低筋面粉',
          count: 220
        },
        {
          name: '抹茶粉',
          count: 20
        },
        {
          name: '黄油',
          count: 40
        },
        {
          name: '淡奶油',
          count: 500
        }, 
        {
          name: '细砂糖',
          count: 50
        }
      ],
      wayListArr: [
        '在超市或菜场购买的新鲜鸡蛋，打散成鸡蛋液，加入细砂糖，搅拌均匀',
        '倒入牛奶，倒入融化好的黄油搅拌均匀。',
        '筛入面粉',
        '我这里准备的是日本宇治若竹抹茶粉，做抹茶蛋糕一定要选择上乘的抹茶粉，这样口感才会更好。加入适量的抹茶粉',
        '将搅拌好的面糊液用面粉筛过滤两次，清除掉蛋皮液中的颗粒状，使蛋液更细腻。',
        '过滤好的蛋皮液蒙上保鲜膜放入冰箱内冷藏半个小时。',
        '取出冷藏好的蛋皮液，用勺子搅拌均匀准备做蛋皮。舀上一勺蛋皮液像摊鸡蛋皮一样倒在平底锅内加热。',
        '摊好的蛋皮铺在油纸上晾凉备用。大概可以摊18到20张蛋皮。',
        '倒入适量的淡奶油到容器中,加入细砂糖,打发淡奶油备用。',
        '在转台上铺一张油纸方便取蛋糕，取一张蛋皮放上去,用蛋糕抹刀在蛋皮上均匀的抹上一层淡奶油,抹好后再放一张蛋皮盖上。接着抹奶油，就这样一层奶油一层蛋皮的进行，注意留一张摊得最好看的蛋皮放在最上面。',
        '最上面筛上一层抹茶粉装饰。',
        '做好的抹茶千层蛋糕不要慌着切，要放进冰箱冷藏至少2-3个小时。冷藏好的千层蛋糕取出用锯齿刀切割成大小一致的三角形。'
      ],
      picListArr: [
        '/pages/img/mc1.jpg',
        '/pages/img/mc2.jpg',
        '/pages/img/mc3.jpg',
        '/pages/img/mc4.jpg',
        '/pages/img/mc5.jpg',
        '/pages/img/mc6.jpg',
        '/pages/img/mc7.jpg',
        '/pages/img/mc8.jpg',
        '/pages/img/mc9.jpg',
        '/pages/img/mc10.jpg',
        '/pages/img/mc11.jpg',
        '/pages/img/mc12.jpg'
      ],
      tipContent: '①制作这款蛋糕一个重要的步骤就是煎制千层皮了，煎制不好的话，可能会粘到锅底。我在这里教大家一个小技巧，可以有效避免。我们在把面糊倒入煎盘中的时候，一般不要等到煎盘太热，而是在煎盘稍微有些温度的时候，便把面糊倒入煎盘中，同时导入的时候还要转动煎盘。 ②我们在切千层蛋糕的时候，需要把刀加热一下，加热可以用热水泡一下，或者是用火将它烧热，然后切的时候要一刀切下去，果断干脆，不要来回锯，切完之后也不要把刀往上提，直接抽出来就行了。这样切出来的蛋糕才会十分漂亮。'
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