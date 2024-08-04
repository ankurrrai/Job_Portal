export const homecall=(req,res)=>{
    return res.status(200).json({
        message:'Successfull',
        content:{
            content:'Welcome to my job portal'
        }
    })
}