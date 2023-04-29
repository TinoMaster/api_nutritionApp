const router = require("express").Router();
const { checkToken } = require("../middlewares/routes/check_token");
const { errorAuthHandler } = require("../middlewares/routes/errorAuth_handler");

router.get("/prueba", checkToken, (req, res) => {
  console.log("si");
  res.status(200).send("hola");
});

module.exports = router;
