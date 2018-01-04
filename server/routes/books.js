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
  booksDb.saveBook(req.body)
  // console.log(book)
    .then(book => {
      res.json(book)
    })
    .catch(() => {
      res.status(500).end()
    })
})

module.exports = router

// router.post('/', (req, res) => {
//   let db = req.app.get('db')
//   catsDb.insertCat(req.body, db)
//     .then(cat => res.json(cat))
//     .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))
// })