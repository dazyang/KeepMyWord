
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('wordlists', function (table) {
    table.increments(); //I want the id of this table to auto increment
    table.string('user_id')
    table.string('book_id')
    table.string('word')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wordlists')
};
