const Book = require('../models/book')
const User = require('../models/user')
const { bookService } = require('../services')

exports.findBooks = async (req, res, next) => {
  try {
    const books = await bookService.findBooks(req.query)

    res.send(books)
  } catch (e) {
    return next({
      message: 'Something went wrong while fetching books.',
      status: 500,
    })
  }
}

exports.createBook = async (req, res, next) => {
  try {
    const book = await bookService.createBook(req.body)

    res.send(book)
  } catch (e) {
    return next({
      message: 'Something went wrong while creating a book.',
      status: 500,
    })
  }
}

exports.findBook = async (req, res, next) => {
  try {
    const book = await bookService.findBook(req.params.id)

    res.send(book)
  } catch (e) {
    return next({
      message: 'Something went wrong while fetching a book.',
      status: 500,
    })
  }
}

exports.updateBook = async (req, res, next) => {
  try {
    const book = await bookService.updateBook(req.params.id, req.body)

    res.send(book)
  } catch (e) {
    return next({
      message: 'Something went wrong while updating a book.',
      status: 500,
    })
  }
}

exports.deleteBook = async (req, res, next) => {
  try {
    const book = await bookService.deleteBook(req.params.id)

    res.send(book)
  } catch (e) {
    return next({
      message: 'Something went wrong while deleting a book.',
      status: 500,
    })
  }
}
