const express = require('express')
const router = express.Router()

const booksDb = require('../db/booksDb')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  booksDb.getBooks(db)
    .then(books => {
      res.json(books)
    })
})

module.exports = router
