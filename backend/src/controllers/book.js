const Book = require('../models/book')
const User = require('../models/user')
const { bookService, userService } = require('../services')

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
    const existBook = await bookService.find(req.params.id)
    if (!existBook) {
      return next({ message: 'Book not found.', status: 404 })
    }

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

exports.receiveBook = async (req, res, next) => {
  try {
    const user = await userService.find(req.user._id)
    const book = await bookService.find(req.params.id)

    if (user.receivedBooks.includes(book._id)) {
      return next({ message: 'You have already received this book.', status: 400 })
    }

    if (book.receivedBy) {
      return next({ message: 'This book is already received.', status: 400 })
    }

    if (user.receivedBooks.length >= 3) {
      return next({ message: 'You have already received 3 books.', status: 400 })
    }

    user.receivedBooks.push(book._id)
    user.receivedHistoryBooks.push(book._id)
    book.receivedBy = user._id
    book.receivedHistoryBys = user._id

    await user.save()
    await book.save()

    res.sendStatus(200)
  } catch (error) {
    return next({ message: 'Something went wrong.', status: 500 })
  }
}
