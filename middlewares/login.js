const jwt = require('jsonwebtoken');

exports.login=async(req,res,next)=>{
const authHeader = req.headers['authorization']
if(!authHeader){
  return  res.status(200).json({message:'no token'})
}

try{
const token =  authHeader.split(' ')[1]
const changeToken = await jwt.verify(token, process.env.db_passwordToken)
req.userid = changeToken.userid;
req.phoneNumber = changeToken.phoneNumber;
next()

}
catch (error){
return res.status(400).send('Invalid token !');
}
}






