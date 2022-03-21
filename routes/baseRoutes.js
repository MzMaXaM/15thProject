const
  express = require('express'),
  router = express.Router()

router.get('/', (req, res)=>{
  res.redirect('/products')
})

module.exports = router