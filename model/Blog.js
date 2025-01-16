const Datatypes = require("sequelize")
const db = require("../db/conn")

const Blog = db.define("Blog", {
    title:{
        type: Datatypes.STRING,
        allowNull: false
    },
    text: {
        type: Datatypes.STRING,
        allowNull: false
    }

})

module.exports = Blog