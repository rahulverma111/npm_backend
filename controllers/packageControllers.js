const { where } = require('sequelize');
const {UserFavPackage }= require('./../connection');


exports.getAllPackage= async(req,res,next )=>{
const packages = await UserFavPackage.findAll();
if(packages.length===0){
    res.status(200).json({
        message:'Nothing in database, please add some package !!',   
    })
}
res.status(200).json({
    status:'Getting all fev package',
    NoofFavpackages:packages.length,
    packages
})
};

exports.createUserFevpackage=async(req,res)=>{
    const{package,comment}=req.body;
    const user_id = req.params.id;
    try{
        const createdPackage = await UserFavPackage.create({
            user_id,package,comment
        });

        res.status(200).json({
            status:'Creation succsess',
            createdPackage
        });

    }catch(err){
        res.status(400).json({
            message:'somthing went wrong',
            err
        })
    }
};

exports.getAllFevPackage_UserRealated = async(req,res)=>{
    const id = req.params.id;

    try{
        const FavPackages = await UserFavPackage.findAll({
            where:{user_id:id}
        })
    
        if(FavPackages.length ===0){
            res.status(200).json({
                message:"User Dont have Fev package Or Invalid user"
            })
            return;
        }
    
    
        res.status(200).json({
            status:"fetching succsess",
            Size:FavPackages.length,
            FavPackages
        })
    }catch(error){
            res.status(400).json({
                message:"somthing went wrong",
                error
            })
    }
}

exports.updateUserOneFevPackage = async(req,res)=>{

    const user_id = req.params.id;
    const{id,package,comment} = req.body;

    try{

        const matchedData = await UserFavPackage.findByPk(id);
        if(!matchedData){
            res.status(400).json({
                message:"package Not found !!!!"
            });
            return;
        }
        if(matchedData.user_id !== user_id){
            res.status(400).json({
                message:"User id not matched with package id"
            })
            return;
        }

        await UserFavPackage.update({package,comment},{where:{id,user_id}});
        res.status(200).json({
            status:"Fev package updatation succsess!",
            UpdatedPackage: matchedData
        })
    }catch(error){
        res.status(400).json({
            message:"somthing went wrong!!!",
            error
        })
    }

}

exports.deleteUserOneFevpackage = async(req,res)=>{
    const user_id = req.params.id;
    const{id}=req.body;

    try{
        const matched = await UserFavPackage.destroy({
            where:{id,user_id}
        });
        
        if(!matched ){
            res.status(400).json({
                message:'somthing went wrong!!!'
            });
            return;
        }

        res.status(200).json({
            message:"Fevorate pakage deleted"
        });

    }catch(error){
        res.status(400).json({
            message:"somthing went wrong!!",
            error
        })
    }
}