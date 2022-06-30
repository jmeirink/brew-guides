import { Router } from 'express'
import * as brewGuidesCtrl from '../controllers/brewguides.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', brewGuidesCtrl.index)
router.get('/new', brewGuidesCtrl.new)
router.get('/:id', brewGuidesCtrl.show)
router.get('/:id/edit', isLoggedIn, brewGuidesCtrl.edit)
router.post('/', isLoggedIn, brewGuidesCtrl.create)
router.put('/:id', isLoggedIn, brewGuidesCtrl.update)
router.delete('/:id', isLoggedIn, brewGuidesCtrl.delete)

router.get('/:id/review', brewGuidesCtrl.review)
router.post('/:id/reviews', isLoggedIn, brewGuidesCtrl.createReview)
router.delete('/:id/reviews/:reviewId', isLoggedIn, brewGuidesCtrl.deleteReview)

export {
  router
}
