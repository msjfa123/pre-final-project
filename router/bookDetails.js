const{Router} = require('express');
const {bookDetails} = require('../controller/bookDetails');
const {authAdmin} = require('../middlewares/admin');
const {login}= require('../middlewares/login');

const router = Router()

router.post("/details/",login,authAdmin,bookDetails)

module.exports=router