const express= require('express')
const controllers=require('../controller/user.controller');
const router = express.Router(controllers.getUser);

router.post('/user',controllers.getUser)


module.exports=router;
