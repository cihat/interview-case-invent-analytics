const User = require('../models/user')
const Validator = require('async-validator').default
const { userService } = require('../services')

exports.register = async (req, res, next) => {
  const descriptor = {
    username: [{ required: true, message: 'Username is required.\n' }],
    password: [
      { required: true, message: 'Password is required.\n' },
      { min: 8, message: 'Password should have a minimum length of 8 characters.\n' },
      {
        pattern: /[a-zA-Z]/,
        message: 'Password should include at least one letter.\n',
      },
      { pattern: /\d/, message: 'Password should include at least one digit.\n' },
      { pattern: /[\W_]/, message: 'Password should include at least one symbol.\n' },
      { pattern: /^\S+$/, message: 'Password should not include spaces.\n' },
    ],
    passwordConfirmation: [
      { required: true, message: 'Password confirmation is required.\n' },
      {
        validator(rule, value, callback, source) {
          return source.password == value || new Error('The passwords you entered are inconsistent.\n')
        },
      },
    ],
    email: [
      { type: 'email', message: 'E-mail is not valid.\n' },
      { required: true, message: 'E-mail is required.\n' },
    ],
  }

  const validator = new Validator(descriptor)

  try {
    await validator.validate(req.body.user)
  } catch ({ errors }) {
    return next({ message: errors?.map(e => e.message).join('') })
  }

  try {
    let createdUser = new User(req.body.user)

    const user = await User.register(createdUser, req.body.user.password)

    req.session.userId = user._id
    req.session.save()

    res.sendStatus(200)
  } catch (e) {
    return next(e)
  }
}

exports.login = async (req, res) => {
  try {
    res.send(req.user)
  } catch (error) {
    return next({
      message: 'Something went wrong while logging in.',
      status: 500,
    })
  }
}

exports.logout = async (req, res, next) => {
  try {
    await req.logout()
    res.sendStatus(200)
  } catch (error) {
    return next({
      message: 'Something went wrong while logging out.',
      status: 500,
    })
  }
}

exports.findUsers = async (req, res) => {
  try {
    res.send(await userService.load())
  } catch (error) {
    return next({ message: 'Users not found.', status: 404 })
  }
}

exports.findUser = async (req, res, next) => {
  try {
    const users = await userService.find({ _id: req.params.id })

    res.send(users)
  } catch (error) {
    return next({ message: 'User not found.', status: 404 })
  }
}
