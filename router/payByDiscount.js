const{Router} = require('express');
const {payByDiscount} = require('../controller/payByDiscount');
const {login}= require('../middlewares/login');

const router = Router()

router.post("/pBD/",login,payByDiscount)

module.exports=router