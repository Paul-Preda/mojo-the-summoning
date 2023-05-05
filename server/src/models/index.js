const { User } = require('./User')
const { Deck } = require('./Deck')
const { Card } = require('./Card')
const { Attack } = require('./Attack')

// import the rest of your models above

User.hasOne(Deck, { through: "Player" })
Deck.belongsTo(User, { through: "Player" })

Deck.hasMany(Card, { through: "Deck" })
Card.belongsTo(Deck, { through: "Deck" })

Card.hasMany(Attack, { through: "Card" })
Attack.belongsToMany(Card, { through: "Card" })

//set up the associations here

// and then export them all below
module.exports = { User }
