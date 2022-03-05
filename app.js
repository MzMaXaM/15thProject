const
  express = require('express'),
  app = express(),
  authRoutes = require('./routes/authRoutes'),
  path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(authRoutes)

app.listen(3000)