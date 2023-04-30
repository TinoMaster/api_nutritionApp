const verifyToken = require("../../utils/token_verify");

async function checkAdminRole(req, res, next) {
  try {
    const token = await req.headers["token"];
    const verify = await verifyToken(token);
    if (verify?.id && verify?.role === "admin") {
      next();
    } else {
      return res.status(401).send("Unauthorized");
    }
  } catch (err) {
    console.log(err);
    return res.status(401).send("Unauthorized");
  }
}

module.exports = { checkAdminRole };
