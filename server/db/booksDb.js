const defaultConn = require('./connection')

const getBooks = (testConn) => {
  const db = testConn || defaultConn
  return db('populateBooks')
    .select() 
}

function saveBook(newBook, testConn) {
  const db = testConn || defaultConn
  return db('populateBooks')
    .insert({
      book_title: newBook.book_title,
      author: newBook.author
    })
    .then(book => getBooks())
    .catch(err => console.log(err))
  }

module.exports = {
  getBooks,
  saveBook
}
