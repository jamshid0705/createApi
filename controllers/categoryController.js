const Category = require("../models/categoryModel");
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

//////////// get all ////////////////
const getAllCategory = catchError(async (req, res) => {
  const data = await Category.find();
  res(data, 200);
});
//////////// add /////////////////
const addCategory = catchError(async (req, res) => {
  const data = await Category.create(req.body);
  res(data, 200);
});
///////////// update ////////////
const updateCategory=catchError(async(req,res)=>{
  const data=await Category.findByIdAndUpdate(req.params.id,req.body,{new:true,validator:true})
  res(data,200)
})
////////// delete //////////////////
const deleteCategory=catchError(async(req,res)=>{
  const data=await Category.findByIdAndDelete(req.params.id)
  res(data,200)
})
//////////// get one /////////////////
const getOneCategory=catchError(async(req,res)=>{
  const data=await Category.findById(req.params.id)
  res(data,200)
})

module.exports = {getAllCategory,addCategory,getOneCategory,updateCategory,deleteCategory};
