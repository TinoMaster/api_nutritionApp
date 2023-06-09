const verifyToken = require("../../utils/token_verify");

async function checkToken(req, res, next) {
  try {
    const token = await req.headers["token"];
    const verify = await verifyToken(token);
    if (verify?.id) {
      next();
    }
  } catch (err) {
    console.log(err);
    return res.status(401).send("Unauthorized");
  }
}

module.exports = { checkToken };
