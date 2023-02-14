const{Router} =require('express');
const {createToken} = require('../controller/createToken');

const router = Router()

router.post("/creating/",createToken)







module.exports=router