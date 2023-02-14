const {compare} = require('../utils/compare');
const jwt = require('jsonwebtoken');
const member = require('../model/member');
require('dotenv').config()

exports.createToken = async(req,res,next)=>{
    let{phoneNumber,password}=req.body

    if(phoneNumber.length!=10 || phoneNumber[0]=="0"){
        return res.status(200).json({message:"the first not be zero and must be 10 digits"})
    }
    if(password.length<3){
        return res.status(200).json({message:"your name must be grather than 3 digit"})
    }

    let person = await member.findOne({
        where:{phoneNumber:phoneNumber}
    })
    if(!person){
        return res.status(200).json({message:"no person"})
    }

    let checkPassword = compare(password,person.password)
    if(checkPassword==false){
        return res.status(200).json({message:"password is incorrect"})
    }

    const create = jwt.sign({phoneNumber:phoneNumber,userid:person.id},process.env.db_passwordToken,{expiresIn:"86400s"})
    return res.status(200).json({message:create})
}