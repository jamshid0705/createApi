const express = require("express");
const Rout = express.Router();
const OrderController = require("../controllers/orderstatusController");

Rout.route("/").get(OrderController.getAllOrderStatus).post(OrderController.addOrderStatus);
Rout.route("/:id")
  .get(OrderController.getOneOrderStatus)
  .patch(OrderController.updateOrderStatus)
  .delete(OrderController.deleteOrderStatus);

module.exports = Rout;
