const Sequelize = require('sequelize');
const { sequelize } = require('../db/config');

// created the User model here
const Card = sequelize.define("card", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    mojo: Sequelize.INTEGER,
    stamina: Sequelize.INTEGER,
    imgUrl: Sequelize.STRING
});

module.exports = { Card }