const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Attack } = require("../models");
const { sequelize } = require("../db/config");

// define in global scope
let attack;

// clear the database and create new attack before tests
beforeAll(async () => {
  await sequelize.sync({ force: true });
  attack = await Attack.create({
    title: "Tattacktitle",
    mojoCost: 4,
    staminaCost: 9,
  });
});

/*
    TESTS CHECKING IF MODEL HAS ALL OF ITS PROPERTIES
*/

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }));
// checks if the model has the property of id
describe("attack", () => {
  it("has an id", async () => {
    expect(attack).toHaveProperty("id");
  });
});

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }));
// checks if the model has the title  property
describe("attack", () => {
  it("has a title porperty", async () => {
    expect(attack).toHaveProperty("title");
  });
});

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }));
// checks if the model has the mojoCost property
describe("attack", () => {
  it("has a mojoCost porperty", async () => {
    expect(attack).toHaveProperty("mojoCost");
  });
});

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }));
// checks if the model has the staminaCost property
describe("attack", () => {
  it("has a staminaCost porperty", async () => {
    expect(attack).toHaveProperty("staminaCost");
  });
});

/*
   TESTING THE title PROPERTY
*/

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }));
// check that the title of the created attack is actually Tattacktitle
describe("attack", () => {
  it("checks if the attacks title actually says Tattacktitle", async () => {
    expect(attack.title).toBe("Tattacktitle");
  });
});

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }));
// check that the title Tattacktitle has the length of 12
describe("attack", () => {
  it("checks the length of title Tattacktitle is 12", async () => {
    expect(attack.title).toHaveLength("Tattacktitle".length);
  });
});

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }));
// check that the title has been defined
describe("attack", () => {
  it("check that the title has been defined", async () => {
    expect(attack.title).toBeDefined();
  });
});

/*
  TESTING THE mojoCost PROPERTY
*/

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }));
// check that the mojoCost of the created attack is actually 4
describe("attack", () => {
  it("checks if the mojoCost actually says 4", async () => {
    expect(attack.mojoCost).toBe(4);
  });
});

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }));
// check that the mojoCost has been defined
describe("attack", () => {
  it("check that the mojoCost has been defined", async () => {
    expect(attack.mojoCost).toBeDefined();
  });
});

/*
  TESTING THE staminaCost PROPERTY
*/

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }));
// check that the staminaCost of the created attack is actually 9
describe("attack", () => {
  it("checks if the staminaCost actually says 9", async () => {
    expect(attack.staminaCost).toBe(9);
  });
});

// clear the database after tests
afterAll(async () => await sequelize.sync({ force: true }));
// check that the staminaCost has been defined
describe("attack", () => {
  it("check that the staminaCost has been defined", async () => {
    expect(attack.staminaCost).toBeDefined();
  });
});
