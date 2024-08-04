import express from "express"
import { homecall } from '../controllers/homeControllers.js'
import api_router from './api/index.js'
const router=express.Router();

router.get('/',homecall)
router.use('/api',api_router)


export default router