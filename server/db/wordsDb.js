const defaultConn = require('./connection')

const getWords = (testConn) => {
  const db = testConn || defaultConn
  return db('populateWords')
    .select()
}

const getVocabsByBook = (bookId, testConn) => {
  const db = testConn || defaultConn
  return db ('populateWords')
  .join('populateBooks', 'populateWords.book_id', 'populateBooks.id')
  .where('book_id', bookId)
  .select('populateBooks.id', 'populateWords.word')
}

module.exports = {
  getWords,
  getVocabsByBook
}