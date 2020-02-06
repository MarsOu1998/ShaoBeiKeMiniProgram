// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db=cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    return await db.collection('food').where({
      name:db.RegExp({
        regexp:event.name,
        options:'i'
      })
    }).skip(event.page).get({
      success:function(res){
        return res
      }
    })
  }catch(e){
    console.error(e)
  }
}