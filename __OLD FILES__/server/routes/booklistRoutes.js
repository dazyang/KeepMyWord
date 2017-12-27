// const express = require('express')
// const router = express.Router()

// const booklistsDb = require('../database/booklistsDb')
// const {getbooks, addBooks} = require('../db/booklistsDb')

// router.get('/', (req, res) => {
//   getBooks(req.booklists.id)
//   .then(books => {
//     console.log(books)
//     res.json(books)
//   })
// })

// router.post('/booklists', (req, res) => {
//   let {book} = req.body
//   book.user_id = req.user.id
//   addBooks(book)
//   .then(newBook => res.json(newBook))
//   .catch(err => res.status(500).end())
// })

// module.exports = router