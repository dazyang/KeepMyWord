const express = require('express')
const router = express.Router()

const booksDb = require('../db/booksDb')

router.get('/', (req, res) => {
  // console.log('thiis is' + booksDb)
  booksDb.getBooks()
    .then(books => {
      res.json(books)
    })
})

module.exports = router
