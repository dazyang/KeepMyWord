
exports.seed = function(knex, Promise) {
  return knex('populateBooks').del()
    .then(function () {
      // Inserts seed entries
      return knex('populateBooks').insert([
        {id: 1, book_title: 'A Fortunate Man', author: 'John Berger & Jean Mohr', country:'England'},
        {id: 2, book_title: 'The Remain of days', author: 'Kazuo Ishiguro', country:'England'},
        {id: 3, book_title: 'Do They Speak English Down There?', author: 'Susan C Tunney', country:'America/NewZealand'}
      ]);
    });
};
