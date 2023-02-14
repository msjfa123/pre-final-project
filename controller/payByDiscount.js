const jalaali = require("jalaali-js");
const bookDetails = require("../model/bookDetails");
const budget = require("../model/budget");
const cart = require("../model/cart");
const discount = require("../model/discount");
const member = require("../model/member");
const onlyUse = require("../model/onlyUse");




exports.payByDiscount = async (req, res, next) => {
  let {title} = req.body;
  let findDiscount = await discount.findOne({
    where: { title: title },
  });
  let totalprice = 0;
  let number = findDiscount.number;

  if(findDiscount){
    if(findDiscount.dataValues.expiration != null){
      let today = new Date().toLocaleDateString("fa-IR-u-nu-latn");
      let discountDate = findDiscount.dataValues.expiration;
      let dd = new Date(discountDate);
      let td = new Date(today);
      if (td > dd) {
        return res.status(400).send("The discount code has expired");
      }}

    let check = await onlyUse.findOne({
      where:{memberId: req.userid, discountId: findDiscount.id}
    })
    if(check){
      return res.status(400).send("You have already used this discount");
    }

    if (findDiscount.dataValues.number != null){
      if (number>0){
        let numbers = number - 1;
        await discount.update(
          { number: numbers },
          { where: { title: title } }
          );
        }
      }
    let person = await member.findOne({
      where: { phoneNumber: req.phoneNumber },
      include: {
        model: cart,
        include: {
          model: bookDetails,
          },
        },
    })
    for (let x = 0; x < person.carts.length; ++x) {
      let Total =
         person.dataValues.carts[x].Number *
         person.dataValues.carts[x].bookDetail.price;
      totalprice += parseInt(Total);
      }
    let value = await budget.findOne({
      where:{memberId: req.userid }
    })
    if (value.money >= totalprice) {
      let changeMoney =
        value.money -
        (1 - parseInt(findDiscount.dataValues.Percent) / 100) * totalprice;
      await budget.update(
        { money: changeMoney },
         { where: { memberId: req.userid } }
        );
      }
    await onlyUse.create({
      memberId: req.userid,
      discountId: findDiscount.id,
    })
    return res.status(200).json({ message: "thanks for pay" });
  }
  else{
  let person = await member.findOne({
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
};
