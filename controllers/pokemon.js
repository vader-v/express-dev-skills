import { Mon } from '../models/mon.js'

function index(req, res) {
  Mon.find({})
  .then(pokemon => {
    res.render('pokemon/index', {
      pokemon: pokemon,
      name: 'Poke-Box',
      time: req.time,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}
function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(', ')
  }
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Mon.create(req.body)
  .then(mon => {
    res.redirect('/pokemon')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/pokemon/new')
  })
}
function show(req, res) {
  Mon.findById(req.params.monId)
  .then(mon => {
    res.render('pokemon/show', {
      mon: mon,
      title: 'Pokemon Detail'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/pokemon')
  })
}

function newPoke(req, res) {
  res.render('pokemon/new')
}

export {
	index,
  create,
  show,
  newPoke as new,
}