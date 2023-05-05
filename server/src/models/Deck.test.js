const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('../models')
const { sequelize } = require('../db/config')

// define in global scope
let deck

// clear the database and create new Deck before tests
beforeAll(async () => {
    await sequelize.sync({ force: true })
    deck = await Deck.create({
        name: 'Tdeckname',
        xp: 100
    })
})


/*
   TEST TO COMPARE RECURSIVELY ALL PROPERTIES OF OBJECT INSTANCES AKA
   CHECKING FOR DEEP EQUALITY
*/


//creating two objects to compare whether they have the same values with toEqual
let deck1 = new Deck({
    name: "Testdeckname",
    xp: 55
})

let deck2 = new Deck({
    name: "Testdeckname",
    xp: 55
})

describe('comparing objects deck1 and deck2 that are identical', () => {
    test('have all the same properties', () => {
        expect(can1).toEqual(can2);
    });
    test('are not the exact same', () => {
        expect(can1).not.toBe(can2);
    });
});

/*
    TESTS CHECKING IF MODEL HAS ALL OF ITS PROPERTIES
*/

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// checks if the model has the property of id 
describe('deck', () => {
    it('has an id', async () => {
        expect(deck).toHaveProperty('id')
    })
})

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// checks if the model has the property of name 
describe('deck', () => {
    it('has name', async () => {
        expect(deck).toHaveProperty('name')
    })
})


// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// checks if the model has the property of xp 
describe('deck', () => {
    it('has xp', async () => {
        expect(deck).toHaveProperty('xp')
    })
})


/* 
    TESTING name PROPERTY
*/

//clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }))
// checks if the name property has been defined
describe('deck', () => {
    it('name property has been defined', async () => {
        expect(deck.name).toBeDefined();
    })
})

// clear sequelize after tests
afterAll(async () => await sequelize.sync({ force: true }))
// check that the name of the created deck is actually Tdeckname
describe('User', () => {
    it('checks if name actually says Tdeckname', async () => {
        expect(user.name).toBe('Tdeckname')
    })
})