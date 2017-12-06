// const path = require('path')
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, './knexfile'))[env]
const dbConnection = require('knex')(config)

module.exports = dbConnection