// pages/detailFood17/detailFood17.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 2,
      imgUrl: '/pages/img/蛋挞.jpg',
      title: '蛋挞',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '蛋挞（dàn tà【第四声】）（Egg Tart），是一种以蛋浆做成馅料的西式馅饼；台湾称为蛋塔，“挞”是英文“tart”的音译，意指馅料外露的馅饼（相对表面被饼皮覆盖，馅料密封的批派馅饼）（pie）；蛋挞即以蛋浆为馅料的"tart”。',
      foodGrade: '一般',
      foodTime: '18分钟',
      materialListArr: [
        {
          name: '鸡蛋',
          count: 100
        },
        {
          name: '纯牛奶',
          count: 120
        },
        {
          name: '炼乳',
          count: 10
        },
        {
          name: '奶油',
          count: 50
        },
        {
          name: '细砂糖',
          count: 30
        },
        {
          name: '蛋挞皮',
          count: 180
        }
      ],
      wayListArr: [
        '先准备好所有食材，这里要强烈跟大家推荐多美鲜小盒装的鲜奶油，10克一小盒，真的超级好用，避免了打开一大盒奶油用不完浪费',
        '先把两个鸡蛋打入量杯，搅拌均匀，在陆续把所有食材按照比例倒入量杯，充分搅拌，然后过筛！这里重点一定要至少过筛4次以上，口感会很细腻。不要偷懒哦',
        '把做好的蛋挞液倒入蛋挞壳里，方子里的量是刚好9个蛋挞的，不多也不少，烤箱预热10分钟，然后将托盘放入烤箱中层，220度20分钟，然后在将托盘挪到烤箱上层在烤10分钟左右，看蛋挞上色程度，我家是长帝的烤箱。这个温度和方式考出来的口感是最好的',
        '出炉啦！超级香啊！蛋挞皮超级酥，一次吃不完就这样放在托盘里，室温放到第二天依旧很酥很好吃！'
      ],
      picListArr: [
        '/pages/img/dt1.jpg',
        '/pages/img/dt2.jpg',
        '/pages/img/dt3.jpg',
        '/pages/img/dt4.jpg'
      ],
      tipContent: '每一步的重点都不要忽略哦！真的超级简单，全蛋也可以做出来超好吃的葡式蛋挞哦！昨天烤了一锅剩了两个早上吃，还是超级酥脆，没吃够，刚刚又烤了一锅，次次成功，0失败哦！快来试试吧！'
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