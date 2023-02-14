const member = require("../model/member")
const cart = require('../model/cart');
const bookDetails = require("../model/bookDetails");
const DetaAndType = require("../model/DetaAndType");


exports.showCart = async(req,res,next)=>{



    let person= await member.findOne({
        where:{id:req.userid,
        phoneNumber:req.phoneNumber},
        include:[{
            model:cart,
            include:{
                model:bookDetails,
                include:{
                    model:DetaAndType
                }
            }
        }]
    })

    if(!person)
    return res.status(400).send("no person")
    
    let totalprice = 0
    for(let z=0;z<person.carts.length;++z){
        let Total = person.dataValues.carts[z].Number*person.dataValues.carts[z].bookDetail.price
        totalprice+=parseInt(Total)
    }
    return res.status(200).json({message:person,totalprice})

}