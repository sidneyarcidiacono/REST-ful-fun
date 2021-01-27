const users = require('../models/users').users

exports.testGet = (req, res) => {
  return res.send(users)
}

exports.testGetById = (req, res) => {
  return res.send(users[req.params.userId])
}

exports.testPost = (req, res) => {
  return res.send('Received a POST HTTP method!')
}

exports.testPut = (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource.`)
}

exports.testDelete = (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource.`)
}
