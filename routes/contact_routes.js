const router = require('express').Router()
const { saveMessage, getMessages, getMessagesById } = require('../controllers/contact_controller')

router.post('/', saveMessage)
router.get('/', getMessages)
router.get('/:id', getMessagesById)

module.exports = router

