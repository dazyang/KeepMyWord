const defaultConn = require('./connection')

const getWords = (testConn) => {
  const db = testConn || defaultConn
  return db('populateWords')
    .select()
}

const getVocabsByBook = (bookId, testConn) => {
  const db = testConn || defaultConn
  return db ('populateWords')
  .where('book_id', bookId)
  .join('populateBooks', 'populateWords.book_id', 'populateBooks.id')
    .select('populateBooks.id', 'populateWords.word')
}

module.exports = {
  getWords,
  getVocabsByBook
}