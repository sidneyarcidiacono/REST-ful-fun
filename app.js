require('dotenv').config()

const express = require('express')

const app = express()

const mainRoutes = require('./routes/main')
const messageRoutes = require('./routes/messages')

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

// app.use(bodyParser.json())

app.use('/users', mainRoutes)
app.use('/messages', messageRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`)
})
