var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

// server.use('/api/v1/definition/', (req,res) => {
//   request
//     .get(`https://wordsapiv1.p.mashape.com/words/`)
// })


module.exports = server
