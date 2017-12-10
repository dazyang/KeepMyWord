const request = require('superagent')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const booklists = require('./routes/booklistRoutes')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/booklist', booklists)

// server.use('/api/v1/definition/', (req,res) => {
//   request
//     .get(`https://wordsapiv1.p.mashape.com/words/`)
// })


module.exports = server
