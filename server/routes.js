const Router = require('express').Router;
let serverRouter = Router();
const itemController = require('./controller/catagory.controller');
serverRouter.use('/rest/v1/item',itemController);
module.exports = serverRouter;

