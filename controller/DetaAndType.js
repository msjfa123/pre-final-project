const bookDetails = require("../model/bookDetails")
const bookType = require("../model/bookType")
const DetaAndType = require("../model/DetaAndType")



exports.DetaAndType = async(req,res,next)=>{
    let{bookName,type} = req.body

    if(bookName.length<2){
        return res.status(400).send("your bookName is false")
    }

    let typeId = await bookType.findOne({
        where:{type:type}
    })
    if(!typeId){
        return res.status(400).send("no type")
    }

    let detailsId = await bookDetails.findOne({
        where:{name:bookName}
    })
    if(!detailsId){
        return res.status(400).send("no name")
    }

    await DetaAndType.create({
        bookDetailId:detailsId.id,
        bookTypeId:typeId.id
    })

    return res.status(200).json({message:"was successful"})
}