// let Sequelize = require("sequelize");
// let { sequelize } = require("../db/config");

const Sequelize = require('sequelize');
const { sequelize } = require('../db/config');


// create your User model here
const User = sequelize.define("user", {
    //id : Sequelize.INTEGER,
    username: Sequelize.STRING,
});

module.exports = { User }