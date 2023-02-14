const database = require('../database');
const {DataTypes} = require('sequelize');
const member = require('../model/member');
const bookDetails = require('../model/bookDetails');



let cart = database.define('cart',{

    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    Number:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

cart.belongsTo(member)
member.hasMany(cart)
cart.belongsTo(bookDetails)
bookDetails.hasMany(cart)


database.sync().then(() => {
   // console.log('cart table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });   

module.exports = cart
