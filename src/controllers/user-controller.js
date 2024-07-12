const { StatusCodes }= require('http-status-codes');

const { UserService} = require('../services/index');
const user = require('../models/user');
const { SuccessResponse, ErrorResponse } = require('../utils/common');




async function signup(req,res)
{
     try {
        const user = await UserService.create({
            name:req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = user;
        return res
                 .status(StatusCodes.CREATED)
                 .json(SuccessResponse)
    } catch (error)
     {
        ErrorResponse.error=error;
        return res
                 .status(error.statusCodes)
                 .json(ErrorResponse)
     }
 }
 async function signin(req,res)
{
     try {
        const user = await UserService.signin({
            email: req.body.email,
            password: req.body.password
        });
        SuccessResponse.data = user;
        return res
                 .status(StatusCodes.CREATED)
                 .json(SuccessResponse)
    } catch (error)
     {  console.log(error);
        ErrorResponse.error=error;
        return res
                 .status(error.statusCodes)
                 .json(ErrorResponse)
     }
 }

 async function getUser(req,res)
{
    try {
        const User = await UserService.getUsers(req.params.id);
        SuccessResponse.data=User;
        return res 
                 .status(StatusCodes.OK)
                 .json(SuccessResponse)
                 
    } catch (error) {
        ErrorResponse.error=error;
        return res 
                 .status(error.statusCodes)
                 .json(ErrorResponse)
    }
}
async function addRoleToUser(req, res) {
    try {
        const user = await UserService.addRoletoUser({
            role: req.body.role,
            id: req.body.id
        });
        SuccessResponse.data = user;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        console.log(error);
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}





 module.exports={
    signup,
    signin,
    addRoleToUser,
    getUser
 }