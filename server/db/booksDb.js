const defaultConn = require('./connection')

const getBooks = () => {
  const db = defaultConn
  return db('populateBooks')
    .select() 
}

const getBook = (id) => {
  const db = defaultConn
  return db('populateBooks')
    .where('id', id)
    .first()
}

// const getVocabs = (id) => {
//   const db = defaultConn
//   return db('populateBooks')
//     .where('id', id)
//     .first()
// }

const insertBook = (book) => {
  const db = defaultConn
  return db('populateBooks')
  .insert({
      book_title: book.book_title,
      author: book.author,
      country: book.country
    })
    .then(id => getBook(id[0]))
    // without this it won't work. Need to understand why. 
}

module.exports = {
  getBooks,
  insertBook
}


