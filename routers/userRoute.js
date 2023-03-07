const express = require('express');
const router = express.Router();
const userValidator = require('./../validators/userValidator');
const userUpdatevalidator = require('./../validators/userUpdateValidator');
const userControllers= require('./../controllers/userControllers');

router.route('/signup').post(userValidator,userControllers.signup);

router.route('/login').get(userControllers.login);

router.route('/')
.get(userControllers.getAllusers)
.put(userUpdatevalidator,userControllers.updateUser)
.delete(userControllers.deleteUser);





module.exports = router;