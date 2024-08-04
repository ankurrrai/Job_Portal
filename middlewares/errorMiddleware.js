export const error_msg= (err,statusCode,req,res,next)=>{
    console.log(`${err}`)
    res.status(statusCode).json({
        message:{
            message:err
        }
    })
}