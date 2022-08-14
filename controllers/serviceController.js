const Service = require("../models/serviceModel");
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
const getAllService = catchError(async (req, res) => {
  const data = await Service.find();
  res(data, 200);
});
//////////// add /////////////////
const addService = catchError(async (req, res) => {
  const data = await Service.create(req.body);
  res(data, 200);
});
///////////// update ////////////
const updateService = catchError(async (req, res) => {
  const data = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    validator: true,
  });
  res(data, 200);
});
////////// delete //////////////////
const deleteService = catchError(async (req, res) => {
  const data = await Service.findByIdAndDelete(req.params.id);
  res(data, 200);
});
//////////// get one /////////////////
const getOneService = catchError(async (req, res) => {
  const data = await Service.findById(req.params.id);
  res(data, 200);
});

module.exports = {
  getAllService,
  addService,
  getOneService,
  updateService,
  deleteService,
};
