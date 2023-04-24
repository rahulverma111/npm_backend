const express = require("express");
const router = express.Router();
const handlebarsControllers = require("./../controllers/handlebarsControllers");

router.route("/").get(handlebarsControllers.handlebarsTemplet);

module.exports = router;
