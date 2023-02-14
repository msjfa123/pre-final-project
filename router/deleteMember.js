const{Router} = require('express');
const {deleteMember} = require('../controller/deleteMember');
const {authAdmin} = require('../middlewares/admin');
const {login}= require('../middlewares/login');

const router = Router()

router.post("/deleting/",login,authAdmin,deleteMember)







module.exports=router