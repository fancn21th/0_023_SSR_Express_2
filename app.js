const express = require('express')
const app = express()
const engines = require('consolidate')

// view engine setup
app.engine('hbs', engines.handlebars)
app.set('views', './views')
app.set('view engine', 'hbs')

// Loading middleware

// Declaring application routes
const routes = require('./routes/index')
app.use('/', routes)

const server = app.listen(
  3000,
  () => {
    console.log(`Server is running at http://localhost: ${server.address().port}`)
  }
)

