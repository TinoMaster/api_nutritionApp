const jwt = require("jsonwebtoken");
const config = require("../config/general.config");

const tokenSign = (payload) => {
  const token = jwt.sign(payload, config.jwt_secret);
  return token;
};

module.exports = tokenSign;
