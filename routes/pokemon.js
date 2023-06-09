import { Router } from 'express'
import * as pokemonCtrl from '../controllers/pokemon.js'

const router = Router()
// GET localhost:3000/
router.get('/', pokemonCtrl.index)
// GET localhost:3000/pokemon/new
router.get('/new', pokemonCtrl.new)
router.get('/:monId', pokemonCtrl.show)
router.get('/:monId/edit', pokemonCtrl.edit)
// GET localhost:3000/index
router.post('/', pokemonCtrl.create)
// GET localhost:3000/index/pokemon
router.delete('/:monId', pokemonCtrl.delete)
// PUT localhost:3000/pokemon/:monId
router.put('/:monId', pokemonCtrl.update)

export { router }
