const controller = require('../controllers/main')

const express = require('express')
const router = express.Router()

router.get('/', controller.testGet)

router.post('/', controller.testPost)

router.put('/:userId', controller.testPut)

router.delete('/:userId', controller.testDelete)

module.exports = router
