var app=getApp()
var tempPath;//暂存封面图
var cover;//存放封面图上传后的file ID
var imgGroup=[];//存放上传后的图片ID
var shareGroup=[];//存放分享图片数组上传后的临时路径
var inputName;//存放菜品名称
var inputBrief;//存放菜品简介
var degreeType="简单";//存放烹饪难度;
var timeType = "10分钟及以下";//存放烹饪时间
var inputSkill;//存放小技巧
var sortType;//存放菜品类型
var share
var isClick;//若用户已上传封面图，则隐藏提示字样
var isName=false;//用户是否已经输入菜品名称
var isBrief=false;//用户是否已经输入菜品简介
var isShare=false;//用户是否已经上传分享图片
var degree;//烹饪难度picker选项数组
var time;//烹饪时间picker选项数组
var index;
var timeIndex;
var add=1;
var step=1;
var indexImg=1;
var share = ['/images/uploadImg.png'];//暂存用户分享的图片
var sort=[];
var sortIndex=0;
var materialGroup=[];
var weightGroup=[];
var stepGroup=[];
var isLoad=false;
var sent=[];//存储用户发布的菜谱id
Page({

  /**
   * 页面的初始数据
   */
  data: {
    share:['/images/uploadImg.png'],
    indexImg:1,
    step:1,
    add:1,
    time:['10分钟及以下','20分钟','30分钟','40分钟','50分钟','60分钟及以上'],
    sort:['最受欢迎家常菜谱','闲情雅致下午茶','色味俱全鲜香主食'],
    timeIndex:0,
    index:0,
    sortIndex:0,
    degree:['简单','一般','较难'],
    tempPath :"cloud://shaobeike-kuj6l.7368-shaobeike-kuj6l-1301180386/我做的菜.jpg",
    isClock:false
  },

  

 

 



  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {
  // console.log("123")
  // },
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
                      });
                    
                  }
              });
              
          }
      })
  },
  select:function(event){
    index=event.detail.value;
    switch (index) {
      case '0': degreeType = "简单"; break;
      case '1': degreeType = "一般"; break;
      case '2': degreeType = "较难"; break;
    
    }
    this.setData({
      index
    })
    console.log(degreeType)

  },
  timeChange:function(event){
    timeIndex = event.detail.value;
    switch(timeIndex){
      case '0':timeType="10分钟及以下";break;
      case '1': timeType = "20分钟"; break;
      case '2': timeType = "30分钟"; break;
      case '3': timeType = "40分钟"; break;
      case '4': timeType = "50分钟"; break;
      case '5': timeType = "60分钟及以上";break;
    }
    console.log(timeType)
    this.setData({
      timeIndex
    })
  },
  addChange:function(event){
    add++;
    this.setData({
      add
    })
  },
  minusChange:function(res){
    if(add!=1){
      materialGroup.splice(add-1,1);
      weightGroup.splice(add - 1, 1);
      add--;
      console.log(materialGroup);
      console.log(weightGroup);
      this.setData({
        add
      })
    }
  },
  addStep: function (event) {
    step++;
    this.setData({
      step
    })
  },
  minusStep: function (res) {
    if (step != 1) {
      stepGroup.splice(step-1,1);
      step--;
      console.log(stepGroup)
      this.setData({
        step
      })
    } 
  },
  shareImg:function(){
    var that=this;
    var timestamp = (new Date()).valueOf();
    wx.chooseImage({
      success: function(res) {
        console.log(res);
        share.push(res.tempFilePaths[0])
        console.log(share)
        share.splice(indexImg - 1, 1);
        share.push('/images/uploadImg.png');
        indexImg++;
        if (indexImg > 1) {
          isShare = true;
        } else {
          isShare = false;
        }
        that.setData({
          share, indexImg
        })
        wx.cloud.uploadFile({
          cloudPath: timestamp + '.png',
          filePath: res.tempFilePaths[0],
          success:function(res){
            imgGroup.push(res.fileID);
            console.log(imgGroup)
          }
        })
       
      },
    })
  },
  cancel:function(event){
    console.log(event.currentTarget.id);
    var id = event.currentTarget.id;
    if(id!=(indexImg-1)){
      share.splice(id, 1);
      imgGroup.splice(id,1)
      indexImg--;
      if (indexImg > 1) {
        isShare = true;
      } else {
        isShare = false;
      }
      this.setData({
        share, indexImg
      })
    }
    
  },
  foodName:function(event){
    //console.log(event.detail.value);
    if (event.detail.value == "" || event.detail.value==" "){
      isName=false;
    }
    else{
      isName=true;
    }
    inputName=event.detail.value;
    //console.log(inputName)
    console.log("isName:"+isName)
  },
  brief:function(event){
    if (event.detail.value == "" || event.detail.value == " ") {
      isBrief = false;
    }
    else {
      isBrief = true;
    }
    inputBrief=event.detail.value;
    //console.log(inputBrief)
    console.log("isBrief:" + isBrief)
  },
  material:function(event){
    //console.log(event.currentTarget.id);
    var id = event.currentTarget.id;
    materialGroup.splice(id,1,event.detail.value);
    console.log(materialGroup);
  },
  weight:function(event){
    var id = event.currentTarget.id;
    weightGroup.splice(id, 1, event.detail.value);
    console.log(weightGroup);
  }
  ,
  stepInput:function(event){
    var id = event.currentTarget.id;
    stepGroup.splice(id, 1, event.detail.value);
    console.log(stepGroup);
  },
  skill:function(event){
    inputSkill=event.detail.value;
  },
  sortChange:function(event){
    sortIndex=event.detail.value;
    switch(sortIndex){
      case '0':sortType="最受欢迎家常菜谱";break;
      case '1':sortType="闲情雅致下午茶";break;
      case '2':sortType="色味俱全鲜香主食";break;
    }
    console.log(sortType)
    this.setData({
      sortIndex
    })
  }
  ,
  upload:function(){
    var userInfo=app.globalData.userInfo;
    wx.showModal({
      title: '确认上传',
      content: '确定上传吗',
      success:function(res){
        if(res.confirm){
          if(!isClick){
            wx.showToast({
              title: '尚未上传封面图',
              icon:'none'
            })
          } else if (!isName) {
              wx.showToast({
                title: '尚未填写菜品名称',
                icon: 'none'
              })
            
          }
          else if(!isBrief){
            wx.showToast({
              title: '尚未填写菜品简介',
              icon: 'none'
            })
          }else if(!isShare){
            wx.showToast({
              title: '尚未上传分享图片',
              icon: 'none'
            })
          }
          else{
            wx.showLoading({
              title: '上传中',
              mask: true
            })
            share.splice(indexImg-1,1);
            console.log(share);
            var timestamp = (new Date()).valueOf();
            wx.cloud.uploadFile({
                      cloudPath: timestamp + '.png',
                      filePath: tempPath,
                      success: function (res) {
                        console.log("封面上传成功")
                        console.log(res)
                        cover=res.fileID;
                        wx.cloud.callFunction({
                          name:'upload',
                          data:{
                            author:'烧贝壳',
                            cover: cover,
                            name:inputName,
                            brief:inputBrief,
                            degree:degreeType,
                            time:timeType,
                            material:materialGroup,
                            weight:weightGroup,
                            step:stepGroup,
                            share:imgGroup,
                            skill:inputSkill,
                            sort:sortType
                          },
                          success:function(res){
                            console.log(res)
                            sent.push(res.result['_id'])
                            console.log(sent)
                            wx.cloud.callFunction({
                              name:'updateUserInfo',
                              data:{
                                account:'烧贝壳',
                                share:sent
                              },
                              success:function(res){
                                console.log("用户数据库更新成功")
                              }
                            })

                            console.log("上传成功")
                            wx.hideLoading();
                              wx.showToast({
                                title: '上传成功',
                                icon:'success',
                                duration:2000,
                                success:function(){ 
                                  isLoad=true;
                                  setTimeout(function(res){
                                    wx.navigateBack({
                                      
                                    })
                                  },1000)
                                }
                              })
                            
                          }
                        })
                      },
                      fail:function(res){
                        console.error(res)
                      }
                    })  
          }
        }
      }
    })
  }
  ,
  onUnload:function(res){
    if(!isLoad)
    {
      wx.cloud.deleteFile({
      fileList:imgGroup,
      success:function(res){
        console.log("已取消上传分享图片")
      }
    })
    }
  },
  onShow:function(res){
    wx.cloud.callFunction({
      name:'searchAccount',
      data:{
        account:'烧贝壳'
      },
      success:function(res){
        console.log(res)
        sent=res.result.data[0]['share'];
        console.log(sent)
      }
    })
  }
})