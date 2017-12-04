//.up - Applying the migration
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('storeVocabs', function (table) {
    table.increments(); //I want the id of this table to auto increment
    table.string('usersVocab')
    table.string('usersSentences')
  })
}

//.down - Undo the migration. When running rollback
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('storeVocabs')
}
