import { Router } from 'express'
import * as brewGuidesCtrl from '../controllers/brewguides.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/brewguides
router.get('/', brewGuidesCtrl.index)

// GET localhost:3000/brewguides/:id
router.get('/:id', brewGuidesCtrl.show)

// GET localhost:3000/brewguides/:id/edit
router.get('/:id/edit', isLoggedIn, brewGuidesCtrl.edit)

// POST localhost:3000/brewguides
router.post('/', isLoggedIn, brewGuidesCtrl.create)

// PUT localhost:3000/brewguides/:id
router.put('/:id', isLoggedIn, brewGuidesCtrl.update)

// DELETE localhost:3000/brewguides/:id
router.delete('/:id', isLoggedIn, brewGuidesCtrl.delete)

export {
  router
}
