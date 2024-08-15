import express from "express"
import auth from "./auth.js"
import user from "./user.js"
import job from "./job.js"

const router=express.Router();


router.use('/auth',auth);
router.use('/user',user);
router.use('/job',job);


export default router