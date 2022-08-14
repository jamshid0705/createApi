const mongoose=require('mongoose')
const orderStatusSchema=new mongoose.Schema({
  order_id:String,
  create_at:{
    type:Date,
    default:Date.now()
  }
})

const orderStatus=mongoose.model('orderstatuses',orderStatusSchema)
module.exports=orderStatus