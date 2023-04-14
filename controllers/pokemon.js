import { Mon } from '../models/mon.js'

function index(req, res) {
  Mon.find({})
  .then(pokemon => {
    res.render('index', {
      pokemon
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
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