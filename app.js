const express = require('express')
const app = express()
const engines = require('consolidate')

// view engine setup
app.engine('hbs', engines.handlebars)
app.set('views', './views')
app.set('view engine', 'hbs')

// Loading partials
const loadPartials = require('./helpers/partialsLoader')
loadPartials()

// Loading middleware

// Declaring application routes
const routes = require('./routes/index')
app.use('/', routes)

// static middleware after the routes
app.use('/img', express.static('public/img'))
app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

// catch 404
app.use((req, res, next) => {
  res.render('404', {})
})

// binding application to specified port
const server = app.listen(
  3000,
  () => {
    console.log(`Server is running at http://localhost: ${server.address().port}`)
  }
)

