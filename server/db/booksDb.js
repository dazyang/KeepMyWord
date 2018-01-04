const defaultConn = require('./connection')

const getBooks = () => {
  const db = defaultConn
  return db('populateBooks')
    .select('book_title', 'author', 'country') 
}

function saveBook({book_title, author, country}) {
  const db = defaultConn
  return db('populateBooks')
    .insert({
      book_title: book_title,
      author: author,
      country: country
    })
}

module.exports = {
  getBooks,
  saveBook
}


