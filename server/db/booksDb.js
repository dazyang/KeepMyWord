const defaultConn = require('./connection')

const getBooks = () => {
  const db = defaultConn
  return db('populateBooks')
    .select('book_title', 'author') 
}

function saveBook({bookTitle, author}) {
  const db = defaultConn
  return db('populateBooks')
    .insert({
      book_title: bookTitle,
      author: author
    })
}

module.exports = {
  getBooks,
  saveBook
}


