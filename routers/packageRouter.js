const express = require('express');
const router = express.Router();
const packageControllers = require('./../controllers/packageControllers')
const packageValidator = require('./../validators/packageValidator')
router.route('/').get(packageControllers.getAllPackage);


router.route('/:id')
.get(packageControllers.getAllFevPackage_UserRealated)
.post(packageValidator,packageControllers.createUserFevpackage)
.put(packageValidator,packageControllers.updateUserOneFevPackage)
.delete(packageControllers.deleteUserOneFevpackage)

module.exports = router;