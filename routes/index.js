import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  // res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
  res.redirect('/brewguides/index')
})

export {
  router
}
