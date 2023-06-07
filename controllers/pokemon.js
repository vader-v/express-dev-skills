import { Mon } from '../models/mon.js'

function index(req, res) {
  Mon.find({})
  .then(pokemon => {
    res.render('pokemon/index', {
      pokemon: pokemon,
      time: req.time,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}
function create(req, res) {
  req.body.starter = req.body.starter === 'on'
  Mon.create(req.body)
  .then(mon => {
    console.log(mon)
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
      title: 'Pokebox'
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

function deleteMon(req, res) {
  Mon.findByIdAndDelete(req.params.monId)
  .then(mon => {
    res.redirect('/pokemon')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/pokemon')
  })
}

function edit(req, res) {
  Mon.findById(req.params.monId)
  .then(mon => {
    res.render('pokemon/edit', {
      mon
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/pokemon')
  })
}


function update(req, res) {
  console.log(req.body)
  // req.body.starter
    // a string ==> 'on'
    // undefined ==> ???
  req.body.starter = req.body.starter === 'on'
  Mon.findByIdAndUpdate(req.params.monId, req.body, {new: true})
  .then(mon => {
    res.redirect(`/pokemon/${mon._id}`)  
  })
  .catch(error => {
    console.log(error)
    res.redirect('/pokemon')
  })
}

export {
	index,
  create,
  show,
  deleteMon as delete,
  newPoke as new,
  update,
  edit,
}