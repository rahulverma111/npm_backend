const validate = require('validate.js');
const constraints  = {
    package:{
        length: {
            minimum: 3,
            message: "name must have atleast 3 charector"
      }
    },
    package:{
        length: {
            minimum: 3,
            message: "name must have atleast 3 charector"
      }
    }
};

const packageValidator = (req,res,next)=>{
    const isNotValid = validate(req.body,constraints);
    if(isNotValid){
        res.status(400).json({
            message:"Wrong data input",
            'ErrorIn':isNotValid
        });
        return;

    };
    next();

};



module.exports = packageValidator;