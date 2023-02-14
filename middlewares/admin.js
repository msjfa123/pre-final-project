const member = require("../model/member")


exports.authAdmin = async(req,res,next)=>{
    let person = await member.findOne({
        where:{id:req.userid,
        phoneNumber:req.phoneNumber}
    })
    if(person.role=="admin"){
        next()
    }
    else{
        return res.status(400).send('you are not an admin')
    }
}