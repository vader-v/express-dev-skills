import { Router } from 'express'

const router = Router()

// GET localhost:3000/
router.get('index', function(req, res) {
  res.render('/index', { 
    title: 'Express', 
  })
})

export { router }
