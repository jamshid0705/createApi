const express = require("express");
const Rout = express.Router();
const TransactionController = require("../controllers/transactionController");

Rout.route("/").get(TransactionController.getAllTransaction).post(TransactionController.addTransaction);
Rout.route("/:id")
  .get(TransactionController.getOneTransaction)
  .patch(TransactionController.updateTransaction)
  .delete(TransactionController.deleteTransaction);

module.exports = Rout;
