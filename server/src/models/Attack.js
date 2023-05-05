const Sequelize = require('sequelize');
const { sequelize } = require('../db/config');

// created the Attack model here
const Attack = sequelize.define("attack", {
    //id: Sequelize.INTEGER,
    title: Sequelize.STRING,
    mojoCost: Sequelize.INTEGER,
    staminaCost: Sequelize.INTEGER
});

module.exports = { Attack }