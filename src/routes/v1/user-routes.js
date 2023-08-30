const express = require('express');

const {UserController}=require('../../controllers');
const { AuthRequestMiddleWares } = require('../../middlewares');

const router = express.Router();

          router.post('/signup',
                          AuthRequestMiddleWares.ValidateAuthRequest,
                          UserController.signup)

          router.post('/signin',
                          AuthRequestMiddleWares.ValidateAuthRequest,
                          UserController.signin);

          router.get('/:id',
                           UserController.getUser);    
                
module.exports =router; 