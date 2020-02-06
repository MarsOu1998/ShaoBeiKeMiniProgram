var app = getApp()
var show=[];
Page({
  data: {
    motto: 'Hello World',
    swiper:{
      userInfo: {},
      imgUrls: [
          {
              id:1,
          name: '/pages/img/hb1.jpg',
          navigator: "/pages/detailFood/detailFood?id=1"
          },
          {
              id: 1,
              name: '/pages/img/hb2.jpg',
              navigator: "/pages/detailFood2/detailFood2?id=2"
          },
          {
              id: 1,
              name: '/pages/img/hb3.jpg',
              navigator: "/pages/detailFood11/detailFood11?id=11"
          },
          {
              id: 1,
            name: '/pages/img/hb4.jpg',
            navigator: "/pages/detailFood5/detailFood5?id=5"
          } 
      ],
      indicatorDots: true,//是否显示面板指示点
      indicatorColor:'rgba(249,245,236,0.6)',
      indicatorActiveColor:'#FFCC66',
      autoplay: true,//是否自动切换
      interval: 5000,//自动切换时间间隔
      duration: 500,//滑动动画时长
      circular: true//是否自动切换
    },
    todayListArr:[
      {
        imgUrl:'/pages/img/西红柿牛腩.jpg',
        text:'西红柿牛腩',
        id:1,
        navigator: "/pages/detailFood/detailFood?id=1"
      }, 
      {
        imgUrl: '/pages/img/糖醋排骨.jpg',
        text: '糖醋排骨',
        id: 2,
        navigator:"/pages/detailFood2/detailFood2?id=2"
      },
      {
        imgUrl: '/pages/img/清炒时蔬.jpg',
        text: '清炒时蔬',
        id: 3,
        navigator: "/pages/detailFood3/detailFood3?id=3"
      }, 
      {
        imgUrl: '/pages/img/西红柿炒鸡蛋.jpg',
        text: '西红柿鸡蛋',
        id: 4,
        navigator: "/pages/detailFood4/detailFood4?id=4"
      },
      {
        imgUrl: '/pages/img/锅包肉.jpg',
        text: '锅包肉',
        id: 5,
        navigator: "/pages/detailFood5/detailFood5?id=5"
      },
      {
        imgUrl: '/pages/img/鱼香肉丝.jpg',
        text: '鱼香肉丝',
        id: 6,
        navigator: "/pages/detailFood6/detailFood6?id=6"
      },
      {
        imgUrl: '/pages/img/可乐鸡翅.jpg',
        text: '可乐鸡翅',
        id: 7,
        navigator: "/pages/detailFood7/detailFood7?id=7"
      },
      {
        imgUrl: '/pages/img/酸菜鱼.jpg',
        text: '酸菜鱼',
        id: 8,
        navigator: "/pages/detailFood8/detailFood8?id=8"
      },
      {
        imgUrl: '/pages/img/油爆虾.jpg',
        text: '油爆虾',
        id: 9,
        navigator: "/pages/detailFood9/detailFood9?id=9"
      },
      {
        imgUrl: '/pages/img/宫保鸡丁.jpg',
        text: '宫保鸡丁',
        id: 10,
        navigator: "/pages/detailFood10/detailFood10?id=10"
      },
      {
        imgUrl: '/pages/img/香煎豆腐.jpg',
        text: '香煎豆腐',
        id: 11,
        navigator: "/pages/detailFood11/detailFood11?id=11"
      },
      {
        imgUrl: '/pages/img/孜然羊肉.jpg',
        text: '孜然羊肉',
        id: 12,
        navigator: "/pages/detailFood12/detailFood12?id=12"
      },
      {
        imgUrl: '/pages/img/糖醋藕.jpg',
        text: '糖醋藕',
        id: 13,
        navigator: "/pages/detailFood13/detailFood13?id=13"
      },
      {
        imgUrl: '/pages/img/蒜苔炒肉.jpg',
        text: '蒜苔炒肉',
        id: 14,
        navigator: "/pages/detailFood14/detailFood14?id=14"
      },
      {
        imgUrl: '/pages/img/酸辣土豆丝.jpg',
        text: '酸辣土豆丝',
        id: 15,
        navigator: "/pages/detailFood15/detailFood15?id=15"
      },
      {
        imgUrl: '/pages/img/雪花酥.jpg',
        text: '雪花酥',
        id: 16,
        navigator: "/pages/detailFood16/detailFood16?id=16"
      },
      {
        imgUrl: '/pages/img/蛋挞.jpg',
        text: '蛋挞',
        id: 17,
        navigator: "/pages/detailFood17/detailFood17?id=17"
      },
      {
        imgUrl: '/pages/img/抹茶千层.jpg',
        text: '抹茶千层',
        id: 18,
        navigator: "/pages/detailFood18/detailFood18?id=18"
      },
      {
        imgUrl: '/pages/img/大碗宽面.jpg',
        text: '大碗宽面',
        id: 18,
        navigator: "/pages/detailFood19/detailFood19?id=19"
      }
    ],
    isLoading:false,//正在加载中
    noMore:true//是否还有更多数据
  },  //事件处理函数
  upper: function (e) {
      console.log(e)
  },
  lower: function (e) {
      console.log(e)
  },
  scroll: function (e) {
      console.log(e)
  },
  
  onShow:function(res){
    show = [];
    var that = this;
    wx.cloud.callFunction({
      name:'foodCount',
      data:{},
      success:function(res){
        var count=res.result.total;
        wx.cloud.callFunction({
          name: 'searchAll',
          data: {
            count:count
          },
          success: function (res) {
            console.log(res);
            for (var i = 0; i < res.result.data.length; i++) {
              show.push(res.result.data[i])
            }
            show=show.reverse();
            console.log(show)
            that.setData({
              show
            })
          }
        })
      }
    })
    
    
  },
  jumpDetail: function (event) {
    var id = event.currentTarget.id;
    console.log(id)
    app.globalData.id = show[id]['_id']
    console.log(app.globalData.id)
    wx.navigateTo({
      url: '/pages/detailFood/detailFood',
    })
  }
})
