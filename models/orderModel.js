const mongoose=require('mongoose')
const orderSchema=new mongoose.Schema({
  service_id:String,
  user_id:String,
  link:{
    type:String,
    required:[true,"Siz link kiritishingiz kerak !"],
  },
  quantity:{
    type:Number,
    required:[true,"Siz quantity kiritishingiz kerak !"],
    min:100,
    max:1000
  },
  created_at:{
    type:Date,
    default:Date.now()
  }
})

const order=mongoose.model('orders',orderSchema)
module.exports=order