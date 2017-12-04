
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('booklists').del()
    .then(function () {
      // Inserts seed entries
      return knex('booklists').insert([
        {id: 1, "user_id": '1',"book_title": "A Fortunate Man", "author": "John Berger" }
      ]);
    });
};
