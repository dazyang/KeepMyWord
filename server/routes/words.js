const express = require('express')
const router = express.Router()

const wordsDb = require('../db/wordsDb')

router.get('/', (req, res) => {
  wordsDb.getWords()
    .then(words => {
      res.json(words)
    })
})

module.exports = router