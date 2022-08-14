const mongoose=require('mongoose')

const serviceSchema=new mongoose.Schema({
  category_id:{
    type:String,
    required:[true,'Siz category id ni kiritng !']
  },
  name:{
    type:String,
    required:[true,'Siz name kiriting !']
  },
  price:{
    type:Number,
    required:[true,"Siz price kiritng !"]
  },
  created_at:{
    type:Date,
    default:Date.now()
  }
})
const service=mongoose.model('services',serviceSchema)
module.exports=service