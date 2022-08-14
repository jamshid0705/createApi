const express = require("express");
const Rout = express.Router();
const ServiceController= require("../controllers/serviceController");

Rout.route("/")
  .get(ServiceController.getAllService)
  .post(ServiceController.addService);
Rout.route("/:id")
  .get(ServiceController.getOneService)
  .patch(ServiceController.updateService)
  .delete(ServiceController.deleteService);

module.exports = Rout;
