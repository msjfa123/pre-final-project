const{Router} = require('express');
const {budget} = require('../controller/budget');
const {login}= require('../middlewares/login');

const router = Router()

router.post("/cash/",login,budget)

module.exports=router