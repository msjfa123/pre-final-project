const bookDetails = require("../model/bookDetails")



exports.bookDetails = async(req,res,next)=>{
    let{name,writer,price,number} = req.body

    if(name.length<2){
        return res.status(400).send("your name must be grather than 2 didits")
    }
    if(writer.length<2){
        return res.status(400).json({message:"your name must be grather than 2 didits"})
    }

    await bookDetails.create({
        name:name,
        writer:writer,
        price:price,
        number:number
    })

    return res.status(200).json({message:'add is done'})
}
