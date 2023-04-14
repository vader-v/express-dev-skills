import { Router } from 'express'

const router = Router()

// GET localhost:3000/
router.get('/', function(req, res) {
  res.render('home', { 
    title: 'Pokemon', 
  })
})

export { router }
