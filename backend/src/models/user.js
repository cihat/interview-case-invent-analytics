const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 64,
      unique: false,
    },
    username: { type: String, unique: true, required: false },
    email: { type: String, required: true, unique: true },
    sessionId: String,
    borrowedBooks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        autopopulate: {
          maxDepth: 2,
        },
      },
    ],
    receivedBooks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        autopopulate: {
          maxDepth: 2,
        },
      },
    ],
  },
  { timestamps: true }
)

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  passwordField: 'password',
  populateFields: ['name, sessionId'],
})

userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
