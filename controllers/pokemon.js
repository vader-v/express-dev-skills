import { pokemon } from '../data/pokemon-data.js'

function index(req, res) {
  res.render('index', {
    pokemon
  })
}
function home(req, res){
  res.render('home')
  
}

export {
	index,
  home
}