const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcrypt')

const userSchema = new mongoose.Schema({
  account_id: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: [true, "Siz fullname kiritng!"],
  },
  birth_data: {
    type: String,
    required: [true, "Siz fullname kiritng!"],
  },
  image:{
    type:String
  },
  phone:{
    type:Number,
    required:[true,"Siz phone number kiriting!"]
  },
  email:{
    type:String,
    required:[true,'Siz email kiritng !'],
    unique:[true,"Bunday email mavjud !"],
    validate:{validator:function(val){
      return validator.isEmail(val)
    },message:'Siz to\'g\'ri email kiriting !'}
  },
  password:{
    type:String,
    required:[true,"Siz password kiriting !"],
    validate:{validator:function(val){
      return validator.isStrongPassword(val)
    },message:'Siz kuchliroq password kiritng !'}
  },
  phone_active:{
    type:Boolean
  },
  email_active:Boolean,
  active_user:Boolean,
  password_change_data:{
    type:Date,
    default:Date.now()
  },
  created_at:{
    type:Date,
    default:Date.now()
  }
});

userSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    next()
  }
  const hashlangan=await bcrypt.hash(this.password,12)
  this.password=hashlangan
})

const User=mongoose.model('users',userSchema)
module.exports=User