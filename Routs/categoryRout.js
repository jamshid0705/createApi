const express = require("express");
const Rout = express.Router();
const categoryController=require('../controllers/categoryController')

Rout.route("/")
  .get(categoryController.getAllCategory)
  .post(categoryController.addCategory);
Rout.route("/:id")
  .get(categoryController.getOneCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = Rout;
