const express = require('express')
const router = express.Router()

const booksDb = require('../db/booksDb')

router.get('/', (req, res) => {
  booksDb.getBooks()
    .then(books => {
      res.json(books)
    })
})

// router.get('/', (req, res) => {
//   booksDb.getVocabs()
//     .then(books => {
//       res.json(books)
//     })
// })


router.post('/', (req, res) => {
  let {book_title, author, country} = req.body
  let newBook = { book_title, author, country }
  booksDb.insertBook(newBook)
    .then(book => {
      res.json(book)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})
  module.exports = router

