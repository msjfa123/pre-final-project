const{Router} = require('express');
const {DetaAndType} = require('../controller/DetaAndType');
const {authAdmin} = require('../middlewares/admin');
const {login}= require('../middlewares/login');

const router = Router()

router.post("/Dat/",login,authAdmin,DetaAndType)

module.exports=router