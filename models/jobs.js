import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
    company:{
        type:String,
        required:[true,'Company name is require']
    },
    position:{
        type:String,
        required:[true,'Job psoition is require'],
        maxlength:20
    },
    description:{
        type:String,
        required:[true,'Job Description is require'],
        minlength:10
    },
    status:{
        type:String,
        enum:['pending','reject','interview'],
        default:'pending'
    },
    worktype:{
        type:String,
        enum:['internship','full-time','part-time','contract'],
        default:'full-time'
    },
    
    workLocation:{
        type:String,
        default:'Delhi NCR',
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }

},{timestamps:true})

const Jobs=mongoose.model('Jobs',jobSchema);
export default Jobs