// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db=cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return await db.collection('food').add({
      data:{
        author:event.author,
        collectionNumber:0,
        like:0,
        cover: event.cover,
        name: event.name,
        brief: event.brief,
        degree: event.degree,
        time: event.time,
        material: event.material,
        weight: event.weight,
        step: event.step,
        share: event.share,
        skill: event.skill,
        sort: event.sort
      },
      success:function(res){
        return res
      }
    })
  }catch(e){
    console.error(e)
  }
}