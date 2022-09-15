const express = require('express')
const router = express.Router()
const passport = require('passport')
const userController = require('../controllers/user')

router.get('/', userController.findUsers)

// get a one user
router.get('/:id', userController.findUser)

router.post('/register', userController.register)

router.post(
  '/session',
  userController.preventLoginForLoggedInUsers,
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

router.get('/session', userController.checkLoggedIn)

router.delete('/session', userController.logout)

module.exports = router
