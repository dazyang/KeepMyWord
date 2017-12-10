const dbConnection = require('./_dbConnection')

const getBooks = (book) => {
  const db = dbConnection
  return db('booklists')
  .select()
}

const addBooks = (book) => {
  const db = dbConnection
  return db('booklists')
  // first promise
  .insert({
    user_id: book.user_id,
    book_title: book.book_title,
    author: book.author
  })
  .then(id => getBooks(id[0]))
  .catch(err => console.log(err))
}

module.exports = {
  getBooks,
  addBooks
}
