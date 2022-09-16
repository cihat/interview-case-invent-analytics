const express = require('express')
const router = express.Router()
const passport = require('passport')
const userController = require('../controllers/user')

const preventLoginForLoggedInUsers = (req, res, next) => {
  next(req.user && new Error('User is already logged in'))
}

router.get('/', userController.login)

router.post('/register', userController.register)

router.post(
  '/session',
  preventLoginForLoggedInUsers,
  passport.authenticate('local', {
    failWithError: true,
  }),
  userController.login,
  (err, req, res, next) => {
    if (err.status != 401) return next(err)

    next(
      new Error('The username and password you provided did not match out records. Please double-check and try again.')
    )
  }
)

router.delete('/session', userController.logout)

router.get('/get-all-users', userController.findUsers)

router.get('/:id', userController.findUser)

module.exports = router
