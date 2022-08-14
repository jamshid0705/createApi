const express=require('express')
const accountController=require('../controllers/accountController')
const Rout=express.Router()

Rout.route('/').get(accountController.getAllAccount).post(accountController.addAccount)
module.exports=Rout