const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { User } = require('../models');
const { sequelize } = require('../db/config');

// define in global scope
let user
// clear sequelize and create new user before tests
beforeAll(async () => {
  await sequelize.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})
// clear sequelize after tests
afterAll(async () => await sequelize.sync({ force: true }))
describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })
 
})
// clear sequelize after tests
afterAll(async () => await sequelize.sync({ force: true }))
// check that the username of the created user is actually gandalf
describe('User', () => {
  it('checks if username actually says gandalf', async () => {
    expect(user.username).toBe('gandalf')
  })
 
})
// clear sequelize after tests
afterAll(async () => await sequelize.sync({ force: true }))
// check that the username word count gandalf
describe('User', () => {
  it('checks the length of username gandalf is 7', async () => {
    expect(user.username).toHaveLength(7)
  })
 
})
// clear sequelize after tests
afterAll(async () => await sequelize.sync({ force: true }))
// check that the username has been defined
describe('User', () => {
  it('check that the username has been defined ', async () => {
    expect(user.username).toBeDefined();
  })
 
})