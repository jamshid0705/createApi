const mongoose=require('mongoose')

const accountSchema=new mongoose.Schema({
  balance:{
    type:Number,
    required:[true,'Siz balance kiritng !']
  }
})
const Account=mongoose.model('accounts',accountSchema)
module.exports=Account