// const catchAsync = require('./../utils/catchAsync');
const {User}= require('../connection')

exports.getAllusers = async(req,res)=>{
    const users = await User.findAll();

    res.status(200).json({
    status:'All users details fetched sucsess',
    NoOfusers:users.length,
    users
})
}

exports.createUser = async(req,res,next)=>{
    const {name,email,contact}=req.body;
    const user = await User.create({
        name,email,contact
    });
 
    res.status(200).json({
        status:'User creation sucsess',
        user,
    })

}
exports.updateUser = async(req,res)=>{

    const{id,name,email,contact} = req.body;

    try{
        const findingRes = await User.update({name,email,contact},{
            where:{id}
        })

        if(findingRes[0]===0){
            res.status(400).json({
                message:'User not found'
            })
            return;
        }

        const UpdatedUserInfo = await User.findByPk(id);

        res.status(200).json({
            message:"User Information updated",
            UpdatedUserInfo
        })
    }catch(error){
        res.status(400).json({
            message:"somthing went wrong",
            error

        })
    }
}

exports.deleteUser = async(req,res)=>{
    const {id} = req.body;
    try{
        await User.destroy({
            where:{id:id}
        });

        res.status(200).json({
            message:"delete succsess"
        });

    }catch(err){
        
        res.status(400).json({
            message:'Somthing went wrong',
        })
    }
}