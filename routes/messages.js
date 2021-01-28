const messageController = require('../controllers/messages')

const express = require('express')
const router = express.Router()

router.get('/', messageController.testGetMessages)

router.get('/:messageId', messageController.testGetById)

router.post('/', messageController.postMessage)

router.delete('/:messageId', messageController.deleteMessage)

module.exports = router
