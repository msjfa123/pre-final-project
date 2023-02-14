const database = require('../database');
const {DataTypes} = require('sequelize');
const discount = require('../model/discount');
const member = require('../model/member');

let onlyUse = database.define("onlyUse",{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    }
})

onlyUse.belongsTo(discount)
discount.hasMany(onlyUse)
onlyUse.belongsTo(member)
member.hasMany(onlyUse)


database.sync().then(() => {
    console.log('onlyUse table created successfully!');
  }).catch((error) => {
     console.error('Unable to create table : ', error);
  });   
 
  module.exports = onlyUse