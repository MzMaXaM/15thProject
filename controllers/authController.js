const User = require('../models/user'),
  authUtil = require('../util/authentication')

function getSignup(req, res) {
  res.render('auth/signup')
}

async function signup(req, res) {
  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postCode,
    req.body.city
  )

  await user.signup()

  res.redirect('/login')
}

function getLogin(req, res) {
  res.render('auth/login')
}

async function login(req, res) {
  const
    user = new User(req.body.email, req.body.password),
    existUser = await user.getUserByEmail()

  if (!existUser) {
    res.redirect('/login')
    return
  }

  const passwordIsCorrect = await user.checkUserPassword(existUser.password)

  if (!passwordIsCorrect) {
    res.redirect('/login')
    return
  }

  authUtil.createUserSession(req, existUser, function () {
    res.redirect('/')
  })
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup
}