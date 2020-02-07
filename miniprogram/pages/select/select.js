var app=getApp();
var meatGroup = ["1acf1de95e3b807c0af3b7b60b4dd442", "d68532785e3b94020afdc7ef3f930139", "d68532785e3ad6b30ace348a6b85997b", "74b140b45e3a9a3d0aaf5f076311e823", "da51bd8c5e3b93500afd86243f7a94d2", 
  "d68532785e3adac10acfc0f262530f9a"
]
var vegetableGroup = ["da51bd8c5e3b751f0aed24b332ad2e45",
  "da51bd8c5e3b82090af3d6466ceda7cc",
  "0ec685215e3b81330af380ee6a2ba123",
  "d9ea35c25e3ad95a0acf49e349b0da5e",
  "74b140b45e3b76fc0aed22423195d526",
  "da51bd8c5e3b77970aee56cd6af3c4e7"
]
var popularGroup=[
  "1acf1de95e3b782b0aef63f866a1ea65"
  , "da51bd8c5e3b797f0aef46c32728ed7a"
  , "da51bd8c5e3b7e8c0af1e2332551c7d8"

]
var bakeGroup=[

]
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

  meat:function(event){
    console.log(event.currentTarget.id);
    var id = event.currentTarget.id;
    if(id<=meatGroup.length-1){
      app.globalData.id=meatGroup[id]
      wx.navigateTo({
        url: '/pages/detailFood/detailFood',
      })
    }
  },
  vegetable: function (event) {
    console.log(event.currentTarget.id);
    var id = event.currentTarget.id;
    if (id <= vegetableGroup.length - 1) {
      app.globalData.id = vegetableGroup[id]
      wx.navigateTo({
        url: '/pages/detailFood/detailFood',
      })
    }
  },
  popular: function (event) {
    console.log(event.currentTarget.id);
    var id = event.currentTarget.id;
    if (id <= popularGroup.length - 1) {
      app.globalData.id = popularGroup[id]
      wx.navigateTo({
        url: '/pages/detailFood/detailFood',
      })
    }
  },
  bake: function (event) {
    console.log(event.currentTarget.id);
    var id = event.currentTarget.id;
    if (id <= bakeGroup.length - 1) {
      app.globalData.id = bakeGroup[id]
      wx.navigateTo({
        url: '/pages/detailFood/detailFood',
      })
    }
  }
})