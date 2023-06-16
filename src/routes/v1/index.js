const express = require('express');

const { InfoController } = require('../../controllers');
const{AuthRequestMiddleWares}=require('../../middlewares')
const userRoutes= require('./user-routes.js')
const router = express.Router();

router.get('/info',AuthRequestMiddleWares.checkAuth,
                  InfoController.info);

router.use('/user', userRoutes);

module.exports = router;