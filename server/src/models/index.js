const { User } = require('./User')
const { Deck } = require('./Deck')
const { Card } = require('./Card')
const { Attack } = require('./Attack')

// import the rest of your models above

User.hasOne(Deck, { through: "user-deck" })
Deck.belongsTo(User, { through: "user-deck" })

Deck.hasMany(Card, { through: "deck-cards" })
Card.belongsTo(Deck, { through: "deck-cards" })

Card.hasMany(Attack, { through: "card-attack" })
Attack.belongsToMany(Card, { through: "card-attack" })

//set up the associations here

// and then export them all below
module.exports = { User, Deck, Card, Attack }