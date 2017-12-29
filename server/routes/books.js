const express = require('express')
const router = express.Router()

const bookDb = require('../db/bookDb')

router.get('/', (req, res) => {
  bookDb.getBooks()
    .then(book => {
      res.json(book)
    })
})

module.exports = router
