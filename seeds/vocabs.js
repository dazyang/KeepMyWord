
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('storeVocabs').del()
    .then(function () {
      // Inserts seed entries
      return knex('storeVocabs').insert([
        {id: 1, usersVocab: 'name', usersSentences: ''},
        {id: 2, usersVocab: 'technology', usersSentences: ''},
        {id: 3, usersVocab: 'electrical', usersSentences: ''}
      ]);
    });
};
