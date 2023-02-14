const database = require('../database');
const {DataTypes} = require('sequelize');
const member = require('../model/member');



let discount = database.define("discount",{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Percent:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    number:{
        type:DataTypes.INTEGER,
        allowNull:true,
        defaultValue:null
    },
    expiration:{
        type:DataTypes.DATE,
        allowNull:true,
        defaultValue:null
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    }
})


database.sync().then(() => {
    console.log('discount table created successfully!');
  }).catch((error) => {
     console.error('Unable to create table : ', error);
  });   
 
 module.exports = discount