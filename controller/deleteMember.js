const member = require("../model/member")



exports.deleteMember = async(req,res,next)=>{
    let{Id}= req.body

    await member.destroy({
        where:{id:Id}
    })
    return res.status(200).json({message:"deleted"})
}