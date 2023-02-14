const{Router} = require('express');
const {cart} = require('../controller/cart');
const {login}= require('../middlewares/login');

const router = Router()

router.post("/carts/",login,cart)

module.exports=router