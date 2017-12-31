
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('populateWords').del()
    .then(function () {
      // Inserts seed entries
      return knex('populateWords').insert([
        {id: 1, book_id: 1, word: 'Plasma'},
        {id: 2, book_id: 1, word: 'Dispensary'},
        {id: 3, book_id: 1, word: 'Solidity'}
      ]);
    });
};
