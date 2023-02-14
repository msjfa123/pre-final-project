const database = require('../database');
const {DataTypes} = require('sequelize');

let bookDetails = database.define("bookDetails",{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    writer:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.STRING,
        allowNull:false
    },
    number:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
    
})

database.sync().then(() => {
   // console.log('bookDetails table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });   

 module.exports = bookDetails