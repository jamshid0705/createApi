const Order= require("../models/orderModel");
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
const getAllOrder = catchError(async (req, res) => {
  const data = await Order.find();
  res(data, 200);
});
//////////// add /////////////////
const addOrder = catchError(async (req, res) => {
  const data = await Order.create(req.body);
  res(data, 200);
});
///////////// update ////////////
const updateOrder = catchError(async (req, res) => {
  const data = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    validator: true,
  });
  res(data, 200);
});
////////// delete //////////////////
const deleteOrder = catchError(async (req, res) => {
  const data = await Order.findByIdAndDelete(req.params.id);
  res(data, 200);
});
//////////// get one /////////////////
const getOneOrder = catchError(async (req, res) => {
  const data = await Order.findById(req.params.id);
  res(data, 200);
});

module.exports = {
  getAllOrder,
  addOrder,
  getOneOrder,
  updateOrder,
  deleteOrder,
};
