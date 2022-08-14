const Account = require('../models/accountModel')
const catchError=require('../utility/catchError')

const res=(data,statusCode)=>{
  if(data.lenght>2){
    res.status(statusCode).json({
      status: "success",
      results:data.lenght,
      data: data,
    });
  }else{
    res.status(statusCode).json({
      status: "success",
      data: data,
    });
  }
}

//////////// get all ////////////////
const getAllAccount=catchError(async(req,res)=>{
   const data=await Account.find()
   res(data,200)
})
//////////// add /////////////////
const addAccount=catchError(async(req,res)=>{
  const data=await Account.create(req.body)
  res(data,200)
})

module.exports={getAllAccount,addAccount}