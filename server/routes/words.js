const express = require('express')
const router = express.Router()

const wordsDb = require('../db/wordsDb')

router.get('/', (req, res) => {
  wordsDb.getWords()
    .then(words => {
      res.json(words)
    })
})

router.get('/:bookId/vocabs', (req, res) => {
  wordsDb.getVocabsByBook(req.params.bookId)
  .then(wordlist => res.json(wordlist))
})

module.exports = router