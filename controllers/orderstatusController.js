const OrderStatus = require("../models/orderStatusModel");
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
const getAllOrderStatus = catchError(async (req, res) => {
  const data = await OrderStatus.find();
  res(data, 200);
});
//////////// add /////////////////
const addOrderStatus = catchError(async (req, res) => {
  const data = await OrderStatus.create(req.body);
  res(data, 200);
});
///////////// update ////////////
const updateOrderStatus = catchError(async (req, res) => {
  const data = await OrderStatus.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    validator: true,
  });
  res(data, 200);
});
////////// delete //////////////////
const deleteOrderStatus = catchError(async (req, res) => {
  const data = await OrderStatus.findByIdAndDelete(req.params.id);
  res(data, 200);
});
//////////// get one /////////////////
const getOneOrderStatus = catchError(async (req, res) => {
  const data = await OrderStatus.findById(req.params.id);
  res(data, 200);
});

module.exports = {
  getAllOrderStatus,
  addOrderStatus,
  getOneOrderStatus,
  updateOrderStatus,
  deleteOrderStatus,
};
