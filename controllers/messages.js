let messages = require('../models/users').messages
const uuidv4 = require('uuid').v4

exports.testGetMessages = (req, res) => {
  return res.send(messages)
}

exports.testGetById = (req, res) => {
  return res.send(messages[req.params.messageId])
}

exports.postMessage = (req, res) => {
  const id = uuidv4()
  const message = {
    id,
    text: req.body.text,
    userId: req.me.id
  }

  messages[id] = message
  return res.send(message)
}

exports.deleteMessage = (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = messages

  messages = otherMessages

  return res.send(message)
}
