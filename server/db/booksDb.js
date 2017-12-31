const defaultConn = require('./connection')

const getBooks = (testConn) => {
  const db = testConn || defaultConn
  return db('populateBooks')
    .select('id', 'book_title', 'author', 'country') 
}

module.exports = {
  getBooks
}
