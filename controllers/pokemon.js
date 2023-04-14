import { pokemon } from '../data/pokemon-data.js'

function index(req, res) {
  res.render('index', {
    pokemon
  })
}
function home(req, res){
  res.render('pokemon/index')
}
function show(req, res){
  res.render('/index')
}
export {
	index,
  home,
  show
}