const budget = require("../model/budget")



exports.budget = async(req,res,next)=>{
    let{money} = req.body

    let exist = await budget.findOne({
        where:{memberId:req.userid}
    })

    if(exist){
        let newMoney = parseInt(exist.money)+ parseInt(money)
        await budget.update(
            {money:newMoney},
            {where:{memberId:req.userid}}
        )
    }
    else{
        await budget.create({
            money:money,
            memberId:req.userid
        })
    }
    return res.status(200).json({message:"budget increased"})
}