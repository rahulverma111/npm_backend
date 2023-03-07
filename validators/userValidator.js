const validate = require('validate.js');
const constraints  = {
    name:{
        presence: true,
        length: {
            minimum: 3,
            message: "name must have atleast 3 charector"
      }
    },
    email:{
        presence:true,
        email:true
    },
    password:{
        presence:true,
        length:{
            minimum:6,
            message:"Password must have atleast 6 charecter long"
        }
    },
    contact:{
        presence:true,
        length:{is:10}
    }
};

const userValidator = (req,res,next)=>{
    const isNotValid = validate(req.body,constraints);
    if(isNotValid){
        res.status(400).json({
            message:"Wrong data input",
            'ErrorIn':isNotValid
        });

    };
    next();

};



module.exports = userValidator;