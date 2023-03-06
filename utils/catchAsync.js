module.exports = (fun)=>{
    return ()=>{
        fun(req,res,next).catch(next);
    }
}