import express from "express"
import { authReq } from '../../../middlewares/authMiddkeware.js'
import { updateDetail } from "../../../controllers/api/v1/userController.js"
const router=express.Router();


router.post('/update-details',authReq,updateDetail)

export default router