const router = require("express").Router();
const UserService = require("../services/users.service");

/* Middlewares */
const { verifySignUp } = require("../middlewares/users/verify_signup");
const { verifyLogin } = require("../middlewares/users/verify_login");

router.post("/user/signup", verifySignUp, UserService.save);
router.post("/user/login", verifyLogin, UserService.login);

module.exports = router;
