import express from "express"
import { homecall } from '../controllers/homeControllers.js'
import api_router from './api/index.js'
const router=express.Router();

import { authReq } from '../middlewares/authMiddkeware.js'

// router.get('/',homecall)
router.get('/',authReq,homecall) //with autorization
router.use('/api',api_router)


export default router