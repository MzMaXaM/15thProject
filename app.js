const
  express = require('express'),
  app = express(),
  authRoutes = require('./routes/authRoutes'),
  baseRoutes = require('./routes/baseRoutes'),
  productsRoutes = require('./routes/productsRoutes'),
  path = require('path'),
  db = require('./data/database'),
  csrf = require('csurf'),
  addCsrfTokenMidl = require('./middlewares/csrf-token'),
  createSessionConfig = require('./config/session'),
  expressSession = require('express-session'),
  sessionConfig = createSessionConfig();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(express.urlencoded({
  extended: false
}))


app.use(expressSession(sessionConfig))
app.use(csrf())
app.use(addCsrfTokenMidl)

app.use(authRoutes)
app.use(baseRoutes)
app.use(productsRoutes)


db.connectToDatabase()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => {
    console.log('Failed to connect')
    console.log(err)
  })