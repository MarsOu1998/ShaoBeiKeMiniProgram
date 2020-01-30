// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchNameArr:
        {
            searchOne:[
               
                {
                    id: 1,
                    keywords: '最受欢迎家常菜谱'
                },  
                {
                  id: 2,
                  keywords: '闲情雅致下午茶'
                }, 
              {
                id: 3,
                keywords: '色味俱全鲜香主食'
              },                
            ],
            searchTwo: [
                {
                    id: 1,
                    keywords: '糖醋排骨',
                    navigator: "/pages/detailFood2/detailFood2?id=2"
                },
                {
                    id: 1,
                    keywords: '油爆虾',
                    navigator: "/pages/detailFood9/detailFood9?id=9"
                },
                {
                    id: 1,
                    keywords: '宫保鸡丁',
                    navigator: "/pages/detailFood10/detailFood10?id=10"
                },
                {
                    id: 1,
                    keywords: '西红柿牛腩',
                    navigator: "/pages/detailFood/detailFood?id=1"
                },
                {
                    id: 1,
                    keywords: '酸菜鱼',
                    navigator: "/pages/detailFood8/detailFood8?id=8"
                },
                {
                    id: 1,
                    keywords: '孜然羊肉',
                    navigator: "/pages/detailFood12/detailFood12?id=12"
                }
            ],
            searchThree: [
                {
                    id: 1,
                    keywords: '糖醋藕',
                    navigator: "/pages/detailFood13/detailFood13?id=13"
                },
                {
                    id: 1,
                    keywords: '西红柿鸡蛋',
                    navigator: "/pages/detailFood4/detailFood4?id=4"
                },
                {
                    id: 1,
                    keywords: '清炒时蔬',
                    navigator: "/pages/detailFood3/detailFood3?id=3"
                },
                {
                    id: 1,
                    keywords: '香煎豆腐',
                    navigator: "/pages/detailFood11/detailFood11?id=11"
                },
                {
                    id: 1,
                    keywords: '蒜苔炒肉',
                    navigator: "/pages/detailFood14/detailFood14?id=14"
                },
                {
                    id: 1,
                    keywords: '酸辣土豆丝',
                    navigator: "/pages/detailFood15/detailFood15?id=15"
                }
            ],
            searchFour: [
                {
                    id: 1,
                    keywords: '雪花酥',
                    navigator: "/pages/detailFood16/detailFood16?id=16"
                },
                {
                    id: 1,
                    keywords: '蛋挞',
                    navigator: "/pages/detailFood17/detailFood17?id=17"
                },
                {
                    id: 1,
                    keywords: '抹茶千层',
                  navigator: "/pages/detailFood18/detailFood18?id=18"
                },
                {
                    id: 1,
                    keywords: '曲奇'
                },
                {
                    id: 1,
                    keywords: '蛋炒饭'
                },
                {
                    id: 1,
                    keywords: '大碗宽面',
                  navigator: "/pages/detailFood19/detailFood19?id=19"
                }
            ],
            searchFive: [
                {
                    id: 1,
                    keywords: '戚风蛋糕'
                },
                {
                    id: 1,
                    keywords: '北海道吐司'
                },
                {
                    id: 1,
                    keywords: '蛋糕卷'
                },
                {
                    id: 1,
                    keywords: '布丁'
                },
                {
                    id: 1,
                    keywords: '提拉米苏'
                }
            ]
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
  
  }
})