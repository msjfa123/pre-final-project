const database = require('../database');
const {DataTypes} = require('sequelize');

let bookType = database.define("bookType",{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

database.sync().then(() => {
    //console.log('bookType table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });   

 module.exports = bookType