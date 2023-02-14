const member = require("../model/member")



exports.show = async(req,res,next)=>{
    let person = await member.findOne({
        where:{id:req.userid,
        phoneNumber:req.phoneNumber}
    })
    if(!person){
        return res.status(200).json({message:"no person"})
    }

    if(person.role=="admin"){
        let show = await member.findAll({})
        return res.status(200).json({message:show})
    }
    return res.status(200).json({message:"You are not an admin"})
}