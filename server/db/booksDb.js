const defaultConn = require('./connection')

const getBooks = (testConn) => {
  const db = testConn || defaultConn
  return db('populateBooks')
}

module.exports = {
  getBooks
}
