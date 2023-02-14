const bookType = require("../model/booktype")


exports.bookType = async(req,res,next)=>{
    let{type} = req.body

    await bookType.create({
        type:type
    })
    return res.status(200).json({message:"add is done"})
}