const express = require('express')
const router = express.Router()

const booksDb = require('../db/booksDb')

router.get('/', (req, res) => {
  booksDb.getBooks()
    .then(books => {
      res.json(books)
    })
})

router.get('/', (req, res) => {
  booksDb.getBook()
    .then(book => {
      res.json(book)
    })
})

router.get('/:bookId/vocabs', (req, res) => {
  booksDb.getSingleBook(req.params.bookId)
    .then(book => {
      res.json(book)
    })
    // .catch(() => {
    //   res.status(500).end()
    // })
})


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

