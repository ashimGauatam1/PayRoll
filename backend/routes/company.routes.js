import {Router} from 'express'
import { createCompany, getUserCompany } from '../controllers/company.controller.js'
import { verifyJwt } from '../middlewares/auth.middleware.js'
const router =Router()

router.route("/register").post(verifyJwt,createCompany)
router.route('/usercompany').get(verifyJwt,getUserCompany)

export default router