const{Router} =require('express');
const {showCart} = require('../controller/showCart');
const {login}= require('../middlewares/login');
const router = Router()

router.get("/showing",login,showCart)



module.exports=router