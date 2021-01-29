const Router = require('express').Router;
let serverRouter = Router();
const itemController = require('./controller/item.controller');
const catagoryController = require('./controller/catagory.controller')
const userController=require('./controller/user.controller')
serverRouter.use('/rest/v1/catagory',catagoryController);
serverRouter.use('/rest/v1/user',userController)
serverRouter.use('/rest/v1/item',itemController);
module.exports = serverRouter;

