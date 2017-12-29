exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('populateBooks', (table) => {
    table.increments('id')
    table.string('book_title')
    table.string('author')
    table.string('country')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('populateBooks')
}