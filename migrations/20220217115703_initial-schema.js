/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("data_book", (table) => {
    table.increments()
    table.string("activity")
    table.string("name")
    table.string("adress")
    table.string("postcode")
    table.string("city")
    table.string("number")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable("data_book")
}
