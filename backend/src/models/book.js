const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Schema = mongoose.Schema

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 64,
      unique: false,
    },
    author: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 64,
      unique: false,
    },
    description: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 64,
      unique: false,
    },
  }
)

module.exports = mongoose.model('Book', bookSchema)