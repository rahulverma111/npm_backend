const express = require('express');
const router = express.Router();

const userControllers= require('./../controllers/userControllers');


router.route('/')
.get(userControllers.getAllusers)
.post(userControllers.createUser)
.put(userControllers.updateUser)
.delete(userControllers.deleteUser);




module.exports = router;