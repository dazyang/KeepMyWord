const defaultConn = require('./connection')

const getBooks = () => {
  const db = defaultConn
  return db('populateBooks')
    .select('book_title', 'author', 'country') 
}

const insertBook = (book) => {
  const db = defaultConn
  return db('populateBooks')
    .insert(book)
    .then(newBook => getBooks(newBook))
}

module.exports = {
  getBooks,
  insertBook
}


