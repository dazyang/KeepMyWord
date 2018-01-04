const defaultConn = require('./connection')

const getBooks = () => {
  const db = defaultConn
  return db('populateBooks')
    .select('book_title', 'author', 'country') 
}

function saveBook(newBook) {
  const db = defaultConn
  return db('populateBooks')
    .insert({
      book_title: newBook.book_title,
      author: newBook.author,
      country: newBook.country
    })
}

module.exports = {
  getBooks,
  saveBook
}


