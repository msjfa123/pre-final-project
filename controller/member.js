
const bcrypt = require("bcrypt");
const member = require("../model/member");
const {hashing} = require('../utils/hash');


exports.register = async(req,res,next)=>{
    let{name,lastName,phoneNumber,password} = req.body
    if(name.length<3){
        return res.status(200).json({message:"your name must be grather than 3 digit"})
    }
    if(lastName.length<3){
        return res.status(200).json({message:"your name must be grather than 3 digit"})
    }
    if(phoneNumber.length!=10 || phoneNumber[0]=="0"){
        return res.status(200).json({message:"the first not be zero and must be 10 digits"})
    }
    if(password.length<3){
        return res.status(200).json({message:"password must be grather than 3 digit"})
    }

    let check = await member.findOne({
        where:{phoneNumber:phoneNumber}
    })
    if(check){
        return res.status(200).json({message:"you are an old member"})
    }
    let hashingPassword =await hashing(password,5)
    await member.create({
        name:name,
        lastName:lastName,
        phoneNumber:phoneNumber,
        password:hashingPassword,
        role:"user"
    })
    return res.status(200).json({message:"registered "})
}