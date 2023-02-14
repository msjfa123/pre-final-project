const{Router} =require('express');
const {changeRole} = require('../controller/changeRole');
const {authAdmin} = require('../middlewares/admin');
const {login}= require('../middlewares/login');
const router = Router()

router.post("/changing",login,authAdmin,changeRole)



module.exports=router