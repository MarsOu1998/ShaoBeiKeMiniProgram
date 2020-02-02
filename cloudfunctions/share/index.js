// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db=cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try{
   return await db.collection('food').add({
     data:{
       author:event.author,
       profile:event.profile,
       name:event.name,
       collectionName: event.collectionName,
       like: event.like,
       brief: event.brief,
       degree: event.degree,
       time: event.time,
       list: event.list,
       step: event.step,
       pic: event.pic,
       skill: event.skill
     },
     success:function(res){
       return res;
     }
   }) 
  }catch(e){
    console.error()
  }

}