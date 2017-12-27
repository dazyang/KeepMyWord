//.up - Applying the migration
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments(); //I want the id of this table to auto increment
    table.string('username')
    table.string('number_of_books')
    table.string('number_of_words')
  })
};
//.down - Undo the migration. When running rollback
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
