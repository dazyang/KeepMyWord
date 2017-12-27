
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, "username": 'dazyang',"number_of_books": 1, "number_of_words": 1}
      ]);
    });
};
