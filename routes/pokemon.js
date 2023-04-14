import { Router } from 'express'
import { pokemon } from '../data/pokemon-data.js'

const router = Router()

// GET localhost:3000/trainers
router.get('/', function(req, res) {
  res.render('/pokemon/index', {
    pokemon: pokemon
  })
})
export { router }
