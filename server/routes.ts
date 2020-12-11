const Router = require('express').Router;
let serverRouter = Router();
const itemController = require('../server/controller/catagory.controller');
router.use('rest/v1/item', itemController);

module.exports = serverRouter;

