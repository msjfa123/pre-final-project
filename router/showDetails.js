const{Router} = require('express');
const {showDetails} = require('../controller/showDetails');
const {authAdmin} = require('../middlewares/admin');
const {login}= require('../middlewares/login');

const router = Router()

router.get("/details/:typeName?",login,authAdmin,showDetails)

module.exports=router