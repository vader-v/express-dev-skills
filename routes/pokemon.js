import { Router } from 'express'
import * as pokemonCtrl from '../controllers/pokemon.js'

const router = Router()

router.get('/', pokemonCtrl.index)
router.get('/new', pokemonCtrl.new)
// GET localhost:3000/pokemon
router.get('/pokemon', pokemonCtrl.index)
// GET localhost:3000/index
router.post('/', pokemonCtrl.create)
// GET localhost:3000/index/pokemon
router.get('/:monId', pokemonCtrl.show)

export { router }
