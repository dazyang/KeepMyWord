
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('booklists', function (table) {
    table.increments(); //I want the id of this table to auto increment
    table.string('user_id')
    table.string('book_title')
    table.string('author')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('booklists')
};
