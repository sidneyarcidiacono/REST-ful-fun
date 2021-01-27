const messageController = require('../controllers/messages')

const express = require('express')
const router = express.Router()

router.get('/', messageController.testGetMessages)

router.get('/:messageId', messageController.testGetById)

module.exports = router
