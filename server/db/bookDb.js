const defaultConn = require('./connection')

const getBooks = (testConn) => {
  const db = testConn || defaultConn
  return db('booklists')
    .select()
}

module.exports = {
  getBooks
}
