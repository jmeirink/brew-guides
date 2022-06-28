import { Router } from 'express'
import * as brewGuidesCtrl from '../controllers/brewguides.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/brewguides
router.get('/', brewGuidesCtrl.index)

// GET localhost:3000/brewguides/:id
router.get('/:id', brewGuidesCtrl.show)

// POST localhost:3000/brewguides
router.post('/', isLoggedIn, brewGuidesCtrl.create)

// GET localhost:3000/brewguides/:id/edit???????????


export {
  router
}
