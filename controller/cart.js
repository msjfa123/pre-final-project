const bookDetails = require("../model/bookDetails")
const cart = require("../model/cart")




exports.cart = async(req,res,next)=>{
    let{Number,bookDetailsId} = req.body

    let book = await bookDetails.findOne({
        where:{id:bookDetailsId}
    })
    if(!book){
        return res.status(400).send("this book is not available")
    }
    if(parseInt(Number)>book.number){
        return res.status(200).json({message:"Not enough available"})
    }
    
    let check = await cart.findOne({
        where:{
            bookDetailId:book.id,
            memberId:req.userid
        }
    })
    if(check){
        let newNumber = parseInt(check.Number)+parseInt(Number)
        await cart.update(
            {Number:newNumber},
            {where:{memberId:req.userid,
            bookDetailId:book.id}}
        )
        return res.status(200).json({message:`${Number} is added`})
    }
    else{
        await cart.create({
            Number:Number,
            memberId:req.userid,
            bookDetailId:book.id
        })
        return res.status(200).json({message:"added"})
    }
    
}