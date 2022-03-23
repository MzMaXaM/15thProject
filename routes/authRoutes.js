const
  express = require('express'),
  router = express.Router(),
  authController = require('../controllers/authController')

router.get('/signup', authController.getSignup)
router.post('/signup', authController.signup)

router.get('/login', authController.getLogin)
router.post('/login', authController.login)



module.exports = router