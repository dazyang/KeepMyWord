const defaultConn = require('./connection')

const getBooks = (testConn) => {
  const db = testConn || defaultConn
  return db('populateBooks')
    .select() 
}

function saveBook(newBook,testConn) {
  const db = testConn || defaultConn
  const insertBook = {
    book_title: newBook.book_title,
    author: newBook.author
  }
  return db('populateBooks')
    .insert(insertBook)
    .then(book => getBooks(book))
    .catch(err => console.log(err))
  }

module.exports = {
  getBooks,
  saveBook
}
