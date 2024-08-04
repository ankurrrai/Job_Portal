import User from '../../../models/users.js'

export const addUser=async (req,res)=> {
    try {
        let user=await User.findOne({email:req.body.email})
        if (user){
            return res.status(200).json({
                message:{
                    message:'User already exist!'
                }
                
            })

        } 

        let newUser=await User.create(req.body)
        return res.status(200).json({
            message:{
                message:'User Added successfully!',
                user:await User.findOne({email:newUser.email}).select('-password')
            }
        })
    } catch (err){
        return res.status(400).json({
            message:` ${err}`
        })
    }
}