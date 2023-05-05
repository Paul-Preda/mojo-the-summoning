const Sequelize = require('sequelize');
const { sequelize } = require('../db/config');

// created the Deck model here
const Deck = sequelize.define("deck", {
    //id: Sequelize.INTEGER,
    name: Sequelize.STRING, 
    xp: Sequelize.INTEGER
});

module.exports = { Deck }