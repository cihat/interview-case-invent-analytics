const BaseService = require('./base-service')
const Book = require('../models/book')

class BookService extends BaseService {
  async findBooks(query) {
    const books = await this.load(query)

    return books
  }

  async createBook(book) {
    const newBook = await this.insert(book)

    return newBook
  }

  async findBook(id) {
    const book = await this.find(id)

    return book
  }

  async updateBook(id, book) {
    const updatedBook = await this.update(id, book)

    return updatedBook
  }

  async deleteBook(id) {
    const deletedBook = await this.remove(id)

    return deletedBook
  }
}

module.exports = new BookService(Book)
