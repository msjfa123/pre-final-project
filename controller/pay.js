const bookDetails = require("../model/bookDetails")
const budget = require("../model/budget")
const cart = require("../model/cart")
const member = require("../model/member")






exports.pay = async(req,res,next)=>{

    let person =  await member.findOne({
        where:{phoneNumber:req.phoneNumber},
        include:{
            model:cart,
            include:{
                model:bookDetails
            }
        }
    })

    if(!person){
        return res.status(400).send("no person")
    }

    let totalprice = 0
    for(let z=0;z<person.carts.length;++z){
        let Total = person.dataValues.carts[z].Number*person.dataValues.carts[z].bookDetail.price
        totalprice+=parseInt(Total)
    }

    let value = await budget.findOne({
        where:{memberId:req.userid}
    })

    if(value.money>=totalprice){
        let changeMoney = value.money - totalprice
        await budget.update(
            {money:changeMoney},
            {where:{memberId:req.userid}}
        )

        for(let w=0;w<person.carts.length;++w){
            let existentialChange = person.dataValues.carts[w].bookDetail.number - person.dataValues.carts[w].Number
            await bookDetails.update(
                {number:existentialChange},
                {where:{id:person.dataValues.carts[w].bookDetail.id}}
            )
        }
        return res.status(200).json({message:"Thank you for your payment"})
        
    }
    return res.status(400).json("Not enough money")
}