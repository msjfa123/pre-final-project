const{Router} =require('express');
const {show} = require('../controller/showAll');
const {login}= require('../middlewares/login');
const router = Router()

router.get("/showing",login,show)



module.exports=router