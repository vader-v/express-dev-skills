import { Router } from 'express'
import * as pokemonCtrl from '../controllers/pokemon.js'

const router = Router()

// GET localhost:3000/pokemon
router.get('/pokemon', pokemonCtrl.index)
// GET localhost:3000/index
router.get('/index', pokemonCtrl.home)
// GET localhost:3000/index/pokemon
// router.get('/pokemon/index', pokemonCtrl.show)
router.get('/', todosCtrl.index)
router.get('/new', todosCtrl.new)

export { router }
