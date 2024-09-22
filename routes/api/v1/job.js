import express from "express"
import { authReq } from '../../../middlewares/authMiddkeware.js'
import { createJob, deleteJob, getAllJob, updateJob } from "../../../controllers/api/v1/jobsController.js"
const router=express.Router();

router.post('/create',authReq,createJob);
router.get('/get-all-job',authReq,getAllJob);
router.delete('/delete-job/:id',authReq,deleteJob)
router.patch('/update-job/:id',authReq,updateJob)

export default router