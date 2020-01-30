// pages/detailFood15/detailFood15.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
      id: 1,
      imgUrl: '/pages/img/酸辣土豆丝.jpg',
      title: '酸辣土豆丝',
      author: '烧贝壳',
      save: 888,
      like: 959,
      foodText: '酸辣土豆丝，制作原料有土豆、辣椒、白醋等，不仅价格便宜而且酸辣可口的味道是大家喜爱的。无论是家庭餐桌、还是饭馆酒店几乎都能见到它的身影，虽然酸辣土豆丝是一道普通的菜肴，但是能够做好也是很不容易的，如何才能保持土豆丝熟而脆爽是关键，这个和土豆的选择、土豆丝的处理、炒制时的时间火候的把握有着密切的关系。土豆最好选择含水量高的新土豆，土豆丝要过水，炒制时大火快炒勤翻动，掌握了这些窍门相信你也能做出饭店水平。',
      foodGrade: '简单',
      foodTime: '5分钟',
      materialListArr: [
        {
          name: '土豆',
          count: 500
        },
        {
          name: '红椒',
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
          name: '醋',
          count: 20
        },
        {
          name: '蒜',
          count: 10
        },
        {
          name: '花椒',
          count: 5
        },
        {
          name: '干辣椒',
          count: 15
        },
        {
          name: '糖',
          count: 10
        }
      ],
      wayListArr: [
        '准备材料，将土豆切成整齐的大薄片，这是切出均匀的丝的要点，再将土豆片切成细丝',
        '将葱切末、辣椒剪成小段、蒜切末、红椒切丝、姜切末 ',
        '锅内放油放入花椒，闻到花椒香味时捞出花椒不要，注意火不要太大，不能把花椒炸糊了 ',
        '捞出花椒不要，锅中留底油放入葱、姜、蒜末、辣椒段煸炒出香味，加入土豆丝',
        '煸炒约2分钟后，将醋沿着锅边淋入继续翻炒土豆丝',
        '放入红椒丝翻炒均匀,最后加葱花、适量盐、糖、鸡精调味即可,简单但不失美味的酸辣土豆丝就大功告成'
      ],
      picListArr: [
        '/pages/img/sl1.jpg',
        '/pages/img/sl2.jpg',
        '/pages/img/sl3.jpg',
        '/pages/img/sl4.jpg'
      ],
      tipContent: '①倒入土豆丝后要大火快炒 ②用米醋来浸泡土豆丝可以使炒好的土豆丝口感更脆。 ③炒土豆丝时米醋要分两次加，这样炒出的土豆丝会更加酸脆可口'
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