const defaultConn = require('./connection')

const getWords = (testConn) => {
  const db = testConn || defaultConn
  return db('populateWords')
    .select()
}

module.exports = {
  getWords
}