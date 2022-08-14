const express=require('express')
const Rout=express.Router()
const UserController=require('../controllers/userController')

Rout.route('/').get(UserController.getAllUser).post(UserController.addUser)
Rout.route('/:id').get(UserController.getOne).patch(UserController.updateUser).delete(UserController.deleteUser)

module.exports=Rout