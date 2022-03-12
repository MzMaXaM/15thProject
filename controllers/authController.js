function getSignup(req, res) {
  res.render('auth/signup')
}

function getLogin(req, res) {

}


module.exports = {
  getSignup: getSignup,
  getLogin: getLogin
}