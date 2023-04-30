const router = require("express").Router();
const { checkToken } = require("../middlewares/routes/check_token");
const { checkAdminRole } = require("../middlewares/routes/check_admin_role");

router.get("/prueba", checkToken, checkAdminRole, (req, res) => {
  console.log("si");
  res.status(200).send("hola");
});

module.exports = router;
