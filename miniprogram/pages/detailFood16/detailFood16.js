// pages/detailFood16/detailFood16.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 2,
      imgUrl: '/pages/img/雪花酥.jpg',
      title: '雪花酥',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '口感松脆酥软的甜点。将花生、饼干、杏仁、蔓越莓干切碎后混合，与加热融化的棉花糖和黄油搅拌均匀，放入模具中，撒上奶粉，完全晾凉前切块装入袋子。',
      foodGrade: '简单',
      foodTime: '5分钟',
      materialListArr: [
        {
          name: '黄油',
          count: 40
        },
        {
          name: '棉花糖',
          count: 150
        },
        {
          name: '奶粉',
          count: 45
        },
        {
          name: '蔓越莓干',
          count: 60
        },
        {
          name: '混合坚果',
          count: 60
        },
        {
          name: '小奇福饼干',
          count: 150
        }
      ],
      wayListArr: [
        '准备好食材，我用的是小奇福饼干本来就很小，就不需要再掰开了，如果是比较大块的饼干，可以先掰成小块。混合坚果可以是各种你喜欢的坚果，我用的是巴坦木、杏仁和开心果',
        '不粘锅烧热，放入黄油融化。',
        '倒入棉花糖，因为我用的是孩子吃剩的棉花糖有两种口味两种颜色，所以炒出来是粉色的。',
        '小火翻炒，炒至棉花糖完全融化',
        '关火，加入奶粉继续翻炒，至完全融合。',
        '加入小奇福饼干、蔓越莓干、混合坚果，快速炒匀。方形盘中垫上油纸，把雪花酥混合物放入放盘，按压整形，整成大的方块。',
        '在大块雪花酥两面筛上奶粉，就会有雪花的效果哦。放至温凉后，切成你想要的大小即可。'
      ],
      picListArr: [
        '/pages/img/xhs1.jpg',
        '/pages/img/xhs2.jpg',
        '/pages/img/xhs3.jpg',
        '/pages/img/xhs4.jpg',
        '/pages/img/xhs5.jpg',
        '/pages/img/xhs6.jpg',
        '/pages/img/xhs7.jpg',
        '/pages/img/xhs8.jpg'
      ],
      tipContent: '①首先棉花糖一定不能太大，如果买到的是大棉花糖，一定要先撕小，这样炒的时候棉花糖好融化，不容易炒糊。 ②棉花糖炒化之后，如果想吃软一点口感的就立即关火加入奶粉，如果想吃硬一点的就继续炒一会之后再加奶粉。 ③最后一定要将饼干等食材包裹到拉丝的棉花糖中，这样口感才好。'
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