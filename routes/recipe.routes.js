const router = require("express").Router();
const { checkApiKey } = require("../middlewares/auth_handler");
const { errorAuthHandler } = require("../middlewares/errorAuth_handler");

router.get("/prueba", checkApiKey, errorAuthHandler, (req, res) => {
  console.log("si");
  res.status(200).send("hola");
});

module.exports = router;
