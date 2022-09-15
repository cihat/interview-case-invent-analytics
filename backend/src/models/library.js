const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Schema = mongoose.Schema

const librarySchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 64,
    unique: false,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
      autopopulate: true,
    },
  ],
})

librarySchema.plugin(autopopulate)

module.exports = mongoose.model('Library', librarySchema)