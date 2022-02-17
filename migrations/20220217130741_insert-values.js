const faker = require("faker")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex("data_book").insert(
    [...new Array(20)].map(() => ({
      activity: faker.name.jobTitle(),
      name: faker.name.firstName(),
      adress: faker.address.streetAddress(),
      postcode: faker.address.zipCode(),
      city: faker.address.city(),
      number: faker.phone.phoneNumber(),
    }))
  )
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex("data_book").truncate()
}
