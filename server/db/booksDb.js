const defaultConn = require('./connection')

const getBooks = (testConn) => {
  const db = testConn || defaultConn
  return db('populateBooks') //this should return the name of the table, not exactly sure why?
}

module.exports = {
  getBooks
}
