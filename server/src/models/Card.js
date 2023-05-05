const Sequelize = require('sequelize');
const { sequelize } = require('../db/config');

// created the User model here
const Card = sequelize.define("attack", {
    //id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    mojo: Sequelize.INTEGER,
    stamina: Sequelize.INTEGER,
    imgUrl: Sequelize.STRING
});

module.exports = { Card }