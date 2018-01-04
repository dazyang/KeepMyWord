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

router.post('/booklists', (req, res) => {
  const newBook = {
    book_title: req.body.bookTitle,
    author: req.body.author
  }
  booksDb.saveBook(newBook)
    .then(newBook => {
      res.json(newBook)
    })
    .catch(() => {
      res.status(500).end()
    })
})

module.exports = router


// router.post('/booklists', (req, res) => {
//   let { comment } = req.body
//   comment.user_id = req.user.id
//   comment.recipe_id = req.params.id
//   addComment(comment)
//     .then(newComment => res.json(newComment))
//     .catch(err => res.status(500).end())
// })
