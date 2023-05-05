const Sequelize = require('sequelize');
const { sequelize } = require('../db/config');

// created the Deck model here
const Deck = sequelize.define("deck", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING, 
    xp: Sequelize.INTEGER
});

module.exports = { Deck }