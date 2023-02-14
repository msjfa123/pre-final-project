const{Router} = require('express');
const {bookType} = require('../controller/bookType');
const {authAdmin} = require('../middlewares/admin');
const {login}= require('../middlewares/login');

const router = Router()

router.post("/addType/",login,authAdmin,bookType)

module.exports=router