import express from "express"
import { authReq } from '../../../middlewares/authMiddkeware.js'
import { createJob, getAllJob } from "../../../controllers/api/v1/jobsController.js"
const router=express.Router();

router.post('/create',authReq,createJob);
router.get('/get-all-job',authReq,getAllJob);

export default router