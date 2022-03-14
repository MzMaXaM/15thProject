const User = require('../models/user')

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


module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup
}