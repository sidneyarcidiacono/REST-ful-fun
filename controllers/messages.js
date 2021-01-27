const messages = require('../models/users').messages

exports.testGetMessages = (req, res) => {
  return res.send(messages)
}

exports.testGetById = (req, res) => {
  return res.send(messages[req.params.messageId])
}
