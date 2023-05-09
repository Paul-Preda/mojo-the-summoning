const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('../models')
const { sequelize } = require('../db/config')

// define in global scope
let card

// clear the database and create new card before tests
beforeAll(async () => {
    await sequelize.sync({ force: true })
    card = await Card.create({
        id: 1,
        name: 'Tcardname',
        mojo: 5,
        stamina: 10,
        imgUrl: 'https://www.dreamstime.com/photos-images/video-game.html'
    });
});

/*
    TESTS CHECKING IF MODEL HAS ALL OF ITS PROPERTIES
*/

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// checks if the model has the property of id 
describe('card', () => {
    it('has an id', async () => {
        expect(card).toHaveProperty('id')
    })

})

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// checks if the model has the name  property
describe('card', () => {
    it('has a name porperty', async () => {
        expect(card).toHaveProperty('name')
    })

})

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// checks if the model has the mojo property
describe('card', () => {
    it('has a mojo porperty', async () => {
        expect(card).toHaveProperty('mojo')
    })

})


// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// checks if the model has the stamina property
describe('card', () => {
    it('has a stamina porperty', async () => {
        expect(card).toHaveProperty('stamina')
    })

})

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// checks if the model has the imgUrl property
describe('card', () => {
    it('has a imgUrl porperty', async () => {
        expect(card).toHaveProperty('imgUrl')
    })

})


/*
   TESTING THE NAME PROPERTY
*/

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// check that the name of the created card is actually Tcardname
describe('card', () => {
    it('checks if the cards name actually says Tcardname', async () => {
        expect(card.name).toBe('Tcardname')
    })

})

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// check that the name Tcardname has the length of 9
describe('card', () => {
    it('checks the length of name Tcardname is 9', async () => {
        expect(card.name).toHaveLength(9)
    })

})

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// check that the name has been defined
describe('card', () => {
    it('check that the name has been defined', async () => {
        expect(card.name).toBeDefined();
    })

})w