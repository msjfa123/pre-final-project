const discount = require("../model/discount")


exports.discount = async(req,res,next)=>{
    let{title,Percent,number,expiration,status} = req.body

    let check = await discount.findOne({
        where:{title:title}
    })
    if(check){
        return res.status(400).send("This discount has already been saved")
    }

    if(title.length<2){
        return res.status(400).send("your title must be grather than 2 digits")
    }
    if(Percent>100 || Percent<0){
        return res.status(400).send("The percentage must be between 0 and 100")
    }
    if(status!="Active" && status!="notActive"){
        return res.status(400).send("status?")
    }

    await discount.create({
        title:title,
        Percent:Percent,
        number:number,
        expiration:expiration,
        status:status
    })
    
    return res.status(200).json({message:"The discount was saved"})
}