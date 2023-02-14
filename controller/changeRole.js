const { where } = require("sequelize")
const member = require("../model/member")




exports.changeRole = async(req,res,next)=>{
    let{Id} = req.body
    
        let user = await member.findOne({
            where:{id:Id}
        })

        let role='admin'
        if(user.role=='admin'){
            role='user'
        }
        await member.update(
                    {role:role},
                    {where:{id:Id}}
        )
        return res.status(200).json({message:"the role changed"})
}