const redisMiddlewar=(req,res,next)=>{
    console.log(`inside middleware`)
    next();
}

module.exports={redisMiddlewar}