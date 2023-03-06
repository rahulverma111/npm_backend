const express = require('express');
const router = express.Router();
const packageControllers = require('./../controllers/packageControllers')

router.route('/').get(packageControllers.getAllPackage);


router.route('/:id')
.get(packageControllers.getAllFevPackage_UserRealated)
.post(packageControllers.createUserFevpackage)
.put(packageControllers.updateUserOneFevPackage)
.delete(packageControllers.deleteUserOneFevpackage)

module.exports = router;