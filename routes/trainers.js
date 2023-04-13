import { Router } from 'express'

const router = Router()

// GET localhost:3000/trainers
app.get('/', function(req, res) {
  res.render('trainers/index', {
    pokemon: pokemon
  })
})

export { router }
