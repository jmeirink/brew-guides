import { Router } from 'express'
import * as brewGuidesCtrl from '../controllers/brewguides.js'

const router = Router()

// GET localhost:3000/brewguides
router.get('/', brewGuidesCtrl.index)

export {
  router
}
