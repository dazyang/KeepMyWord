const express = require('express')
const router = express.Router()

const booksDb = require('../db/booksDb')

router.get('/', (req, res) => {
  booksDb.getBooks()
    .then(books => {
      res.json(books)
    })
})

router.post('/', (req, res) => {
  booksDb.insertBook(req.body)
    .then(newBook => res.json(newBook))
    .catch(err => res.status(500).send(err.message + ' ' + '- SERVER ERROR'))
})

module.exports = router
