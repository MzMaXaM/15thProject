const
  express = require('express'),
  app = express(),
  authRoutes = require('./routes/authRoutes'),
  path = require('path'),
  db = require('./data/database')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(express.urlencoded({
  extended: false
}))
app.use(authRoutes)


db.connectToDatabase()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => {
    console.log('Failed to connect')
    console.log(err)
  })