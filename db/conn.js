require("dotenv").config()
const mysql = require("mysql2")
const {Sequelize} = require("sequelize")

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  });
try {
    sequelize.authenticate()
} catch (error) {
    if(error){
        console.log("Sorry " + error)
    }
}


module.exports = sequelize