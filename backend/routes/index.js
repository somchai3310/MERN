const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/userSingUp");
const userSignInController = require("../controller/userSingIn");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);

module.exports = router;
