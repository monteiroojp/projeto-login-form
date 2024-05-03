//Create router
const express = require('express')
const route = express.Router()

//Get controllers
const {authenticateUser, createUser, updateUser} = require('../controllers/loginControllers')

//Login
route.route('/login').post(authenticateUser)
route.use('/login',express.static('public/login'))

//SignUp
route.route('/signup').post(createUser)
route.use('/signup', express.static('public/signup'))

//ForgotPassword
route.route('/forgotpassword').patch(updateUser)
route.use('/forgotPassword', express.static('public/forgotPassword'))



module.exports = route