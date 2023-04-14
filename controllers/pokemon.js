import { pokemon } from '../data/pokemon-data.js'

function index(req, res) {
  res.render('/pokemon', {
    pokemon
  })
}

export {
	index,
}