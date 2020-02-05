// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db=cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
 try{
   return await db.collection('user').doc(event.account).update({
     data:{
       collection:event.collection,
       share:event.share,
       like:event.like
     },
     success:function(res){
       return res
     }
   })
 }catch(e){
   console.error(e)
 }
}