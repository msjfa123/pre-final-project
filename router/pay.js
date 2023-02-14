const{Router} =require('express');
const {pay} = require('../controller/pay');
const {login}= require('../middlewares/login');
const router = Router()

router.get("/paying",login,pay)



module.exports=router