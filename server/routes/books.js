const express = require('express')
const router = express.Router()

const booksDb = require('../db/booksDb')

router.get('/', (req, res) => {
  // let db = req.app.get('db')
  booksDb.getBooks()
    .then(books => {
      res.json(books)
    })
})

router.post('/', (req, res) => {
  // let db = req.app.get('db')
  booksDb.saveBook(req.body)
    .then(newBook => {
      res.json(newBook)
    })
    .catch(() => {
      res.status(500).end()
    })
})

module.exports = router