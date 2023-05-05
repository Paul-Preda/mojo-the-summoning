// add your database connection here
let path = require("path");
let Sequelize = require("sequelize")

let sequelize = new Sequelize({
    dialect: "sqlite",
    storage: (__dirname,'db.sqlite')
})

module.exports = { sequelize }