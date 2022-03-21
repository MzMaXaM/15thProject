const
  express = require('express'),
  router = express.Router()

router.get('/products', (req, res)=>{
  res.render('products/all-products')
})

module.exports = router