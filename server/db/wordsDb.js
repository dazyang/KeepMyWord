const defaultConn = require('./connection')

const getWords = (testConn) => {
  const db = testConn || defaultConn
  return db('populateWords')
    .select('id', 'word')
}

module.exports = {
  getWords
}