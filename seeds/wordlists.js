
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wordlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('wordlists').insert([
        {id: 1, "user_id": "1", "book_id": "1", "word": "Pallid"}
      ]);
    });
};
