import User from '../../../models/users.js'

export const addUser=async (req,res,next)=> {
    try {
        let user=await User.findOne({email:req.body.email})
        if (user){
            return next('User already exist')
        } 
        
        let newUser=await User.create(req.body)
        newUser.password=undefined;
        let token=newUser.createJWT()
        return res.status(200).json({
            description:{
                message:'User Added successfully!',
                user:await User.findOne({email:newUser.email}).select('-password'),
                token:token
            }
        })
    } catch (err){
        return next(err);
    }
}

export const createSession=async (req,res,next)=> {
    try {
        if (!req.body.email || !req.body.password){
            return next('Email and password is require')
        }
        let user=await User.findOne({email:req.body.email})
        if (!user){
            return next('User is not registered');
        }
        let isMatch=await user.verifyPasswordSync(req.body.password);
        if (!isMatch){
            return next('Email or password is incorrect')
        }
        user.password=undefined;
        let token=user.createJWT();
        return res.status(200).json({
            message:'Login SuccessFully',
            user:{
                user: [{
                    name:user.name,
                    email:user.email,
                    location:user.location

                }]
            },
            token:token
        })

    } catch (error) {
        return next(error)
        
    }
}