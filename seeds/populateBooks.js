
exports.seed = function(knex, Promise) {
  return knex('populateBooks').del()
    .then(function () {
      // Inserts seed entries
      return knex('populateBooks').insert([
        { id: 1, 
          book_title: 'A Fortunate Man', 
          author: 'John Berger & Jean Mohr', 
          country:'England'
        },
        
        { id: 2, book_title: 'The Remain of Days', 
        author: 'Kazuo Ishiguro', 
        country:'England'
        }
      ]);
    });
};
