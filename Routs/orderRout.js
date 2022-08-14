const express = require("express");
const Rout = express.Router();
const OrderController = require("../controllers/orderController");

Rout.route("/").get(OrderController.getAllOrder).post(OrderController.addOrder);
Rout.route("/:id")
  .get(OrderController.getOneOrder)
  .patch(OrderController.updateOrder)
  .delete(OrderController.deleteOrder);

module.exports = Rout;
