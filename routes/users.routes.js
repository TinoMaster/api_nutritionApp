const router = require("express").Router();
const UserService = require("../services/users.service");

/* Middlewares */
const { verifySignUp } = require("../middlewares/users/verify_signup");

router.post("/user/new_user", verifySignUp, UserService.save);

module.exports = router;
