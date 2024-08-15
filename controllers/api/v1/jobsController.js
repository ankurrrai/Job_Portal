import Jobs from "../../../models/jobs.js"
import User from "../../../models/users.js"

export const createJob=async (req,res,next)=>{
    try {

        if (!req.body.company || !req.body.position || !req.body.description) {
            next('Please provide all mandatory fields')
        }

        req.body.createdBy=req.user.userId;
        let newJob=await Jobs.create(req.body);

        return res.status(200).json({
            message:'Job Created!',
            job:await Jobs.findById(newJob._id).populate({
                path:'createdBy', //pass the field name here
                select:'-password'
            })
        })
    } catch (error) {
        return next(error)
    }
}

export const getAllJob=async (req,res,next) => {
    try {
        let jobs=await Jobs.find({createdBy:req.user.userId})
        return res.status(200).json({
            message:'Success',
            jobs:{
                length:jobs.length,
                jobs:jobs
            }
        })
    } catch (error) {
        next(error)
    }
}