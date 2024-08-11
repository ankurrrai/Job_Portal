import JWT from 'jsonwebtoken';

export const authReq=async (req,res,next)=>{
    const authHeader=req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')){
        return next('Auth Failed')
    }
    let token=authHeader.split(' ')[1]
    try {
        let payload=JWT.verify(token,process.env.JWTScretKey)
        req.user={userId:payload.userId};
        next();
    } catch (error) {
        return next('Auth Failed')
    }
}