const
  express = require('express'),
  router = express.Router(),
  authController = require('../controllers/authController')

router.get('/signup', authController.getSignup)

router.get('/login', authController.getLogin)



module.exports = router