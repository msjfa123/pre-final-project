const{Router} = require('express');
const {discount} = require('../controller/discount');
const {authAdmin} = require('../middlewares/admin');
const {login}= require('../middlewares/login');

const router = Router()

router.post("/discounts/",login,authAdmin,discount)

module.exports=router