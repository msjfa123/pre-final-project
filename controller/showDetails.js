const bookDetails = require("../model/bookDetails")
const bookType = require("../model/bookType")
const DetaAndType = require("../model/DetaAndType")



exports.showDetails = async(req,res,next)=>{
    let Type = req.params.typeName

    if(Type){
        let consider = await bookType.findAll({
            where:{type:Type},
            include:[{
                model:DetaAndType,
                include:[{
                    model:bookDetails
                }]
            }]
        })
        return res.status(200).json({message:consider})
    }
    let showall = await bookDetails.findAll({
        include:[{
            model:DetaAndType
        }]
    })
    return res.status(200).json({message:showall})

}