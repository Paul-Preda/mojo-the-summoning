const user = require('../models/User')
const card = require('../models/Card')
const deck = require('../models/Deck')
const attack = require('../models/Attack')
const { Deck, User, Card, Attack } = require('../models')

User.hasOne(Deck)
Deck.belongsTo(User)

Deck.hasMany(Card)
Card.belongsTo(Deck)

Card.hasMany(Attack)
Attack.belongsToMany(Card)


module.exports = { user, card, deck, attack }