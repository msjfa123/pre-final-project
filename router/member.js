const{Router} =require('express');
const {register} = require('../controller/member')
const router = Router()

router.post("/registering/",register)

module.exports = router