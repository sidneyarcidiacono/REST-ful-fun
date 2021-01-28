require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const users = require('./models/users').users

const app = express()

const mainRoutes = require('./routes/main')
const messageRoutes = require('./routes/messages')

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', mainRoutes)

app.use((req, res, next) => {
  req.me = users[1]
  next()
})

app.use('/messages', messageRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`)
})
