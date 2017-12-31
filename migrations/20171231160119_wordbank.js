
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('populateWords', function (table) {
    table.increments();
    table.string('book_id')
    table.string('word')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('populateWords')
};
