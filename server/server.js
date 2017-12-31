const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const greetings = require('./routes/greeting')
const books = require('./routes/books')
const words = require('./routes/words')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/greetings', greetings)
server.use('/api/v1/booklists', books)
server.use('/api/v1/wordlists', words)

module.exports = server
