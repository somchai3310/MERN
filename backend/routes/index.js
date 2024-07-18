const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/userSingUp");
const userSignInController = require("../controller/userSingIn");
const userDetailsController = require("../controller/userDetails");
const authToken = require("../middleware/authToken");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get('/user-details', authToken,userDetailsController)

module.exports = router;
