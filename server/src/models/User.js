const Sequelize = require('sequelize');
const { sequelize } = require('../db/config');


// created the User model here
const User = sequelize.define("user", {
    //id : Sequelize.INTEGER,
    username: Sequelize.STRING,
});

module.exports = { User }