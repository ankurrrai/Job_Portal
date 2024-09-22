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

export const deleteJob=async (req,res,next)=>{
    // await Jobs.deleteMany({createdBy:req.params.id})
    // return res.status(200).json({
    //     message:"Success"
    // })
    try {
        let jobId=req.params.id;
        let job=await Jobs.findById(jobId);
        if (job){
            if (job.createdBy.toString()===req.user.userId){
                await Jobs.deleteOne({_id:jobId});
                return res.status(200).json({
                    messsage:'Job deleted successfully!'
                })
            } else {
                return next("Invalid Job Details")
            }
        }
        return next("Invalid Job Details")
    } catch (error) {
        next(error)
    }
}

export const updateJob=async (req,res,next)=>{
    try {
        let jobId=req.params.id;
        let job=await Jobs.findById(jobId);

        if (job){
            if (job.createdBy.toString()===req.user.userId){
                let updatedJob= await Jobs.findByIdAndUpdate(jobId,req.body,{new:true,runValidators:true})
                return res.status(200).json({
                    messsage:'Job deleted successfully!',
                    Job:updatedJob
                })
            } else {
                return next("Invalid Job Details")
            }
        }
        return next("Invalid Job Details")
    } catch (error) {
        next(error)
    }
}