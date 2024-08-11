const error_msg= (err,req,res,next)=>{
    console.log(`Error: ${err}`)
    res.status(400).json({
        message:{
            description:err
        }
    })
}

export default error_msg