const Book = require('../models/book')
const User = require('../models/user')
const { bookService } = require('../services')

exports.findBooks = async (req, res, next) => {
  try {
    const books = await bookService.findBooks(req.query)

    res.send(books)
  } catch (e) {
    next(e)
  }
}

exports.createBook = async (req, res, next) => {
  try {
    const book = await bookService.createBook(req.body)

    res.send(book)
  } catch (e) {
    next(e)
  }
}

exports.findBook = async (req, res, next) => {
  try {
    const book = await bookService.findBook(req.params.id)

    res.send(book)
  } catch (e) {
    next(e)
  }
}

exports.updateBook = async (req, res, next) => {
  try {
    const book = await bookService.updateBook(req.params.id, req.body)

    res.send(book)
  } catch (e) {
    next(e)
  }
}


exports.deleteBook = async (req, res, next) => {
  try {
    const book = await bookService.deleteBook(req.params.id)

    res.send(book)
  } catch (e) {
    next(e)
  }
}