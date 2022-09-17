const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Schema = mongoose.Schema

const bookSchema = new Schema({
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
  borrowedBy: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: {
        maxDepth: 2,
      },
    },
  ],
  receivedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null,
    autopopulate: {
      maxDepth: 2,
    },
  },
})

bookSchema.plugin(autopopulate)

module.exports = mongoose.model('Book', bookSchema)
