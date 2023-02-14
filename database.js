const {Sequelize} = require("sequelize");
require('dotenv').config()

const database = new Sequelize(process.env.db_NAME, process.env.db_USER , '', {
    dialect: "mysql",
    host: process.env.db_HOST,
});



database.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });





 

 module.exports = database;