 const validate = require('validate.js');

 const constraints  = {
    name:{
        length: {
            minimum: 3,
            message: "name must have atleast 3 charector"
      }
    },
    email:{
        email:true
    },
    password:{
        length:{
            minimum:6,
            message:"Password must have atleast 6 charecter long"
        }
    },
    contact:{
        length:{is:10}
    }
};

const userUpdatevalidator = (req,res,next)=>{
    const isNotValid = validate(req.body,constraints);
    if(isNotValid){
        res.status(400).json({
            message:"Somthing wrong with input",
            'ErrorIn':isNotValid
        });
        return;
    }
    next();
}

module.exports = userUpdatevalidator;