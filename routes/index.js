import express from "express"
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('<h1> Welcome To JOB PORTAAAAAAAAL </h1>')
})



export default router