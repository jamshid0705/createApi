const User = require("../models/userModel");
const catchError = require("../utility/catchError");

const res = (data, statusCode) => {
  if (data.lenght > 2) {
    res.status(statusCode).json({
      status: "success",
      results: data.lenght,
      data: data,
    });
  } else {
    res.status(statusCode).json({
      status: "success",
      data: data,
    });
  }
};
/////////// get all ///////////////////
const getAllUser=catchError(async(req,res)=>{
  const data=await User.find()
  res(data,200)
})
//////////// get one /////////////////
const getOne=catchError(async(req,res)=>{
  const data=await User.findById(req.params.id)
  res(data,200)
})
//////////// post ///////////////////
const addUser=catchError(async(req,res)=>{
  const data=await User.create(req.body)
  res(data,200)
})
//////////// update /////////////////
const updateUser=catchError(async(req,res)=>{
  const data=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,validator:true})
  res(data,200)
})
////////// delete //////////////////
const deleteUser=catchError(async(req,res)=>{
  const data=await User.findByIdAndDelete(req.params.id)
  res(data,200)
})

module.exports={getAllUser,getOne,addUser,updateUser,deleteUser}