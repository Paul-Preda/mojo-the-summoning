const Sequelize = require('sequelize');
const { sequelize } = require('../db/config');

// created the Attack model here
const Attack = sequelize.define("attack", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    title: Sequelize.STRING,
    mojoCost: Sequelize.INTEGER,
    staminaCost: Sequelize.INTEGER
});

module.exports = { Attack }