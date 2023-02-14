const database = require('../database');
const {DataTypes} = require('sequelize');
const member = require('./member');

const budget = database.define("budget",{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    money:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

budget.belongsTo(member)
member.hasOne(budget)

database.sync().then(() => {
    console.log('budget created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });   


 module.exports = budget