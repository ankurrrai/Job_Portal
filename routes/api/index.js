import express from "express"
import apiV1_router from './v1/index.js'
const router=express.Router();

router.use('/v1',apiV1_router)


export default router