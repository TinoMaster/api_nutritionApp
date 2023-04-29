const verifyToken = require("../../utils/token_verify");

async function checkToken(req, res, next) {
  try {
    const token = await req.headers["token"];
    const verify = await verifyToken(token);
    console.log(verify);
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = { checkToken };
