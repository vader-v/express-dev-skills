// import npm packages
import "dotenv/config.js"
import express from 'express'
// import * as pokemonData from './data/pokemon-data.js'
import path from 'path'
import { fileURLToPath } from 'url'
import createError from 'http-errors'
import logger from 'morgan'
import methodOverride from 'method-override'
// connect to the database with Mongoose
import './config/database.js'
// import routers
import { router as indexRouter } from './routes/index.js'
import { router as pokemonRouter } from './routes/pokemon.js'
// create the express app
const app = express()

// view engine setup
app.set('view engine', 'ejs')

// add middleware below the above line of code
app.use(function(req, res, next) {
  console.log('Hello SEI!')
  req.time = new Date().toLocaleTimeString()
  next()
})
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
app.use(methodOverride('_method'))  // add this
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// mount imported routes
app.use('/', indexRouter)
app.use('/pokemon', pokemonRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(3000, function(){
  console.log('Listening on port 3000')
})

export { app }
