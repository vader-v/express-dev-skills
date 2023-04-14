import { Router } from 'express'
import * as pokemonCtrl from '../controllers/pokemon.js'
// import * as poke from ' ../data/pokemon-data'
const router = Router()

// GET localhost:3000/pokemon
router.get('/', pokemonCtrl.index)
// GET localhost:3000/index
router.get('/home', pokemonCtrl.home)
// GET localhost:3000/index/pokemon
router.get('/index/:pokemon', pokemonCtrl.index)


export { router }
