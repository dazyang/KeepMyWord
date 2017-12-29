const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const greetings = require('./routes/greeting')
const books= require('./routes/bookDb')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/greetings', greetings)
server.use('/api/books', books)

module.exports = server
