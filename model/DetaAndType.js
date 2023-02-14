const database = require('../database');
const {DataTypes} = require('sequelize');
const  bookDetails = require('../model/bookDetails');
const  bookType = require('../model/bookType');

let DetaAndType = database.define("DetaAndType",{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },

})
DetaAndType.belongsTo(bookDetails)
bookDetails.hasMany(DetaAndType)
DetaAndType.belongsTo(bookType)
bookType.hasMany(DetaAndType)


database.sync().then(() => {
   // console.log('DetaAndType table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });   

 module.exports = DetaAndType