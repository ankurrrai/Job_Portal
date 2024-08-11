import User from '../../../models/users.js'

export const updateDetail=async (req,res,next) => {
    try {
        
        let updatedUser= await User.findOneAndUpdate({ _id: req.user.userId }, req.body)
        return res.status(200).json({
            message:'User Details updated successfully!',
            user:await User.findById(updatedUser._id).select('-password')
        })
    } catch (error) {
        return next(error)
    }
}

