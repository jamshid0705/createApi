const Transaction = require("../models/transactionModel");
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
const getAllTransaction = catchError(async (req, res) => {
  const data = await Transaction.find();
  res(data, 200);
});
//////////// add /////////////////
const addTransaction = catchError(async (req, res) => {
  const data = await Transaction.create(req.body);
  res(data, 200);
});
///////////// update ////////////
const updateTransaction = catchError(async (req, res) => {
  const data = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    validator: true,
  });
  res(data, 200);
});
////////// delete //////////////////
const deleteTransaction = catchError(async (req, res) => {
  const data = await Transaction.findByIdAndDelete(req.params.id);
  res(data, 200);
});
//////////// get one /////////////////
const getOneTransaction = catchError(async (req, res) => {
  const data = await Transaction.findById(req.params.id);
  res(data, 200);
});

module.exports = {
  getAllTransaction,
  addTransaction,
  getOneTransaction,
  updateTransaction,
  deleteTransaction,
};
