const express = require('express')
const router = express.Router()

const bookController = require('../controllers/book')

router.get('/', bookController.findBooks)

router.post('/', bookController.createBook)

router.get('/:id', bookController.findBook)

router.put('/:id', bookController.updateBook)

router.delete('/:id', bookController.deleteBook)

router.post('/:id/borrow', bookController.borrowBook)

module.exports = router